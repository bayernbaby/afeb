export const metric = {
    name: 'metric',
    title: 'Impact Metrics',
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
            name: 'value',
            title: 'Value',
            type: 'number',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'prefix',
            title: 'Prefix',
            type: 'string',
            description: 'Text to show before the number (e.g., "+")',
        },
        {
            name: 'suffix',
            title: 'Suffix',
            type: 'string',
            description: 'Text to show after the number (e.g., "%", "k")',
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
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'text',
                },
            ],
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            description: 'Enter the Lucide icon name (e.g., "users", "trophy")',
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to control the order of metrics (lower numbers appear first)',
        },
    ],
    preview: {
        select: {
            title: 'title.fr',
            value: 'value',
            prefix: 'prefix',
            suffix: 'suffix',
        },
        prepare({ title, value, prefix = '', suffix = '' }: any) {
            return {
                title,
                subtitle: `${prefix}${value}${suffix}`,
            }
        },
    },
} 