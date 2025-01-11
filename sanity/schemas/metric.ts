export const metric = {
    name: 'metric',
    title: 'Impact Metrics',
    type: 'document',
    fields: [
        {
            name: 'label',
            title: 'Label',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'string',
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'string',
                    validation: (Rule: any) => Rule.required()
                }
            ]
        },
        {
            name: 'value',
            title: 'Value',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'text'
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'text'
                }
            ]
        },
        {
            name: 'prefix',
            title: 'Prefix',
            type: 'string',
            description: 'E.g., "$" or "+"'
        },
        {
            name: 'suffix',
            title: 'Suffix',
            type: 'string',
            description: 'E.g., "%" or "k"'
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        }
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [
                { field: 'order', direction: 'asc' }
            ]
        }
    ],
    preview: {
        select: {
            title: 'label.fr',
            subtitle: 'value'
        }
    }
} 