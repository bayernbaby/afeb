import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { EventDetail } from '@/components/events/EventDetail'
import { getEventBySlug } from '@/sanity/lib/client'

interface EventPageProps {
    params: {
        slug: string
    }
}

export default async function EventPage({ params }: EventPageProps) {
    const event = await getEventBySlug(params.slug)

    if (!event) {
        notFound()
    }

    return <EventDetail event={event} />
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
    const event = await getEventBySlug(params.slug)

    if (!event) {
        return {
            title: 'Event Not Found | AFEB',
            description: 'The requested event could not be found.'
        }
    }

    return {
        title: `${event.title.fr} | AFEB`,
        description: event.description.fr,
        alternates: {
            canonical: `/events/${params.slug}`,
            languages: {
                'en': `/en/events/${params.slug}`,
                'fr': `/events/${params.slug}`
            }
        }
    }
} 