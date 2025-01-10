import { post } from './post'
import { showcase } from './showcase'
import { settings } from './settings'

export const schemaTypes = [post, showcase, settings]

export const schema = {
    types: schemaTypes,
} 