import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

    // Define your routes here
    const routes = [
        '',
        '/about',
        '/activities',
        '/events',
        '/contact',
    ]

    const sitemap = routes.flatMap(route => [
        {
            url: `${baseUrl}${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        },
        {
            url: `${baseUrl}/en${route}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: route === '' ? 1 : 0.8,
        },
    ])

    return sitemap
} 