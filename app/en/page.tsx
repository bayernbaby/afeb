import { Hero } from '@/components/home/Hero'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home',
    alternates: {
        canonical: '/en',
        languages: {
            'en': '/en',
            'fr': '/'
        }
    }
}

export default function Home() {
    return (
        <>
            <Hero />
        </>
    )
} 