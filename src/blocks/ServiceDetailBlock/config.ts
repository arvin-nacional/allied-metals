import type { Block } from 'payload'

export const ServiceDetailBlock: Block = {
  slug: 'serviceDetailBlock',
  interfaceName: 'ServiceDetailBlock',
  labels: {
    singular: 'Service Detail Block',
    plural: 'Service Detail Blocks',
  },
  fields: [
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
    },
    {
      name: 'additionalText',
      type: 'textarea',
      label: 'Additional Text',
    },
    {
      name: 'backgroundColorClass',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'bg-[#081632]',
      options: [
        {
          label: 'Dark Blue (default)',
          value: 'bg-[#081632]',
        },
        {
          label: 'Light Blue',
          value: 'bg-[#0a1a3a]',
        },
        {
          label: 'Very Dark Blue',
          value: 'bg-[#050f22]',
        },
        {
          label: 'None (transparent)',
          value: '',
        },
      ],
    },
    {
      name: 'imagePosition',
      type: 'radio',
      label: 'Image Position',
      defaultValue: 'right',
      options: [
        {
          label: 'Right',
          value: 'right',
        },
        {
          label: 'Left',
          value: 'left',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      label: 'Feature List',
      minRows: 0,
      maxRows: 10,
      labels: {
        singular: 'Feature',
        plural: 'Features',
      },
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Feature Text',
          required: true,
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      label: 'Image',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Button Text',
      defaultValue: 'Learn More',
    },
    {
      name: 'buttonLink',
      type: 'text',
      label: 'Button Link',
      defaultValue: '/services',
    },
  ],
}
