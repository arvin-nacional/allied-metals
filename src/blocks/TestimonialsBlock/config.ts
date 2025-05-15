import type { Block } from 'payload'

export const TestimonialsBlock: Block = {
  slug: 'testimonialsBlock',
  interfaceName: 'TestimonialsBlock',
  labels: {
    singular: 'Testimonials Block',
    plural: 'Testimonials Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
      defaultValue: 'What Our Clients Say',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      defaultValue: 'Don\'t just take our word for it. Here\'s what our clients have to say about our services.',
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
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      maxRows: 12,
      labels: {
        singular: 'Testimonial',
        plural: 'Testimonials',
      },
      fields: [
        {
          name: 'quote',
          type: 'textarea',
          label: 'Testimonial Quote',
          required: true,
        },
        {
          name: 'author',
          type: 'text',
          label: 'Author Name',
          required: true,
        },
        {
          name: 'role',
          type: 'text',
          label: 'Author Role',
          required: true,
        },
        {
          name: 'company',
          type: 'text',
          label: 'Company Name',
        },
        {
          name: 'rating',
          type: 'select',
          label: 'Rating (out of 5 stars)',
          defaultValue: 5,
          options: [
            { label: '5 Stars', value: '5' },
            { label: '4 Stars', value: '4' },
            { label: '3 Stars', value: '3' },
            { label: '2 Stars', value: '2' },
            { label: '1 Star', value: '1' },
          ],
        },
        {
          name: 'initials',
          type: 'text',
          label: 'Author Initials',
          required: true,
          minLength: 1,
          maxLength: 3,
        },
      ],
    },
  ],
}
