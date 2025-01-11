'use client'

import { useTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { EventCard } from '@/components/cards/EventCard'
import Link from 'next/link'
import { localizedUrl } from '@/lib/i18n'
import type { Language } from '@/translations'

const PREVIEW_EVENTS = [0, 1, 2]

export function EventsPreview() {
    const { t, locale } = useTranslation()

    return (
        <section className="relative bg-muted/50">
            <div className="container mx-auto px-4 py-20">
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {t('home.events.title')}
                        </h2>
                        <p className="text-lg text-muted-foreground">
                            {t('home.events.subtitle')}
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href={localizedUrl('/events', locale as Language)}>
                            {t('home.events.viewAll')}
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {PREVIEW_EVENTS.map((i) => (
                        <EventCard
                            key={i}
                            id={`preview-${i}`}
                            title={t(`home.events.items.${i}.title`)}
                            description={t(`home.events.items.${i}.description`)}
                            date={t(`home.events.items.${i}.date`)}
                            location={t(`home.events.items.${i}.location`)}
                            type={t(`home.events.items.${i}.type`)}
                            locale={locale as Language}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 