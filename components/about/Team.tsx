'use client'

import { useTranslation } from '@/lib/i18n'
import Image from 'next/image'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { LinkedinIcon } from 'lucide-react'
import Link from 'next/link'

interface TeamProps {
    members: {
        id: string
        name: string
        role: {
            fr: string
            en: string
        }
        bio: {
            fr: string
            en: string
        }
        image: string
        linkedin?: string
    }[]
}

export function Team({ members }: TeamProps) {
    const { t, locale } = useTranslation()

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('about.team.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('about.team.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {members.map((member) => (
                        <Card key={member.id} className="text-center">
                            <CardHeader className="relative pb-0">
                                <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1">
                                    {member.name}
                                </h3>
                                <p className="text-muted-foreground">
                                    {member.role[locale as 'fr' | 'en']}
                                </p>
                            </CardHeader>
                            <CardContent className="pt-4">
                                <p className="text-sm text-muted-foreground mb-4">
                                    {member.bio[locale as 'fr' | 'en']}
                                </p>
                                {member.linkedin && (
                                    <Link
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        <LinkedinIcon className="h-5 w-5" />
                                    </Link>
                                )}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
} 