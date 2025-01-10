export const settings = {
    name: 'settings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Site Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Site Description',
            type: 'text',
        },
        {
            name: 'ogImage',
            title: 'Open Graph Image',
            type: 'image',
            description: 'Used for social media previews',
        },
        {
            name: 'footer',
            title: 'Footer Text',
            type: 'text',
        }
    ]
} 