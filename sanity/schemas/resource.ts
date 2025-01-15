import { defineField, defineType } from 'sanity'

export const resource = defineType({
    name: 'resource',
    title: 'Resources',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'object',
            fields: [
                { name: 'fr', title: 'French', type: 'string', validation: (Rule: any) => Rule.required() },
                { name: 'en', title: 'English', type: 'string', validation: (Rule: any) => Rule.required() }
            ]
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title.fr' },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'object',
            fields: [
                { name: 'fr', title: 'French', type: 'text', validation: (Rule: any) => Rule.required() },
                { name: 'en', title: 'English', type: 'text', validation: (Rule: any) => Rule.required() }
            ]
        }),
        defineField({
            name: 'type',
            title: 'Resource Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Video', value: 'video' },
                    { title: 'Document', value: 'document' },
                    { title: 'Article', value: 'article' },
                    { title: 'Tool', value: 'tool' }
                ]
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'url',
            title: 'Resource URL',
            type: 'url',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: { hotspot: true }
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: (Rule: any) => Rule.required()
        })
    ],
    preview: {
        select: {
            title: 'title.fr',
            subtitle: 'type',
            media: 'thumbnail'
        }
    }
}) 