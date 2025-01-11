'use client'

import { useTranslation } from '@/lib/i18n'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const HIGHLIGHTS_COUNT = 3

export function KeyHighlights() {
    const { t } = useTranslation()

    return (
        <section className="relative">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('home.highlights.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('home.highlights.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[...Array(HIGHLIGHTS_COUNT)].map((_, i) => (
                        <Card key={i} className="text-center">
                            <CardHeader>
                                <CardTitle className="mb-2">
                                    {t(`home.highlights.items.${i}.title`)}
                                </CardTitle>
                                <CardDescription>
                                    {t(`home.highlights.items.${i}.description`)}
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
} 