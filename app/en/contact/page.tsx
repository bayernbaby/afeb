import { Metadata } from 'next'
import { ContactHero } from '@/components/contact/Hero'
import { ContactForm } from '@/components/contact/Form'

export const metadata: Metadata = {
    title: 'Contact | AFEB',
    description: 'Contact us for any questions about our programs and events.',
    alternates: {
        canonical: '/en/contact',
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