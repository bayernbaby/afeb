'use client'

import { useTranslation } from '@/lib/i18n'
import { EventCard } from '@/components/cards/EventCard'
import type { Language } from '@/translations'

interface Event {
    id: string
    title: {
        fr: string
        en: string
    }
    description: {
        fr: string
        en: string
    }
    date: string
    location: string
    type: string
}

interface EventsListProps {
    events: Event[]
}

export function EventsList({ events }: EventsListProps) {
    const { t, locale } = useTranslation()

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('events.list.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('events.list.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <EventCard
                            key={event.id}
                            id={event.id}
                            title={event.title[locale as Language]}
                            description={event.description[locale as Language]}
                            date={event.date}
                            location={event.location}
                            type={event.type}
                            locale={locale as Language}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 