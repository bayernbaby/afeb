import { Hero } from '@/components/home/Hero'
import { Mission } from '@/components/home/Mission'
import { KeyHighlights } from '@/components/home/KeyHighlights'
import { EventsPreview } from '@/components/home/EventsPreview'
import { TestimonialsSlider } from '@/components/home/TestimonialsSlider'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil | Notre Site',
  description: 'Formation, réseautage et soutien pour les entraineurs de basketball',
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'fr': '/'
    }
  }
}

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <KeyHighlights />
      <EventsPreview />
      <TestimonialsSlider />
    </>
  )
}