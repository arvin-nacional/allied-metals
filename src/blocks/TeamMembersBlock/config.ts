import type { Block } from 'payload'

export const TeamMembersBlock: Block = {
  slug: 'teamMembersBlock',
  interfaceName: 'TeamMembersBlock',
  labels: {
    singular: 'Team Members Block',
    plural: 'Team Members Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'Our Leadership Team',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Meet the experienced professionals who guide our company\'s strategic direction and ensure we deliver excellence in everything we do.',
    },
    {
      name: 'teamMembers',
      type: 'array',
      label: 'Team Members',
      minRows: 1,
      maxRows: 12,
      labels: {
        singular: 'Team Member',
        plural: 'Team Members',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Name',
          required: true,
        },
        {
          name: 'position',
          type: 'text',
          label: 'Position',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
          label: 'Biography',
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Profile Image',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
