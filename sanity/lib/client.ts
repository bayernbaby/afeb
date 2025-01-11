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

