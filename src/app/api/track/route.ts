import { NextResponse } from 'next/server'

// Simple in-memory store for demo purposes
// In production, this would be a database connection
let analyticsData = {
    pageViews: 0,
    clicks: 0,
    quotes: 0,
    referrers: {} as Record<string, number>,
    topProducts: {} as Record<string, number>,
    recentEvents: [] as any[]
}

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { event, product, referrer } = body

        // Log raw event
        analyticsData.recentEvents.unshift({ ...body, id: Date.now() })
        if (analyticsData.recentEvents.length > 50) analyticsData.recentEvents.pop() // Keep last 50

        // Aggregations
        if (event === 'page_view') {
            analyticsData.pageViews++

            // Track Referrer
            // Simple normalization to group search engines/socials
            let refSource = 'Direto'
            if (referrer && referrer.includes('google')) refSource = 'Google'
            else if (referrer && referrer.includes('instagram')) refSource = 'Instagram'
            else if (referrer && referrer.includes('facebook')) refSource = 'Facebook'
            else if (referrer && referrer.length > 0) refSource = new URL(referrer).hostname

            analyticsData.referrers[refSource] = (analyticsData.referrers[refSource] || 0) + 1
        }

        if (event === 'add_to_cart') {
            if (product) {
                analyticsData.topProducts[product] = (analyticsData.topProducts[product] || 0) + 1
            }
        }

        if (event === 'whatsapp_click') {
            analyticsData.clicks++
        }

        if (event === 'quote_sent') {
            analyticsData.quotes++
        }

        return NextResponse.json({ success: true })
    } catch (e) {
        return NextResponse.json({ error: 'Failed to track' }, { status: 500 })
    }
}

export async function GET() {
    return NextResponse.json(analyticsData)
}
