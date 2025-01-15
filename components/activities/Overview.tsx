'use client'

import { useTranslation } from '@/lib/i18n'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { GraduationCap, Calendar, BookOpen } from 'lucide-react'

const SECTIONS = ['training', 'events', 'resources'] as const

export function Overview() {
    const { t } = useTranslation()

    const icons = {
        training: GraduationCap,
        events: Calendar,
        resources: BookOpen
    }

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('activities.overview.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('activities.overview.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {SECTIONS.map((section) => {
                        const Icon = icons[section]
                        return (
                            <Card key={section}>
                                <CardHeader>
                                    <div className="mb-4 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                                        <Icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <CardTitle className="mb-2">
                                        {t(`activities.overview.sections.${section}.title`)}
                                    </CardTitle>
                                    <CardDescription>
                                        {t(`activities.overview.sections.${section}.description`)}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
} 