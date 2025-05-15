import type { Block } from 'payload'

export const CoreValuesBlock: Block = {
  slug: 'coreValuesBlock',
  interfaceName: 'CoreValuesBlock',
  labels: {
    singular: 'Core Values Block',
    plural: 'Core Values Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Core Values',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'These principles guide our decisions, shape our culture, and define how we interact with clients, partners, and each other.',
    },
    {
      name: 'values',
      type: 'array',
      label: 'Values',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Award', value: 'award' },
            { label: 'Shield', value: 'shield' },
            { label: 'Lightbulb', value: 'lightbulb' },
            { label: 'Users', value: 'users' },
            { label: 'Clock', value: 'clock' },
            { label: 'Chart', value: 'chart' },
          ],
          defaultValue: 'award',
        },
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
      ],
      defaultValue: [
        {
          icon: 'award',
          title: 'Excellence',
          description:
            'We strive for excellence in everything we do, from the quality of our products to the service we provide. We set high standards and continuously work to exceed them, ensuring that every project reflects our commitment to superior craftsmanship.',
        },
        {
          icon: 'shield',
          title: 'Integrity',
          description:
            'We conduct our business with honesty, transparency, and ethical practices. We honor our commitments, take responsibility for our actions, and build relationships based on trust and mutual respect.',
        },
        {
          icon: 'lightbulb',
          title: 'Innovation',
          description:
            'We embrace creativity and forward-thinking, constantly seeking new ways to improve our products, processes, and services. We stay at the forefront of industry trends and technologies to deliver innovative solutions that address evolving client needs.',
        },
        {
          icon: 'users',
          title: 'Collaboration',
          description:
            'We believe in the power of teamwork and partnership. We foster a collaborative environment within our organization and work closely with clients, suppliers, and partners to achieve shared goals and deliver exceptional results.',
        },
        {
          icon: 'clock',
          title: 'Reliability',
          description:
            'We are dependable and consistent in our delivery of products and services. Our clients can count on us to meet deadlines, fulfill promises, and provide ongoing support, establishing us as a trusted partner in their success.',
        },
        {
          icon: 'chart',
          title: 'Continuous Improvement',
          description:
            'We are committed to ongoing learning and development. We regularly evaluate our performance, seek feedback, and implement improvements to enhance our capabilities and deliver greater value to our clients.',
        },
      ],
    },
  ],
}
