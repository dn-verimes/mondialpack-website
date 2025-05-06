import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'capability',
  title: 'Capability',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Name of the icon from your icon library (e.g., "box", "truck", etc.)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Icon image for the capability (optional)',
      options: {
        hotspot: true,
        metadata: ['dimensions', 'lqip'],
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility.',
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which this capability should appear',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Format', value: 'format' },
          { title: 'Packaging', value: 'packaging' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      language: 'language',
      description: 'description',
      media: 'image',
    },
    prepare({ title, language, description, media }) {
      return {
        title: `${title} (${language})`,
        subtitle: description,
        media,
      }
    },
  },
}) 