import { Metadata } from 'next'
import { EventsHero } from '@/components/events/Hero'
import { EventsList } from '@/components/events/EventsList'
import { getEvents } from '@/sanity/lib/client'

export const metadata: Metadata = {
    title: 'Events | AFEB',
    description: 'Discover our upcoming events and join us for enriching experiences.',
    alternates: {
        canonical: '/en/events',
        languages: {
            'en': '/en/events',
            'fr': '/events'
        }
    }
}

export default async function EventsPage() {
    const events = await getEvents()

    return (
        <>
            <EventsHero />
            <EventsList events={events} />
        </>
    )
} 