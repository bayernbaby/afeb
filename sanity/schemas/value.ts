export const value = {
    name: 'value',
    title: 'Company Values',
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
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'text',
                    validation: (Rule: any) => Rule.required()
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'text',
                    validation: (Rule: any) => Rule.required()
                }
            ]
        },
        {
            name: 'icon',
            title: 'Icon',
            type: 'string',
            options: {
                list: [
                    { title: 'Passion', value: 'passion' },
                    { title: 'Collaboration', value: 'collaboration' },
                    { title: 'Excellence', value: 'excellence' },
                    { title: 'Innovation', value: 'innovation' }
                ]
            },
            validation: (Rule: any) => Rule.required()
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
    ]
} 