import { en } from './en'
import { fr } from './fr'

export type Language = 'en' | 'fr'

export const translations = {
    fr,
    en
} as const 