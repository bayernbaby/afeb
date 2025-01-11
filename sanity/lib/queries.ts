export const teamMembersQuery = `
    *[_type == "team"] | order(order asc) {
        _id,
        name,
        "slug": slug.current,
        role,
        bio,
        "image": image.asset->url,
        linkedin,
        order
    }
`

export const valuesQuery = `
    *[_type == "value"] | order(order asc) {
        _id,
        title,
        description,
        icon,
        order
    }
`

export const metricsQuery = `
    *[_type == "metric"] | order(order asc) {
        _id,
        label,
        value,
        description,
        prefix,
        suffix,
        order
    }
` 