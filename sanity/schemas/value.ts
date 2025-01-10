export const value = {
    name: 'value',
    title: 'Core Values',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'string',
                    validation: (Rule: any) => Rule.required(),
                },
            ],
        },
        {
            name: 'description',
            title: 'Description',
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
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Enter the Lucide icon name (e.g., "heart", "star", "award")',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to control the order of values (lower numbers appear first)',
        },
    ],
    preview: {
        select: {
            title: 'title.fr',
            subtitle: 'description.fr',
        },
    },
} 