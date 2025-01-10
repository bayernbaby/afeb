import { post } from './post'
import { showcase } from './showcase'
import { settings } from './settings'
import { event } from './event'
import { team } from './team'
import { testimonial } from './testimonial'

export const schemaTypes = [post, showcase, settings, event, team, testimonial]

export const schema = {
    types: schemaTypes,
} 