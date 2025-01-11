interface HubspotFormOptions {
    region: string
    portalId: string
    formId: string
    target: HTMLElement | null
    locale: string
    onFormSubmit?: () => void
    onFormReady?: () => void
}

interface HubspotForms {
    create: (options: HubspotFormOptions) => void
}

interface Hbspt {
    forms: HubspotForms
}

interface Window {
    hbspt: Hbspt
} 