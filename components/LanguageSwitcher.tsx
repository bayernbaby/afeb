'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useTranslation } from '@/lib/i18n'
import type { Language } from '@/translations'

export function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()
    const { locale } = useTranslation()

    const handleLanguageChange = () => {
        const isEnglish = pathname.startsWith('/en')

        // If we're on English route, remove the /en prefix
        if (isEnglish) {
            const newPath = pathname.replace(/^\/en/, '') || '/'
            router.replace(newPath)
            return
        }

        // If we're on French route (no prefix), add /en
        const newPath = `/en${pathname === '/fr' ? '' : pathname}`
        router.replace(newPath)
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleLanguageChange}
            className="w-12"
        >
            {pathname.startsWith('/en') ? 'FR' : 'EN'}
        </Button>
    )
} 