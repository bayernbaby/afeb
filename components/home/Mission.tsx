'use client'

import { useTranslation } from '@/lib/i18n'

export function Mission() {
    const { t } = useTranslation()

    return (
        <section className="relative bg-muted/50">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('home.mission.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-8">
                        {t('home.mission.description')}
                    </p>
                </div>
            </div>
        </section>
    )
} 