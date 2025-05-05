import { createClient, ClientPerspective } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  projectId: 'njtli2jq',
  dataset: 'production',
  apiVersion: '2024-05-05',
  useCdn: !isDevelopment,
  withCredentials: false,
  token: undefined,
  perspective: 'published' as ClientPerspective,
  stega: {
    enabled: false,
    studioUrl: 'https://mondialpack.sanity.studio'
  },
  // apiHost is usually inferred from projectId, removing explicit setting
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

// Query for capabilities
export const CAPABILITIES_QUERY = `*[_type == "capability"] | order(order asc) {
  _id,
  title,
  description,
  icon,
  order
}`

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