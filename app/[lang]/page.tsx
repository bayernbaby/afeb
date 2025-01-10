import { Suspense } from 'react'
import { TranslatedContent } from '@/components/TranslatedContent'
import { Wrapper } from '@/components/layout'

interface Props {
    params: {
        lang: string
    }
}

export default async function Home({ params }: Props) {
    return (
        <Wrapper>
            <Suspense>
                <div className="max-w-2xl mx-auto space-y-4 pt-32">
                    <h1 className="text-3xl font-bold">
                        Test i18n
                    </h1>
                    <div className="flex gap-4">
                        <TranslatedContent />
                    </div>
                </div>
            </Suspense>
        </Wrapper>
    )
}

export async function generateStaticParams() {
    return [{ lang: 'en' }, { lang: 'fr' }]
} 