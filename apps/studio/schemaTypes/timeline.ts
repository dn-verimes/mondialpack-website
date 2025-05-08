export default {
  name: 'timelineMilestone',
  title: 'Timeline Milestone',
  type: 'document',
  fields: [
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'milestone',
      title: 'Milestone',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'year',
      subtitle: 'milestone',
    },
  },
} 