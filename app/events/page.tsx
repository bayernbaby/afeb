import { Metadata } from 'next'
import { EventsHero } from '@/components/events/Hero'
import { EventsList } from '@/components/events/EventsList'
import { getEvents } from '@/sanity/lib/client'

export const metadata: Metadata = {
    title: 'Événements | AFEB',
    description: 'Découvrez nos événements à venir et rejoignez-nous pour des expériences enrichissantes.',
    alternates: {
        canonical: '/events',
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