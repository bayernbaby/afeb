'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface MetricCardProps {
    value: number
    label: string
    description?: string
    prefix?: string
    suffix?: string
    duration?: number
}

export function MetricCard({
    value,
    label,
    description,
    prefix = '',
    suffix = '',
    duration = 2000
}: MetricCardProps) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const steps = 60
            const increment = value / steps
            const stepDuration = duration / steps

            let current = 0
            const timer = setInterval(() => {
                current += 1
                setCount(Math.min(Math.floor(increment * current), value))

                if (current >= steps) {
                    clearInterval(timer)
                }
            }, stepDuration)

            return () => clearInterval(timer)
        }
    }, [isInView, value, duration])

    return (
        <Card ref={ref}>
            <CardHeader>
                <CardTitle className="text-4xl font-bold mb-2">
                    {prefix}{count.toLocaleString()}{suffix}
                </CardTitle>
                <div className="space-y-1">
                    <h3 className="font-medium">{label}</h3>
                    {description && (
                        <CardDescription>{description}</CardDescription>
                    )}
                </div>
            </CardHeader>
        </Card>
    )
} 