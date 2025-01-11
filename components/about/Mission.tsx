'use client'

import { useTranslation } from '@/lib/i18n'
import Image from 'next/image'

export function Mission() {
    const { t } = useTranslation()

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] rounded-2xl overflow-hidden">
                        <Image
                            src="/images/mission.jpg"
                            alt="Mission AFEB"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            {t('about.mission.title')}
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground">
                            <p>{t('about.mission.description')}</p>
                            <p>{t('about.mission.vision')}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
} 