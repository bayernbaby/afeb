import { defineType, defineField } from 'sanity'

export const event = defineType({
    name: 'event',
    title: 'Events',
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
            name: 'date',
            title: 'Event Date',
            type: 'datetime',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'type',
            title: 'Event Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Conference', value: 'conference' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Training', value: 'training' },
                    { title: 'Competition', value: 'competition' }
                ]
            },
            validation: (Rule: any) => Rule.required()
        }),
        defineField({
            name: 'image',
            title: 'Event Image',
            type: 'image',
            options: { hotspot: true }
        })
    ],
    preview: {
        select: {
            title: 'title.fr',
            subtitle: 'date',
            media: 'image'
        }
    }
}) 