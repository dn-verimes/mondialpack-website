import { createClient, ClientPerspective } from '@sanity/client'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  projectId: 'njtli2jq',
  dataset: 'production',
  apiVersion: '2025-05-07',
  useCdn: !isDevelopment,
  withCredentials: false,
  token: undefined,
  perspective: 'published' as ClientPerspective,
  stega: {
    enabled: isDevelopment,
    studioUrl: 'https://mondialpack.sanity.studio'
  }
}

console.log('Sanity client config:', config)

// Create the Sanity client
export const client = createClient(config)

// Create the image URL builder
const builder = imageUrlBuilder(client)

// Typed URL builder function
export const urlFor = (source: SanityImageSource) => {
  if (!source) {
    console.warn('No image source provided to urlFor')
    return null
  }
  return builder.image(source)
}

// Query for capabilities with language support
export const CAPABILITIES_QUERY = `*[_type == "capability" && language == $language] | order(order asc) {
  _id,
  _type,
  language,
  title,
  description,
  icon,
  order,
  image,
  category,
  longDescription,
  keyFeatures[] {
    title,
    description,
    icon
  },
  specifications[] {
    name,
    value
  },
  applications,
  benefits[] {
    title,
    description
  },
  processSteps[] {
    title,
    description,
    image
  },
  faqs[] {
    question,
    answer
  },
  "translations": *[_type == "capability" && _id != ^._id && references(^._id)]{
    _id,
    language,
    title,
    description
  },
  "slug": slug
}`

// New query to fetch a capability by slug
export const CAPABILITY_BY_SLUG_QUERY = `*[_type == "capability" && slug.current == $slug][0] {
  _id,
  _type,
  language,
  title,
  description,
  icon,
  order,
  image,
  category,
  longDescription,
  keyFeatures[] {
    title,
    description,
    icon
  },
  specifications[] {
    name,
    value
  },
  applications,
  benefits[] {
    title,
    description
  },
  processSteps[] {
    title,
    description,
    image
  },
  faqs[] {
    question,
    answer
  },
  "translations": *[_type == "capability" && _id != ^._id && references(^._id)]{
    _id,
    language,
    title,
    description
  },
  "slug": slug.current
}`

// Helper function to get content in specific language
export const getLocalizedContent = async (query: string, language = 'en') => {
  try {
    return await client.fetch(query, { language })
  } catch (error) {
    handleSanityError(error)
  }
}

// New helper function to fetch a capability by slug
export const getCapabilityBySlug = async (slug: string) => {
  try {
    return await client.fetch(CAPABILITY_BY_SLUG_QUERY, { slug })
  } catch (error) {
    handleSanityError(error)
  }
}

// Error handling utility
export const handleSanityError = (error: unknown) => {
  console.error('Sanity error:', error)
  if (error instanceof Error) {
    console.error('Error details:', {
      message: error.message,
      stack: error.stack,
      name: error.name
    })
  }
  throw new Error(
    error instanceof Error 
      ? error.message 
      : 'An error occurred while fetching data from Sanity'
  )
} 