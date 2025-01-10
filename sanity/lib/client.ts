import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-03-01',
  useCdn: process.env.NODE_ENV === 'production',
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getAllPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      author->{
        name,
        image
      },
      categories[]->{
        title
      }
    }
  `);
}

export async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      mainImage,
      excerpt,
      publishedAt,
      categories[]->{
        title
      },
      author->{
        name,
        image
      },
      body,
      "morePosts": *[_type == "post" && _id != ^._id] | order(publishedAt desc)[0...2] {
        _id,
        title,
        slug,
        mainImage,
        excerpt,
        publishedAt,
        categories[]->{
          title
        },
        author->{
          name,
          image
        }
      }
    }
  `, { slug })
}

export async function getSettings() {
  return client.fetch(`
    *[_type == "settings"][0] {
      title,
      description,
      ogImage,
      footer
    }
  `);
}

export async function getAllShowcaseProjects() {
  try {
    const projects = await client.fetch(`
      *[_type == "showcase"] | order(year desc) {
        _id,
        name,
        "slug": slug.current,
        client,
        description,
        mainImage,
        year,
        tags,
        quote
      }
    `);
    return projects;
  } catch (error) {
    console.error('Error fetching showcase projects:', error);
    return [];
  }
}

export async function getShowcaseProject(slug: string) {
  return client.fetch(`
    *[_type == "showcase" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      client,
      description,
      mainImage,
      year,
      tags,
      quote
    }
  `, { slug });
}

