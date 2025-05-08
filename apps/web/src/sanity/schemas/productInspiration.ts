import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'productInspiration',
  title: 'Product Inspiration',
  type: 'document',
  fields: [
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
      ],
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
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
      ],
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Product Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'name',
              title: 'Product Name',
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
              ],
            }),
            defineField({
              name: 'claim',
              title: 'Product Claim',
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
              ],
            }),
            defineField({
              name: 'tags',
              title: 'Product Tags',
              type: 'array',
              of: [
                {
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
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
  },
}) 