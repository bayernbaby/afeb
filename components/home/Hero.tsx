'use client'

import { useTranslation } from '@/lib/i18n'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Link } from '@/components/ui/link'
import { localizedUrl } from '@/lib/i18n'
import type { Language } from '@/translations'

export function Hero() {
    const { t, locale } = useTranslation()

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-20 md:py-32">
                <div className="max-w-4xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('home.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 md:mb-12">
                        {t('home.hero.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" asChild>
                            <Link href={localizedUrl('/contact', locale as Language)}>
                                {t('home.hero.cta.primary')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href={localizedUrl('/about', locale as Language)}>
                                {t('home.hero.cta.secondary')}
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
} 