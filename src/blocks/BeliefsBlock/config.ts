import type { Block } from 'payload'

export const BeliefsBlock: Block = {
  slug: 'beliefsBlock',
  interfaceName: 'BeliefsBlock',
  labels: {
    singular: 'Beliefs Block',
    plural: 'Beliefs Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Beliefs',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'Our core values guide everything we do, from design and manufacturing to installation and after-sales support.',
    },
    {
      name: 'beliefs',
      type: 'array',
      label: 'Belief Items',
      minRows: 1,
      maxRows: 9,
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'iconType',
          type: 'select',
          options: [
            {
              label: 'Quality',
              value: 'quality',
            },
            {
              label: 'Innovation',
              value: 'innovation',
            },
            {
              label: 'Customer',
              value: 'customer',
            },
            {
              label: 'Sustainability',
              value: 'sustainability',
            },
            {
              label: 'Team',
              value: 'team',
            },
            {
              label: 'Excellence',
              value: 'excellence',
            },
          ],
          defaultValue: 'quality',
          required: true,
        },
      ],
      defaultValue: [
        {
          title: 'Quality Excellence',
          description: 'We believe in delivering products that stand the test of time. Our commitment to quality is evident in every weld, every finish, and every component we use.',
          iconType: 'quality',
        },
        {
          title: 'Innovation',
          description: 'We continuously explore new technologies and methodologies to improve our products and services, ensuring our clients benefit from the latest advancements in kitchen design.',
          iconType: 'innovation',
        },
        {
          title: 'Customer Partnership',
          description: 'We view our clients as partners. We listen to their needs, understand their challenges, and work collaboratively to deliver solutions that exceed their expectations.',
          iconType: 'customer',
        },
      ],
    },
  ],
}
