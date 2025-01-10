import { post } from './post'
import { showcase } from './showcase'
import { settings } from './settings'
import { event } from './event'
import { team } from './team'
import { testimonial } from './testimonial'
import { program } from './program'
import { value } from './value'
import { metric } from './metric'

export const schemaTypes = [
    post,
    showcase,
    settings,
    event,
    team,
    testimonial,
    program,
    value,
    metric,
]

export const schema = {
    types: schemaTypes,
} 