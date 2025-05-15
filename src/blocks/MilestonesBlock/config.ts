import type { Block } from 'payload'

export const MilestonesBlock: Block = {
  slug: 'milestonesBlock',
  interfaceName: 'MilestonesBlock',
  labels: {
    singular: 'Milestones Block',
    plural: 'Milestones Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Our Journey',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Key milestones that have shaped our company\'s growth and success over the years.',
    },
    {
      name: 'milestones',
      type: 'array',
      label: 'Milestones',
      minRows: 1,
      maxRows: 12,
      labels: {
        singular: 'Milestone',
        plural: 'Milestones',
      },
      fields: [
        {
          name: 'year',
          type: 'text',
          label: 'Year',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
