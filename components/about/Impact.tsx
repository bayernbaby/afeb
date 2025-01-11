'use client'

import { useTranslation } from '@/lib/i18n'
import { MetricCard } from '@/components/cards/MetricCard'

interface ImpactProps {
    metrics: {
        id: string
        value: number
        label: {
            fr: string
            en: string
        }
        description?: {
            fr: string
            en: string
        }
        prefix?: string
        suffix?: string
    }[]
}

export function Impact({ metrics }: ImpactProps) {
    const { t, locale } = useTranslation()

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('about.impact.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('about.impact.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric) => (
                        <MetricCard
                            key={metric.id}
                            value={metric.value}
                            label={metric.label[locale as 'fr' | 'en']}
                            description={metric.description?.[locale as 'fr' | 'en']}
                            prefix={metric.prefix}
                            suffix={metric.suffix}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 