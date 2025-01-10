'use client'

import { PropsWithChildren } from 'react'
import { useRouter } from 'next/navigation'

export function I18nProvider({ children }: PropsWithChildren) {
    return (
        <>
            {children}
        </>
    )
} 