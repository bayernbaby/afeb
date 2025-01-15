'use client'

import { useTranslation } from '@/lib/i18n'
import { ProgramCard } from '@/components/cards/ProgramCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import type { Language } from '@/translations'

interface Program {
    id: string
    title: {
        fr: string
        en: string
    }
    description: {
        fr: string
        en: string
    }
    type: 'introduction' | 'advanced' | 'specialization'
    duration: {
        fr: string
        en: string
    }
    topics: Array<{
        fr: string
        en: string
    }>
    image: string
    order: number
}

interface ProgramsProps {
    programs: Program[]
}

export function Programs({ programs }: ProgramsProps) {
    const { t, locale } = useTranslation()

    const programsByType = programs.reduce((acc, program) => {
        if (!acc[program.type]) {
            acc[program.type] = []
        }
        acc[program.type].push(program)
        return acc
    }, {} as Record<Program['type'], Program[]>)

    return (
        <section id="programs" className="relative py-20 bg-muted/50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        {t('activities.programs.title')}
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        {t('activities.programs.subtitle')}
                    </p>
                </div>

                <Tabs defaultValue="introduction" className="space-y-8">
                    <TabsList className="grid w-full grid-cols-3">
                        {Object.keys(programsByType).map((type) => (
                            <TabsTrigger key={type} value={type}>
                                {t(`activities.programs.types.${type}`)}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(programsByType).map(([type, typePrograms]) => (
                        <TabsContent key={type} value={type}>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {typePrograms.map((program) => (
                                    <ProgramCard
                                        key={program.id}
                                        id={program.id}
                                        title={program.title[locale as Language]}
                                        description={program.description[locale as Language]}
                                        duration={program.duration[locale as Language]}
                                        topics={program.topics.map(t => t[locale as Language])}
                                        image={program.image}
                                        locale={locale as Language}
                                    />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>
            </div>
        </section>
    )
} 