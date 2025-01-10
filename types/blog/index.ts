import { ImageAsset, Slug } from 'sanity'

export interface Post {
    _id: string
    title: string
    slug: Slug
    mainImage?: {
        asset: ImageAsset
        alt?: string
    }
    excerpt?: string
    publishedAt?: string
    categories?: Array<{
        title: string
    }>
    author?: {
        name: string
        image?: {
            asset: ImageAsset
        }
    }
    body?: any // Consider creating a specific type for portable text content
} 