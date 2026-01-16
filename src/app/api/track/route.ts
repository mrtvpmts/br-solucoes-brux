import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { event, product, url, referrer, user_agent, session_id } = body

        // Insert event into Supabase
        const { data, error } = await supabase
            .from('analytics_events')
            .insert([
                {
                    event,
                    product: product || null,
                    url: url || null,
                    referrer: referrer || null,
                    user_agent: user_agent || null,
                    session_id: session_id || null
                }
            ])
            .select()

        if (error) {
            console.error('Supabase insert error:', error)
            return NextResponse.json({ error: 'Failed to track event' }, { status: 500 })
        }

        return NextResponse.json({ success: true, data })
    } catch (e) {
        console.error('Track API error:', e)
        return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
    }
}

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url)
        const startDate = searchParams.get('startDate')
        const endDate = searchParams.get('endDate')

        // Build query
        let query = supabase
            .from('analytics_events')
            .select('*')
            .order('created_at', { ascending: false })

        // Apply date filters if provided
        if (startDate) {
            query = query.gte('created_at', startDate)
        }
        if (endDate) {
            query = query.lte('created_at', endDate)
        }

        const { data: events, error } = await query

        if (error) {
            console.error('Supabase query error:', error)
            return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 })
        }

        // Aggregate data
        const analyticsData = {
            pageViews: 0,
            clicks: 0,
            quotes: 0,
            referrers: {} as Record<string, number>,
            topProducts: {} as Record<string, number>,
            recentEvents: events || []
        }

        events?.forEach(event => {
            // Count page views
            if (event.event === 'pageview' || event.event === 'page_view') {
                analyticsData.pageViews++

                // Track referrers
                if (event.referrer) {
                    let refSource = 'Direto'
                    if (event.referrer.includes('google')) refSource = 'Google'
                    else if (event.referrer.includes('instagram')) refSource = 'Instagram'
                    else if (event.referrer.includes('facebook')) refSource = 'Facebook'
                    else if (event.referrer.length > 0) {
                        try {
                            refSource = new URL(event.referrer).hostname
                        } catch {
                            refSource = event.referrer
                        }
                    }
                    analyticsData.referrers[refSource] = (analyticsData.referrers[refSource] || 0) + 1
                }
            }

            // Count WhatsApp clicks
            if (event.event === 'whatsapp_click') {
                analyticsData.clicks++
            }

            // Count quote requests
            if (event.event === 'quote_request' || event.event === 'quote_sent') {
                analyticsData.quotes++
            }

            // Track products
            if (event.product && (event.event === 'add_to_cart' || event.event === 'quote_request')) {
                analyticsData.topProducts[event.product] = (analyticsData.topProducts[event.product] || 0) + 1
            }
        })

        return NextResponse.json(analyticsData)
    } catch (e) {
        console.error('GET API error:', e)
        return NextResponse.json({ error: 'Failed to fetch analytics' }, { status: 500 })
    }
}
