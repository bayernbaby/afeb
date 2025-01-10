import { TranslatedContent } from '@/components/TranslatedContent'
import { Wrapper } from '@/components/layout'

export default function NotFound() {
    return (
        <Wrapper>
            <div className="max-w-2xl mx-auto space-y-4 pt-32">
                <h1 className="text-3xl font-bold">404</h1>
                <p>This page could not be found.</p>
            </div>
        </Wrapper>
    )
} 