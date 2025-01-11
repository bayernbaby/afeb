'use client'

import { useTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { CalendarDays } from 'lucide-react'
import Link from 'next/link'
import { localizedUrl } from '@/lib/i18n'
import type { Language } from '@/translations'

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
                    {[...Array(3)].map((_, i) => (
                        <Card key={i}>
                            <CardHeader>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                                    <CalendarDays className="h-4 w-4" />
                                    {t(`home.events.items.${i}.date`)}
                                </div>
                                <CardTitle className="mb-2">
                                    {t(`home.events.items.${i}.title`)}
                                </CardTitle>
                                <CardDescription>
                                    {t(`home.events.items.${i}.description`)}
                                </CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <Button variant="link" asChild className="px-0">
                                    <Link href={localizedUrl(`/events/${i}`, locale as Language)}>
                                        {t('common.learnMore')} →
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
} 