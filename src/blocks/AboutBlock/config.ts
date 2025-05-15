import type { Block } from 'payload'

export const AboutBlock: Block = {
  slug: 'aboutBlock',
  interfaceName: 'AboutBlock',
  labels: {
    singular: 'About Block',
    plural: 'About Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'About Allied Metals',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
      required: false,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'With over 30 years of experience, Allied Metals has established itself as a leading provider of high-quality commercial kitchen equipment and solutions across the Philippines and beyond.',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Image',
      required: false,
    },
    {
      name: 'storyTitle',
      type: 'text',
      label: 'Story Title',
      required: false,
      defaultValue: 'Our Story',
    },
    {
      name: 'story',
      type: 'textarea',
      label: 'Story Paragraph 1',
      required: false,
      defaultValue:
        "Founded in 1990, Allied Metals began as a small workshop specializing in stainless steel fabrication. Today, we've grown into a comprehensive kitchen solutions provider, serving some of the most prestigious establishments in the hospitality industry.",
    },
    {
      name: 'story2',
      type: 'textarea',
      label: 'Story Paragraph 2',
      required: false,
      defaultValue:
        'Our commitment to quality, innovation, and customer satisfaction has been the cornerstone of our success. We take pride in our craftsmanship and attention to detail, ensuring that every project we undertake exceeds our clients\' expectations.',
    },
    {
      name: 'stats',
      type: 'array',
      label: 'Stats',
      minRows: 1,
      maxRows: 4,
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
        { value: '30+', label: 'Years of Experience' },
        { value: '500+', label: 'Projects Completed' },
        { value: '100+', label: 'Team Members' },
        { value: '50+', label: 'Ongoing Projects' },
      ],
    },
  ],
}
