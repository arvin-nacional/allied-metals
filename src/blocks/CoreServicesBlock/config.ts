import type { Block } from 'payload'

export const CoreServicesBlock: Block = {
  slug: 'coreServicesBlock',
  interfaceName: 'CoreServicesBlock',
  labels: {
    singular: 'Core Services Block',
    plural: 'Core Services Blocks',
  },
  fields: [
    {
      name: 'heading',
      label: 'Heading',
      type: 'text',
      required: true,
      defaultValue: 'Our Core Services',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'textarea',
      required: true,
      defaultValue:
        'At Allied Metals, we provide end-to-end solutions for commercial kitchens, from initial consultation and design to installation, commissioning, and ongoing maintenance.',
    },
    {
      name: 'services',
      label: 'Services',
      type: 'array',
      minRows: 1,
      maxRows: 12,
      labels: {
        singular: 'Service',
        plural: 'Services',
      },
      fields: [
        {
          name: 'title',
          label: 'Title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          label: 'Description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconType',
          label: 'Icon Type',
          type: 'select',
          required: true,
          options: [
            {
              label: 'Pen Tool',
              value: 'PenTool',
            },
            {
              label: 'Users',
              value: 'Users',
            },
            {
              label: 'Shopping Bag',
              value: 'ShoppingBag',
            },
            {
              label: 'Factory',
              value: 'Factory',
            },
            {
              label: 'Settings',
              value: 'Settings',
            },
            {
              label: 'Wrench',
              value: 'Wrench',
            },
            {
              label: 'Shield',
              value: 'Shield',
            },
            {
              label: 'Target',
              value: 'Target',
            },
            {
              label: 'Star',
              value: 'Star',
            },
          ],
        },
      ],
    },
  ],
}
