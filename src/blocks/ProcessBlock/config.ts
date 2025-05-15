import type { Block } from 'payload'

export const ProcessBlock: Block = {
  slug: 'processBlock',
  interfaceName: 'ProcessBlock',
  labels: {
    singular: 'Process Block',
    plural: 'Process Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Service Process',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'We follow a structured approach to ensure every project is delivered to the highest standards, on time and within budget.',
    },
    {
      name: 'processSteps',
      type: 'array',
      label: 'Process Steps',
      minRows: 2,
      maxRows: 8,
      fields: [
        {
          name: 'number',
          type: 'number',
          label: 'Step Number',
          required: true,
        },
        {
          name: 'title',
          type: 'text',
          label: 'Step Title',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Step Description',
          required: true,
        }
      ],
      defaultValue: [
        {
          number: 1,
          title: 'Consultation & Requirements Analysis',
          description: 'We begin by understanding your specific needs, challenges, and objectives through detailed discussions and site visits. This helps us identify the right solutions for your unique requirements.',
        },
        {
          number: 2,
          title: 'Design & Planning',
          description: 'Our design team creates detailed plans and 3D renderings of your kitchen, allowing you to visualize the final result. We collaborate with you to refine the design until it meets your exact specifications.',
        },
        {
          number: 3,
          title: 'Fabrication & Procurement',
          description: 'Once designs are approved, our skilled craftsmen begin fabricating custom equipment while we procure additional items from trusted suppliers. Quality control checks are performed at every stage.',
        },
        {
          number: 4,
          title: 'Installation & Commissioning',
          description: 'Our experienced installation team ensures all equipment is properly installed, tested, and ready for operation. We coordinate with other contractors to minimize disruption to your business.',
        },
        {
          number: 5,
          title: 'Training & Handover',
          description: 'We provide comprehensive training to your staff on equipment operation and maintenance, ensuring a smooth transition and optimal performance from day one.',
        },
        {
          number: 6,
          title: 'Ongoing Support & Maintenance',
          description: 'Our relationship doesn\'t end with installation. We provide ongoing support and maintenance services to ensure your kitchen continues to operate at peak performance.',
        }
      ],
    },
  ],
}
