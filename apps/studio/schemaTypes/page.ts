import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      readOnly: true,
      hidden: true,
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Dutch', value: 'nl' },
          { title: 'Spanish', value: 'es' },
          { title: 'French', value: 'fr' },
          { title: 'German', value: 'de' }
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        {
          name: 'en',
          title: 'English',
          type: 'string',
        },
        {
          name: 'nl',
          title: 'Dutch',
          type: 'string',
        },
        {
          name: 'es',
          title: 'Spanish',
          type: 'string',
        },
        {
          name: 'fr',
          title: 'French',
          type: 'string',
        },
        {
          name: 'de',
          title: 'German',
          type: 'string',
        }
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'image' },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'SEO Title',
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English',
              type: 'string',
            },
            {
              name: 'nl',
              title: 'Dutch',
              type: 'string',
            },
            {
              name: 'es',
              title: 'Spanish',
              type: 'string',
            },
            {
              name: 'fr',
              title: 'French',
              type: 'string',
            },
            {
              name: 'de',
              title: 'German',
              type: 'string',
            }
          ],
        },
        {
          name: 'description',
          title: 'SEO Description',
          type: 'object',
          fields: [
            {
              name: 'en',
              title: 'English',
              type: 'text',
            },
            {
              name: 'nl',
              title: 'Dutch',
              type: 'text',
            },
            {
              name: 'es',
              title: 'Spanish',
              type: 'text',
            },
            {
              name: 'fr',
              title: 'French',
              type: 'text',
            },
            {
              name: 'de',
              title: 'German',
              type: 'text',
            }
          ],
        },
        {
          name: 'image',
          title: 'SEO Image',
          type: 'image',
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      language: 'language',
      slug: 'slug.current',
    },
    prepare({ title, language, slug }) {
      return {
        title: `${title} (${language})`,
        subtitle: `/${slug}`,
      }
    },
  },
}) 