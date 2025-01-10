export interface SanityImage {
    asset: {
        _ref: string
        _type: string
    }
    alt?: string
}

export interface Settings {
    title: string
    description?: any // Portable Text
    ogImage?: SanityImage
    footer?: string
}

export interface ShowcaseProject {
    _id: string
    name: string
    slug: { current: string }
    client?: string
    description?: string
    mainImage?: SanityImage
    year?: number
    tags?: string[]
    quote?: string
} 