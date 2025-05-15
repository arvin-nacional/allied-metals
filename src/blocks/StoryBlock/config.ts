import type { Block } from 'payload'

export const StoryBlock: Block = {
  slug: 'storyBlock',
  interfaceName: 'StoryBlock',
  labels: {
    singular: 'Story Block',
    plural: 'Story Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Story',
    },
    {
      name: 'paragraphs',
      type: 'array',
      label: 'Paragraphs',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'content',
          type: 'textarea',
          required: true,
        },
      ],
      defaultValue: [
        {
          content:
            "Allied Metals was founded in 1965 by a team of passionate engineers and craftsmen who saw an opportunity to revolutionize the commercial kitchen industry in the Philippines. What began as a small workshop specializing in stainless steel fabrication has grown into one of the country's leading providers of comprehensive kitchen solutions.",
        },
        {
          content:
            'Our journey has been marked by a relentless pursuit of excellence, innovation, and customer satisfaction. Over the years, we have expanded our capabilities, refined our processes, and built a team of skilled professionals dedicated to delivering exceptional results.',
        },
        {
          content:
            'Today, Allied Metals serves a diverse clientele across the hospitality industry, from luxury hotels and resorts to hospitals, restaurants, and food service chains. Our commitment to quality and service excellence remains the cornerstone of our business, driving us to continually raise the bar in everything we do.',
        },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: false,
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
        {
          name: 'label',
          type: 'text',
          required: true,
        },
      ],
      defaultValue: [
        { value: '1965', label: 'Founded' },
        { value: '500+', label: 'Projects' },
        { value: '100+', label: 'Team Members' },
      ],
    },
  ],
}
