export interface MetaProps {
    title: string
    description?: string
    image?: string
}

export interface NavItem {
    label: string
    href: string
}

export interface SocialLink extends NavItem {
    handle?: string
} 