import { Hero } from '@/components/home/Hero'
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
    </>
  )
}