'use client'

import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

interface ValueCardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function ValueCard({ title, description, icon: Icon }: ValueCardProps) {
    return (
        <Card className="relative overflow-hidden">
            <div className="absolute top-4 right-4 text-primary/10">
                <Icon className="h-12 w-12" />
            </div>
            <CardHeader>
                <CardTitle className="mb-2">{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
} 