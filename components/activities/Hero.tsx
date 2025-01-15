'use client'

import { useTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'

export function ActivitiesHero() {
    const { t } = useTranslation()

    const scrollToPrograms = () => {
        document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/activities-hero.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>
            <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('activities.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                        {t('activities.hero.subtitle')}
                    </p>
                    <Button onClick={scrollToPrograms}>
                        {t('activities.hero.cta')}
                        <ArrowDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </div>
        </section>
    )
} 