'use client'

import { useTranslation } from '@/lib/i18n'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { contactSchema, type ContactFormData } from '@/lib/schemas/contact'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from 'sonner'

export function ContactForm() {
    const { t } = useTranslation()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const form = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
            subject: 'general'
        }
    })

    async function onSubmit(data: ContactFormData) {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (!response.ok) {
                throw new Error('Failed to submit form')
            }

            form.reset()
            toast.success(t('contact.form.success'))
        } catch (error) {
            toast.error(t('contact.form.error'))
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-xl mx-auto">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('contact.form.firstName')}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>{t('contact.form.lastName')}</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('contact.form.email')}</FormLabel>
                                        <FormControl>
                                            <Input type="email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="phone"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('contact.form.phone')}</FormLabel>
                                        <FormControl>
                                            <Input type="tel" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="subject"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('contact.form.subject')}</FormLabel>
                                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder={t('contact.form.selectSubject')} />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="general">{t('contact.form.subjects.general')}</SelectItem>
                                                <SelectItem value="program">{t('contact.form.subjects.program')}</SelectItem>
                                                <SelectItem value="event">{t('contact.form.subjects.event')}</SelectItem>
                                                <SelectItem value="other">{t('contact.form.subjects.other')}</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="message"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>{t('contact.form.message')}</FormLabel>
                                        <FormControl>
                                            <Textarea rows={5} {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? t('contact.form.submitting') : t('contact.form.submit')}
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </section>
    )
} 