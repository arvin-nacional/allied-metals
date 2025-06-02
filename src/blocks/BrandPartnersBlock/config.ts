import type { Block } from 'payload'

export const BrandPartnersBlock: Block = {
  slug: 'brandPartnersBlock',
  interfaceName: 'BrandPartnersBlock',
  labels: {
    singular: 'Brand Partners Block',
    plural: 'Brand Partners Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: true,
      defaultValue: 'Our Brand Partners',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue:
        "We partner with the world's leading kitchen equipment manufacturers to bring you the best in quality and innovation.",
    },
    {
      name: 'partners',
      type: 'array',
      label: 'Brand Partners',
      minRows: 1,
      maxRows: 24,
      labels: {
        singular: 'Partner',
        plural: 'Partners',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Partner Name',
          required: true,
        },
        {
          name: 'logo',
          type: 'upload',
          label: 'Partner Logo',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'invertImageInDarkMode',
          type: 'checkbox',
          label: 'Invert Logo in Dark Mode',
          admin: {
            description: 'Enable this to invert black colors to white in dark mode for better visibility',
          },
          defaultValue: false,
        },
      ],
    },
    {
      name: 'background',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'bg-[#081632]',
      options: [
        {
          label: 'Dark Blue',
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
          label: 'Transparent',
          value: 'bg-transparent',
        },
      ],
    },

  ],
}
