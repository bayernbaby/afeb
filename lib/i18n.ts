'use client'

import { usePathname } from 'next/navigation'
import { translations, Language } from '@/translations'

const publicPaths = ['/sw.js', '/favicon.ico']

export function useTranslation() {
    const pathname = usePathname()

    // Ignore public paths for locale detection
    if (publicPaths.includes(pathname)) {
        return {
            t: (key: string) => key,
            locale: 'fr' as Language,
            translations: translations.fr,
        }
    }

    const isEnglishPath = pathname.startsWith('/en')
    const locale = isEnglishPath ? 'en' : 'fr'

    const t = (key: string) => {
        const keys = key.split('.')
        let value: any = translations[locale]

        for (const k of keys) {
            if (value?.[k]) {
                value = value[k]
            } else {
                return key
            }
        }

        return typeof value === 'string' ? value : key
    }

    return {
        t,
        locale,
        translations: translations[locale],
    }
}

export function getAlternateLocale(locale: Language): Language {
    return locale === 'en' ? 'fr' : 'en'
}

export function localizedUrl(path: string, locale: Language): string {
    return locale === 'fr' ? path : `/${locale}${path}`
} 