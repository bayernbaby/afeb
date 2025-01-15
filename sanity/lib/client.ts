import { createClient } from 'next-sanity';
import { teamMembersQuery, valuesQuery, metricsQuery } from './queries';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false
});

export async function getTeamMembers() {
  return client.fetch(teamMembersQuery);
}

export async function getValues() {
  return client.fetch(valuesQuery);
}

export async function getMetrics() {
  return client.fetch(metricsQuery);
}

export async function getResources() {
  return client.fetch(`
        *[_type == "resource"] | order(order asc) {
            _id,
            title,
            description,
            type,
            url,
            "thumbnail": thumbnail.asset->url
        }
    `)
}

export async function getPrograms() {
  return client.fetch(`
        *[_type == "program"] | order(order asc) {
            _id,
            title,
            description,
            type,
            duration,
            topics,
            "image": image.asset->url
        }
    `)
}

export async function getEvents() {
  return client.fetch(`
        *[_type == "event"] | order(date asc) {
            _id,
            title,
            description,
            "date": dateTime(date),
            location,
            type,
            "image": image.asset->url,
            "slug": slug.current
        }
    `)
}

export async function getEventBySlug(slug: string) {
  return client.fetch(`
        *[_type == "event" && slug.current == $slug][0] {
            _id,
            title,
            description,
            "date": dateTime(date),
            location,
            type,
            "image": image.asset->url,
            "slug": slug.current
        }
    `, { slug })
}

