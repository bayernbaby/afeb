export const program = {
    name: 'program',
    title: 'Programs & Activities',
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
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title.fr',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'type',
            title: 'Program Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Training', value: 'training' },
                    { title: 'Networking', value: 'networking' },
                    { title: 'Mentorship', value: 'mentorship' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Other', value: 'other' },
                ],
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                {
                    name: 'fr',
                    title: 'French',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
                {
                    name: 'en',
                    title: 'English',
                    type: 'array',
                    of: [{ type: 'block' }],
                },
            ],
        },
        {
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [
                {
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
            ],
        },
        {
            name: 'image',
            title: 'Program Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'object',
                    fields: [
                        {
                            name: 'fr',
                            title: 'French Alt Text',
                            type: 'string',
                        },
                        {
                            name: 'en',
                            title: 'English Alt Text',
                            type: 'string',
                        },
                    ],
                },
            ],
        },
        {
            name: 'featured',
            title: 'Featured Program',
            type: 'boolean',
            description: 'Set to true to display this program prominently',
            initialValue: false,
        },
        {
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to control the order of programs (lower numbers appear first)',
        },
    ],
    preview: {
        select: {
            title: 'title.fr',
            subtitle: 'type',
            media: 'image',
        },
    },
} 