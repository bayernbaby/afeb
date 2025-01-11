'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Quote } from 'lucide-react'
import Image from 'next/image'

interface TestimonialCardProps {
    quote: string
    author: string
    role: string
    image?: string
}

export function TestimonialCard({ quote, author, role, image }: TestimonialCardProps) {
    return (
        <Card className="h-full">
            <CardContent className="p-8">
                <Quote className="h-8 w-8 mb-6 text-muted-foreground" />
                <blockquote className="text-lg mb-8">
                    {quote}
                </blockquote>
                <div className="flex items-center gap-4">
                    {image && (
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                            <Image
                                src={image}
                                alt={author}
                                fill
                                className="object-cover"
                            />
                        </div>
                    )}
                    <cite className="not-italic">
                        <div className="font-semibold">
                            {author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                            {role}
                        </div>
                    </cite>
                </div>
            </CardContent>
        </Card>
    )
} 