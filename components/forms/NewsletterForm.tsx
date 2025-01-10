'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useToast } from '@/hooks/use-toast';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
    email: z.string().email('Please enter a valid email address'),
});

interface NewsletterFormProps {
    formAction: (prevState: any, formData: any) => Promise<{ status: number; message: string; }>;
}

export function NewsletterForm({ formAction }: NewsletterFormProps) {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {
        try {
            const formData = new FormData();
            formData.append('email', data.email);

            const result = await formAction(null, formData);
            if (result.status !== 200) throw new Error(result.message);

            toast({
                title: "Erfolg!",
                description: result.message,
            });

            form.reset({
                email: '',
            });
        } catch (error) {
            toast({
                title: "Fehler",
                description: error instanceof Error ? error.message : "Anmeldung fehlgeschlagen",
                variant: "destructive",
            });
        }
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
                <div className="flex">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        {...field}
                                        className="bg-neutral-100 border-0 text-black placeholder:text-gray-500 h-12 text-base rounded-none"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="h-12 text-base rounded-none px-6">
                        Subscribe
                    </Button>
                </div>
            </form>
        </Form>
    );
} 