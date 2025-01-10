import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl

    // Skip files and special routes
    if (pathname.includes('.') || pathname.startsWith('/_next') || pathname.startsWith('/editor')) {
        return NextResponse.next()
    }

    // If user visits /fr, redirect to /
    if (pathname.startsWith('/fr')) {
        const url = request.nextUrl.clone()
        url.pathname = pathname.replace(/^\/fr/, '')
        return NextResponse.redirect(url)
    }

    // For all other paths, just continue
    return NextResponse.next()
}

export const config = {
    matcher: [
        // Match all paths except api, _next, and files with extensions
        '/((?!api|_next|.*\\.[^/]*$).*)',
    ],
} 