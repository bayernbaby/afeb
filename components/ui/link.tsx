'use client'

import { default as NextLink } from 'next/link'
import { useTranslation } from '@/lib/i18n'
import { type ComponentProps } from 'react'

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
    href: string
}

export function Link({ href, ...props }: LinkProps) {
    const { locale } = useTranslation()

    // Don't modify external links, anchor links, or API routes
    if (href.startsWith('http') ||
        href.startsWith('#') ||
        href.startsWith('mailto:') ||
        href.startsWith('/api')) {
        return <NextLink href={href} {...props} />
    }

    // If we're already on English path, don't add prefix
    if (href.startsWith('/en/')) {
        return <NextLink href={href} {...props} />
    }

    // Remove leading slash for path processing
    const cleanPath = href.startsWith('/') ? href.slice(1) : href

    // For English locale, add /en prefix unless it's already there
    // For French locale, ensure no /en prefix
    const prefixedHref = locale === 'en'
        ? `/en/${cleanPath}`
        : `/${cleanPath}`

    return <NextLink href={prefixedHref} {...props} />
} 