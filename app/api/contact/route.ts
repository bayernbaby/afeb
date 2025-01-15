import { NextResponse } from 'next/server'
import { contactSchema } from '@/lib/schemas/contact'

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY
const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID
const HUBSPOT_FORM_ID = process.env.HUBSPOT_CONTACT_FORM_ID

export async function POST(request: Request) {
    try {
        const body = await request.json()

        // Validate form data
        const validatedData = contactSchema.parse(body)

        // Submit to HubSpot
        const response = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${HUBSPOT_API_KEY}`
                },
                body: JSON.stringify({
                    fields: [
                        { name: 'firstname', value: validatedData.firstName },
                        { name: 'lastname', value: validatedData.lastName },
                        { name: 'email', value: validatedData.email },
                        { name: 'phone', value: validatedData.phone || '' },
                        { name: 'message', value: validatedData.message },
                        { name: 'subject', value: validatedData.subject }
                    ],
                    context: {
                        pageUri: 'contact',
                        pageName: 'Contact Form'
                    }
                })
            }
        )

        if (!response.ok) {
            throw new Error('Failed to submit to HubSpot')
        }

        return NextResponse.json({ success: true })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 400 }
        )
    }
} 