'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CalendarDays, MapPin } from 'lucide-react'
import Link from 'next/link'
import { localizedUrl } from '@/lib/i18n'
import type { Language } from '@/translations'

interface EventCardProps {
    id: string
    title: string
    description: string
    date: string
    location: string
    type: string
    locale: Language
}

export function EventCard({ id, title, description, date, location, type, locale }: EventCardProps) {
    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <div className="flex flex-col space-y-2 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4" />
                        {date}
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        {location}
                    </div>
                </div>
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                    {type}
                </span>
            </CardContent>
            <CardFooter className="mt-auto">
                <Button variant="link" asChild className="px-0">
                    <Link href={localizedUrl(`/events/${id}`, locale)}>
                        {locale === 'fr' ? 'En savoir plus →' : 'Learn more →'}
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    )
} 