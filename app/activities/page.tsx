import { Metadata } from 'next'
import { ActivitiesHero } from '@/components/activities/Hero'
import { Overview } from '@/components/activities/Overview'
import { Programs } from '@/components/activities/Programs'
import { Resources } from '@/components/activities/Resources'
import { getPrograms, getResources } from '@/sanity/lib/client'

export const metadata: Metadata = {
    title: 'Activités | AFEB',
    description: 'Découvrez nos programmes de formation et ressources pour les entraîneurs de basketball au Mali.',
    alternates: {
        canonical: '/activities',
        languages: {
            'en': '/en/activities',
            'fr': '/activities'
        }
    }
}

export default async function ActivitiesPage() {
    const programs = await getPrograms()
    const resources = await getResources()

    return (
        <>
            <ActivitiesHero />
            <Overview />
            <Programs programs={programs} />
            <Resources resources={resources} />
        </>
    )
} 