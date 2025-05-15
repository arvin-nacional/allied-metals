import type { Block } from 'payload'

export const ServicesBlock: Block = {
  slug: 'servicesBlock',
  interfaceName: 'ServicesBlock',
  labels: {
    singular: 'Services Block',
    plural: 'Services Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'What We Do',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'Allied Metals provides comprehensive kitchen solutions tailored to the unique needs of each client.',
    },
    {
      name: 'services',
      type: 'array',
      label: 'Services',
      minRows: 1,
      maxRows: 8,
      fields: [
        {
          name: 'number',
          type: 'number',
          label: 'Number',
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
      ],
      defaultValue: [
        {
          number: 1,
          title: 'Kitchen Design & Planning',
          description: 'We work closely with clients to design kitchens that optimize workflow, maximize space utilization, and meet specific operational requirements.',
        },
        {
          number: 2,
          title: 'Custom Fabrication',
          description: 'Our skilled craftsmen create custom stainless steel equipment tailored to your specific needs, ensuring perfect fit and functionality.',
        },
        {
          number: 3,
          title: 'Equipment Supply & Installation',
          description: 'We source and install high-quality kitchen equipment from leading manufacturers, complementing our custom fabrication services.',
        },
        {
          number: 4,
          title: 'Maintenance & Support',
          description: 'Our relationship doesn\'t end with installation. We provide ongoing maintenance and support to ensure your kitchen operates at peak performance.',
        },
      ],
    },
    {
      name: 'galleryImages',
      type: 'array',
      label: 'Gallery Images',
      minRows: 1,
      maxRows: 4,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'alt',
          type: 'text',
          label: 'Alt Text',
          required: true,
        },
      ],
    },
  ],
}
