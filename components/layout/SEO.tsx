'use client'

import { useTranslation } from '@/lib/i18n'
import Head from 'next/head'

interface SEOProps {
    title: {
        fr: string
        en: string
    }
    description: {
        fr: string
        en: string
    }
    image?: string
    noindex?: boolean
    nofollow?: boolean
}

export function SEO({
    title,
    description,
    image = '/og-image.jpg',
    noindex = false,
    nofollow = false
}: SEOProps) {
    const { locale } = useTranslation()
    const currentTitle = locale === 'fr' ? title.fr : title.en
    const currentDescription = locale === 'fr' ? description.fr : description.en
    const robotDirectives = [
        noindex ? 'noindex' : 'index',
        nofollow ? 'nofollow' : 'follow'
    ].join(', ')

    return (
        <Head>
            <title>{currentTitle}</title>
            <meta name="description" content={currentDescription} />
            <meta name="robots" content={robotDirectives} />

            {/* Open Graph */}
            <meta property="og:title" content={currentTitle} />
            <meta property="og:description" content={currentDescription} />
            <meta property="og:image" content={image} />
            <meta property="og:locale" content={locale === 'fr' ? 'fr_FR' : 'en_US'} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={currentTitle} />
            <meta name="twitter:description" content={currentDescription} />
            <meta name="twitter:image" content={image} />

            {/* Language alternates */}
            <link
                rel="alternate"
                hrefLang="fr"
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/`}
            />
            <link
                rel="alternate"
                hrefLang="en"
                href={`${process.env.NEXT_PUBLIC_SITE_URL}/en`}
            />
        </Head>
    )
} 