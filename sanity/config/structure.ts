import type { StructureResolver } from 'sanity/structure'

export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Settings')
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            ...S.documentTypeListItems().filter(
                (listItem) => !['settings'].includes(listItem.getId() as string)
            ),
        ]) 