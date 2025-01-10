import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'fr']
const defaultLocale = 'fr'

// Simplified public file check
function isPublicFile(pathname: string): boolean {
    return pathname.includes('.')  // This will match .js, .ico, .png etc.
}

export function middleware(request: NextRequest) {
    const pathname = request.nextUrl.pathname

    // Immediately skip all files (not pages)
    if (isPublicFile(pathname)) {
        return NextResponse.next()
    }

    // If path starts with /fr, redirect to root path
    if (pathname.startsWith('/fr')) {
        return NextResponse.redirect(
            new URL(pathname.replace(/^\/fr/, '') || '/', request.url)
        )
    }

    // If we're on an English path or root path, continue
    if (pathname.startsWith('/en') || pathname === '/') {
        return NextResponse.next()
    }

    // For all other paths without a locale, treat as French (root path)
    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for:
         * 1. /api/ routes
         * 2. /_next/ (Next.js internals)
         * 3. /.* (files in public directory)
         */
        '/((?!api|_next|.*\\.[^/]*$).*)'
    ],
} 