import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Protect /admin/dashboard routes
    if (pathname.startsWith('/admin/dashboard')) {
        const isAdminAuth = request.cookies.get('admin_auth')?.value

        if (!isAdminAuth) {
            return NextResponse.redirect(new URL('/admin', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/dashboard/:path*'],
}
