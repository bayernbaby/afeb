import { TranslatedContent } from '@/components/TranslatedContent'
import { Wrapper } from '@/components/layout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accueil',
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
    <Wrapper>
      <div className="max-w-2xl mx-auto space-y-4 pt-32">
        <h1 className="text-3xl font-bold">
          Test i18n
        </h1>
        <div className="flex gap-4">
          <TranslatedContent />
        </div>
      </div>
    </Wrapper>
  )
}