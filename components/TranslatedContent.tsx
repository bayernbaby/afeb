'use client'

import { useTranslation } from '@/lib/i18n'

export function TranslatedContent() {
    const { t } = useTranslation()

    return (
        <div className="space-y-4">
            <h2 className="text-xl">
                {t('home.hero.title')}
            </h2>
            <p>
                {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded">
                    {t('common.contactUs')}
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded">
                    {t('common.joinUs')}
                </button>
            </div>
        </div>
    )
} 