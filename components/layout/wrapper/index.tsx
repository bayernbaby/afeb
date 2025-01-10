'use client'

import cn from 'clsx'
import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'
import s from './wrapper.module.css'
import { OverlayMenu } from '../OverlayMenu'
import { ToastProvider } from '@/providers/ToastProvider'
interface WrapperProps {
    children: ReactNode
    theme?: 'light' | 'dark'
    lenis?: boolean
    lenisOptions?: object
    webgl?: boolean
    className?: string
}

export function Wrapper({
    children,
    theme = 'light',

    className,
}: WrapperProps) {
    return (
        <>

            <div className={cn(s.wrapper, `theme-${theme}`, className)}>
                <Navbar />
                <OverlayMenu />
                <main role="main" className={s.main}>
                    {children}
                </main>
                <Footer />
                <ToastProvider />
            </div>
        </>
    )
} 