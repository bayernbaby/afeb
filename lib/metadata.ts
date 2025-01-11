import type { Metadata } from 'next'

interface GenerateMetadataProps {
    title: string
    description: string
    path: string
    locale: 'fr' | 'en'
    image?: string
    noindex?: boolean
}

export function generateMetadata({
    title,
    description,
    path,
    locale,
    image = '/og-image.jpg',
    noindex = false,
}: GenerateMetadataProps): Metadata {
    return {
        title,
        description,
        robots: {
            index: !noindex,
            follow: true,
        },
        alternates: {
            canonical: locale === 'fr' ? path : `/en${path}`,
            languages: {
                'fr': path,
                'en': `/en${path}`,
            },
        },
        openGraph: {
            title,
            description,
            images: [image],
            locale: locale === 'fr' ? 'fr_FR' : 'en_US',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [image],
        },
    }
}