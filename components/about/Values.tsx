'use client'

import { useTranslation } from '@/lib/i18n'
import { ValueCard } from '@/components/cards/ValueCard'
import { Heart, Users, Trophy, Lightbulb } from 'lucide-react'

const VALUE_ICONS = {
    passion: Heart,
    collaboration: Users,
    excellence: Trophy,
    innovation: Lightbulb,
}

interface ValuesProps {
    values: {
        id: string
        title: {
            fr: string
            en: string
        }
        description: {
            fr: string
            en: string
        }
        icon: keyof typeof VALUE_ICONS
    }[]
}

export function Values({ values }: ValuesProps) {
    const { t, locale } = useTranslation()

    return (
        <section className="relative bg-muted/50 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('about.values.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('about.values.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value) => (
                        <ValueCard
                            key={value.id}
                            title={value.title[locale as 'fr' | 'en']}
                            description={value.description[locale as 'fr' | 'en']}
                            icon={VALUE_ICONS[value.icon]}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
} 