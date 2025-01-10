'use server'

// First, let's define some common types
type FormResponse = {
    status: number;
    message: string;
};

type HubspotField = {
    name: string;
    value: string | null;
};

type HubspotPayload = {
    fields: HubspotField[];
    context: {
        pageUri: string;
        pageName: string;
    };
};

export async function HubspotNewsletterAction(
    prevState: FormResponse | null,
    formData: FormData
): Promise<FormResponse> {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID

    if (!portalId || !formId) {
        throw new Error('HubSpot configuration missing')
    }

    try {
        const response = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: 'email',
                            value: formData.get('email'),
                        },
                    ],
                    context: {
                        pageUri: 'https://www.cwberlin.com',
                        pageName: 'Newsletter Signup',
                    },
                }),
            }
        )

        if (!response.ok) {
            throw new Error(`Failed to submit to HubSpot: ${response.status}`)
        }

        const data = await response.json()
        return { status: 200, message: 'Successfully subscribed to newsletter!' }
    } catch (error) {
        console.error('Error submitting to HubSpot form:', error)
        return {
            status: 500,
            message: error instanceof Error ? error.message : 'An unknown error occurred'
        }
    }
}

export async function HubspotContactAction(
    prevState: FormResponse | null,
    formData: FormData
): Promise<FormResponse> {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID;
    const formId = process.env.NEXT_PUBLIC_HUBSPOT_CONTACT_FORM_ID;

    if (!portalId || !formId) {
        throw new Error('HubSpot configuration missing');
    }

    try {
        const response = await fetch(
            `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    fields: [
                        {
                            name: 'firstname',
                            value: formData.get('firstName'),
                        },
                        {
                            name: 'lastname',
                            value: formData.get('lastName') || '',
                        },
                        {
                            name: 'email',
                            value: formData.get('email'),
                        },
                        {
                            name: 'phone',
                            value: formData.get('phoneNumber') || '',
                        },
                        {
                            name: 'message',
                            value: formData.get('message'),
                        },
                    ],
                    context: {
                        pageUri: 'https://www.cwberlin.com/contact',
                        pageName: 'Contact Form',
                    },
                }),
            }
        );

        if (!response.ok) {
            const error = await response.json();
            console.error('HubSpot error:', error);
            throw new Error(`Failed to submit to HubSpot: ${response.status}`);
        }

        const data = await response.json();
        return { status: 200, message: 'Successfully submitted!' };
    } catch (error) {
        console.error('Error submitting to HubSpot form:', error);
        return { status: 500, message: error instanceof Error ? error.message : 'An unknown error occurred' };
    }
}

export async function HubspotFeedbackAction(
    prevState: FormResponse | null,
    formData: FormData
): Promise<FormResponse> {
    const portalId = process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID
    const formId =
        formData.get('formId') || process.env.NEXT_PUBLIC_HUBSPOT_FEEDBACK_FORM_ID

    const body = {
        fields: [
            { name: 'firstname', value: formData.get('firstname') },
            { name: 'lastname', value: formData.get('lastname') },
            { name: 'email', value: formData.get('email') },
            { name: 'message', value: formData.get('message') },
            { name: 'rating', value: formData.get('rating') },
        ],
        context: {
            pageUri: process.env.NEXT_PUBLIC_PAGE_URI || 'http://localhost:3000',
            pageName: process.env.NEXT_PUBLIC_PAGE_NAME || 'Trainer Feedback',
        },
    }

    const url = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error(`Failed to submit to HubSpot: ${response.status}`)
        }

        return { status: 200, message: 'Submitted to HubSpot successfully' }
    } catch (error) {
        console.error('Error submitting to HubSpot form:', formId, error)
        return { status: 500, message: 'Failed to submit to HubSpot' }
    }
}