import { defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    { name: 'metaTitle', title: 'Meta title', type: 'string', validation: R => R.max(60) },
    { name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, validation: R => R.max(160) },
    { name: 'shareImage', title: 'Open-Graph image', type: 'image', options: { hotspot: true } },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    { name: 'noIndex', title: 'No-index', type: 'boolean' }
  ]
}) 