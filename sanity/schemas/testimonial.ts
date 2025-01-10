export const testimonial = {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'author',
            title: 'Author Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role/Position',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'string',
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'string',
                },
            ],
        },
        {
            name: 'quote',
            title: 'Quote',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'text',
                    validation: (Rule: any) => Rule.required(),
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'text',
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        },
        {
            name: 'image',
            title: 'Author Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'featured',
            title: 'Featured',
            type: 'boolean',
            description: 'Set to true to display this testimonial prominently',
            initialValue: false,
        },
    ],
    preview: {
        select: {
            title: 'author',
            subtitle: 'role.fr',
            media: 'image',
        },
    },
} 