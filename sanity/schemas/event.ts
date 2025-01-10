export const event = {
    name: 'event',
    title: 'Events',
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
            name: 'date',
            title: 'Event Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'location',
            title: 'Location',
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
            name: 'eventType',
            title: 'Event Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Training', value: 'training' },
                    { title: 'Conference', value: 'conference' },
                    { title: 'Competition', value: 'competition' },
                    { title: 'Other', value: 'other' },
                ],
            },
        },
        {
            name: 'mainImage',
            title: 'Main Image',
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
            name: 'registrationLink',
            title: 'Registration Link',
            type: 'url',
        },
        {
            name: 'status',
            title: 'Event Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'upcoming' },
                    { title: 'Ongoing', value: 'ongoing' },
                    { title: 'Completed', value: 'completed' },
                    { title: 'Cancelled', value: 'cancelled' },
                ],
            },
            initialValue: 'upcoming',
        },
    ],
    preview: {
        select: {
            title: 'title.fr',
            date: 'date',
            media: 'mainImage',
        },
        prepare({ title, date, media }: any) {
            return {
                title,
                subtitle: date ? new Date(date).toLocaleDateString() : 'No date set',
                media,
            }
        },
    },
} 