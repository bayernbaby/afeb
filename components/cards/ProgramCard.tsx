'use client'

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from '@/components/ui/link'
import { localizedUrl } from '@/lib/i18n'
import type { Language } from '@/translations'
import Image from 'next/image'

interface ProgramCardProps {
    id: string
    title: string
    description: string
    duration: string
    topics: string[]
    image: string
    locale: Language
}

export function ProgramCard({ id, title, description, image, features, locale }: ProgramCardProps) {
    return (
        <Card className="h-full flex flex-col overflow-hidden">
            <div className="relative h-48 w-full">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <CardHeader>
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <ul className="space-y-2">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
            <div className="p-6 pt-0">
                <Button className="w-full" asChild>
                    <Link href={localizedUrl(`/activities/${id}`, locale)}>
                        {locale === 'fr' ? 'En savoir plus' : 'Learn more'}
                    </Link>
                </Button>
            </div>
        </Card>
    )
} 