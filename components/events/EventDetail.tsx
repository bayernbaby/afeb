'use client'

import { useTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import { Link } from '@/components/ui/link'
import { format } from 'date-fns'
import { fr, enUS } from 'date-fns/locale'
import type { Language } from '@/translations'

interface EventDetailProps {
    event: {
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
        image?: string
    }
}

export function EventDetail({ event }: EventDetailProps) {
    const { t, locale } = useTranslation()
    const dateLocale = locale === 'fr' ? fr : enUS

    return (
        <article className="relative">
            {event.image && (
                <div className="relative h-[40vh] w-full">
                    <Image
                        src={event.image}
                        alt=""
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
            )}

            <div className="container mx-auto px-4 py-12">
                <Button variant="ghost" asChild className="mb-8">
                    <Link href={`/${locale === 'fr' ? '' : 'en/'}events`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        {t('events.detail.backToEvents')}
                    </Link>
                </Button>

                <div className="max-w-3xl">
                    <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4" />
                            {format(new Date(event.date), 'PPP', { locale: dateLocale })}
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4" />
                            {event.location}
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                        {event.title[locale as Language]}
                    </h1>

                    <div className="prose prose-lg dark:prose-invert">
                        <p>{event.description[locale as Language]}</p>
                    </div>

                    <div className="mt-12">
                        <Button size="lg">
                            {t('events.detail.register')}
                        </Button>
                    </div>
                </div>
            </div>
        </article>
    )
} 