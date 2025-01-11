'use client'

import { useTranslation } from '@/lib/i18n'
import Image from 'next/image'

export function AboutHero() {
    const { t } = useTranslation()

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/about-hero.jpg"
                    alt=""
                    fill
                    className="object-cover opacity-20"
                    priority
                />
            </div>
            <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('about.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground">
                        {t('about.hero.subtitle')}
                    </p>
                </div>
            </div>
        </section>
    )
} 