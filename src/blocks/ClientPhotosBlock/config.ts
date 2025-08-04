import type { Block } from 'payload'

export const ClientPhotosBlock: Block = {
  slug: 'clientPhotosBlock',
  interfaceName: 'ClientPhotosBlock',
  labels: {
    singular: 'Project Showcase Block',
    plural: 'Project Showcase Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Projects',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue: 'Browse our portfolio of completed projects across various client categories.',
    },
    {
      name: 'clientTypes',
      type: 'array',
      label: 'Client Categories',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Category Name',
          required: true,
          admin: {
            description: 'E.g., Hotels, Restaurants, Retail, etc.',
          },
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Slug (URL-friendly identifier)',
          required: true,
          admin: {
            description:
              'Used for tab navigation. Use only lowercase letters, numbers, and hyphens.',
          },
        },
        {
          name: 'isDefault',
          type: 'checkbox',
          label: 'Default Tab',
          defaultValue: false,
        },
        {
          name: 'projects',
          type: 'array',
          label: 'Projects',
          minRows: 1,
          fields: [
            {
              name: 'clientName',
              type: 'text',
              label: 'Client Name',
              required: true,
            },
            {
              name: 'projectTitle',
              type: 'text',
              label: 'Project Title',
              required: true,
            },
            {
              name: 'projectDescription',
              type: 'textarea',
              label: 'Project Description',
              required: false,
            },
            {
              name: 'projectPhotos',
              type: 'array',
              label: 'Project Photos',
              minRows: 1,
              maxRows: 12,
              fields: [
                {
                  name: 'photo',
                  type: 'upload',
                  relationTo: 'media',
                  label: 'Photo',
                  required: true,
                },
                {
                  name: 'caption',
                  type: 'text',
                  label: 'Caption',
                  required: false,
                },
              ],
            },
          ],
        },
      ],
      defaultValue: [
        {
          name: 'Hotels',
          slug: 'hotels',
          isDefault: true,
          projects: [],
        },
        {
          name: 'Restaurants',
          slug: 'restaurants',
          isDefault: false,
          projects: [],
        },
        {
          name: 'Retail',
          slug: 'retail',
          isDefault: false,
          projects: [],
        },
      ],
    },
    {
      name: 'displayOptions',
      type: 'group',
      label: 'Display Options',
      fields: [
        {
          name: 'backgroundColor',
          type: 'select',
          label: 'Background Color',
          defaultValue: 'dark-blue',
          options: [
            {
              label: 'Dark Blue',
              value: 'dark-blue',
            },
            {
              label: 'Light Blue',
              value: 'light-blue',
            },
            {
              label: 'Very Dark Blue',
              value: 'very-dark-blue',
            },
            {
              label: 'White/Transparent',
              value: 'transparent',
            },
          ],
        },
        {
          name: 'itemsPerRow',
          type: 'select',
          label: 'Items Per Row',
          defaultValue: '3',
          options: [
            { label: '2', value: '2' },
            { label: '3', value: '3' },
            { label: '4', value: '4' },
          ],
        },
        {
          name: 'showProjectTitle',
          type: 'checkbox',
          label: 'Show Project Title',
          defaultValue: true,
        },
        {
          name: 'showClientName',
          type: 'checkbox',
          label: 'Show Client Name',
          defaultValue: true,
        },
      ],
    },
  ],
}
