import { useEffect, useState } from 'react'
import { client } from '../lib/sanity'
import { groq } from 'next-sanity'

interface Capability {
  _id: string
  title: string
  description: string
  icon: string
  order: number
}

export default function Capabilities() {
  const [capabilities, setCapabilities] = useState<Capability[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCapabilities = async () => {
      try {
        const query = groq`*[_type == "capability"] | order(order asc)`
        const data = await client.fetch(query)
        setCapabilities(data)
      } catch (error) {
        console.error('Error fetching capabilities:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCapabilities()
  }, [])

  if (loading) {
    return <div>Loading capabilities...</div>
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability) => (
            <div
              key={capability._id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">{capability.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{capability.title}</h3>
              </div>
              <p className="text-gray-600">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 