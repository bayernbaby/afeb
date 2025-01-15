import { z } from 'zod'

export const contactSchema = z.object({
    firstName: z.string().min(2, 'First name is required'),
    lastName: z.string().min(2, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    message: z.string().min(10, 'Message must be at least 10 characters'),
    subject: z.enum(['general', 'program', 'event', 'other'], {
        required_error: 'Please select a subject'
    })
})

export type ContactFormData = z.infer<typeof contactSchema> 