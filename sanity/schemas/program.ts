import { Rule } from '@sanity/types';

export const program = {
    name: 'program',
    title: 'Training Programs',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                { name: 'fr', title: 'French', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'en', title: 'English', type: 'string', validation: (Rule: any) => Rule.required() }
            ]
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title.fr' },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                { name: 'fr', title: 'French', type: 'text', validation: (Rule: any) => Rule.required() },
                { name: 'en', title: 'English', type: 'text', validation: (Rule: any) => Rule.required() }
            ]
        },
        {
            name: 'type',
            title: 'Program Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Introduction', value: 'introduction' },
                    { title: 'Advanced', value: 'advanced' },
                    { title: 'Specialization', value: 'specialization' }
                ]
            },
            validation: (Rule: any) => Rule.required()
        },
        {
            name: 'duration',
            title: 'Duration',
            type: 'object',
            fields: [
                { name: 'fr', title: 'French', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'en', title: 'English', type: 'string', validation: (Rule: any) => Rule.required() }
            ]
        },
        {
            name: 'topics',
            title: 'Topics Covered',
            type: 'array',
            of: [{
                type: 'object',
                fields: [
                    { name: 'fr', title: 'French', type: 'string' },
                    { name: 'en', title: 'English', type: 'string' }
                ]
            }]
        },
        {
            name: 'image',
            title: 'Program Image',
            type: 'image',
            options: { hotspot: true },
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
            by: [{ field: 'order', direction: 'asc' }]
        }
    ],
    preview: {
        select: {
            title: 'title.fr',
            subtitle: 'type',
            media: 'image'
        }
    }
} 