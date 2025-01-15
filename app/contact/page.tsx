import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/Hero'
import { ContactForm } from '@/components/contact/Form'

export const metadata: Metadata = {
    title: 'Contact | AFEB',
    description: 'Contactez-nous pour toute question sur nos programmes et événements.',
    alternates: {
        canonical: '/contact',
        languages: {
            'en': '/en/contact',
            'fr': '/contact'
        }
    }
}

export default function ContactPage() {
    return (
        <>
            <ContactHero />
            <ContactForm />
        </>
    )
} 