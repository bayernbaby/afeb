'use client'

import { useTranslation } from '@/lib/i18n'
import { Card, CardContent } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@/lib/utils'

export function TestimonialsSlider() {
    const { t } = useTranslation()
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 3

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % totalSlides)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        {t('home.testimonials.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {t('home.testimonials.subtitle')}
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <div className="flex transition-transform duration-500"
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                        {[...Array(totalSlides)].map((_, i) => (
                            <Card key={i} className="w-full flex-shrink-0">
                                <CardContent className="p-8 text-center">
                                    <Quote className="h-8 w-8 mx-auto mb-6 text-muted-foreground" />
                                    <blockquote className="text-xl mb-6">
                                        {t(`home.testimonials.items.${i}.quote`)}
                                    </blockquote>
                                    <cite className="not-italic">
                                        <div className="font-semibold">
                                            {t(`home.testimonials.items.${i}.author`)}
                                        </div>
                                        <div className="text-muted-foreground">
                                            {t(`home.testimonials.items.${i}.role`)}
                                        </div>
                                    </cite>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="flex justify-center gap-2 mt-6">
                        {[...Array(totalSlides)].map((_, i) => (
                            <button
                                key={i}
                                className={cn(
                                    "w-2 h-2 rounded-full transition-colors",
                                    currentSlide === i ? "bg-primary" : "bg-muted-foreground/30"
                                )}
                                onClick={() => setCurrentSlide(i)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
} 