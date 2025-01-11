import { Metadata } from 'next'
import { AboutHero } from '@/components/about/Hero'
import { Mission } from '@/components/about/Mission'
import { Values } from '@/components/about/Values'
import { Impact } from '@/components/about/Impact'
import { Team } from '@/components/about/Team'
import { getTeamMembers, getValues, getMetrics } from '@/sanity/lib/client'

export const metadata: Metadata = {
    title: 'About | AFEB',
    description: 'Discover our mission to support and train basketball coaches in Mali.',
    alternates: {
        canonical: '/en/about',
        languages: {
            'en': '/en/about',
            'fr': '/about'
        }
    }
}

export default async function AboutPage() {
    const teamMembers = await getTeamMembers()
    const values = await getValues()
    const metrics = await getMetrics()

    return (
        <>
            <AboutHero />
            <Mission />
            <Values values={values} />
            <Impact metrics={metrics} />
            <Team members={teamMembers} />
        </>
    )
} 