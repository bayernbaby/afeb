export const team = {
    name: 'team',
    title: 'Team Members',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
            },
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'role',
            title: 'Role',
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
            name: 'bio',
            title: 'Biography',
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
            name: 'image',
            title: 'Profile Image',
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
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Use this to control the order of team members (lower numbers appear first)',
        },
        {
            name: 'socialLinks',
            title: 'Social Media Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'LinkedIn', value: 'linkedin' },
                                    { title: 'Twitter', value: 'twitter' },
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'Facebook', value: 'facebook' },
                                ],
                            },
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role.fr',
            media: 'image',
        },
    },
} 