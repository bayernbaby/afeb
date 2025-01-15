'use client'

import { useTranslation } from '@/lib/i18n'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Video, FileText, Newspaper, Edit } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import type { Language } from '@/translations'

interface Resource {
    id: string
    title: {
        fr: string
        en: string
    }
    description: {
        fr: string
        en: string
    }
    type: 'video' | 'document' | 'article' | 'tool'
    url: string
    thumbnail?: string
}

interface ResourcesProps {
    resources: Resource[]
}

export function Resources({ resources }: ResourcesProps) {
    const { t, locale } = useTranslation()

    const icons = {
        video: Video,
        document: FileText,
        article: Newspaper,
        tool: Edit
    }

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('activities.resources.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('activities.resources.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {resources.map((resource) => {
                        const Icon = icons[resource.type]
                        return (
                            <Card key={resource.id} className="flex flex-col">
                                {resource.thumbnail && (
                                    <div className="relative h-48 w-full">
                                        <Image
                                            src={resource.thumbnail}
                                            alt=""
                                            fill
                                            className="object-cover rounded-t-lg"
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <div className="mb-4">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="mb-2">
                                        {resource.title[locale as Language]}
                                    </CardTitle>
                                    <CardDescription>
                                        {resource.description[locale as Language]}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="mt-auto">
                                    <Button asChild>
                                        <Link href={resource.url} target="_blank" rel="noopener noreferrer">
                                            {t('activities.resources.access')}
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 