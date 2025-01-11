'use client'

import { useEffect, useRef } from 'react'
import { useTranslation } from '@/lib/i18n'

interface HubspotFormProps {
    formId: string
    region?: string
    portalId: string
    onSubmit?: () => void
    onReady?: () => void
}

export function HubspotForm({
    formId,
    region = 'na1',
    portalId,
    onSubmit,
    onReady
}: HubspotFormProps) {
    const formRef = useRef<HTMLDivElement>(null)
    const { locale } = useTranslation()

    useEffect(() => {
        const script = document.createElement('script')
        script.src = 'https://js.hsforms.net/forms/v2.js'
        document.body.appendChild(script)

        script.addEventListener('load', () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region,
                    portalId,
                    formId,
                    target: formRef.current,
                    locale: locale === 'fr' ? 'fr-fr' : 'en-us',
                    onFormSubmit: () => {
                        onSubmit?.()
                    },
                    onFormReady: () => {
                        onReady?.()
                    },
                })
            }
        })

        return () => {
            document.body.removeChild(script)
        }
    }, [formId, region, portalId, locale, onSubmit, onReady])

    return <div ref={formRef} />
} 