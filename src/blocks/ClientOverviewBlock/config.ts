import type { Block } from 'payload'

export const ClientOverviewBlock: Block = {
  slug: 'clientOverviewBlock',
  interfaceName: 'ClientOverviewBlock',
  labels: {
    singular: 'Client Overview Block',
    plural: 'Client Overview Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Who We Work With',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        'For over three decades, Allied Metals has been the trusted partner for a diverse range of clients, from luxury hotels and resorts to hospitals, restaurants, and food service chains.',
    },
    {
      name: 'clientCategories',
      type: 'array',
      label: 'Client Categories',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'icon',
          type: 'select',
          required: true,
          options: [
            { label: 'Hotels, Resorts and Clubs', value: 'hotels' },
            { label: 'Hospitals and Pharmaceuticals', value: 'hospitals' },
            { label: 'Quick Service and Food Chain', value: 'foodchain' },
            { label: 'Restaurants and Bars', value: 'restaurants' },
            { label: 'Educational Institutions', value: 'education' },
            { label: 'Corporate Offices', value: 'corporate' },
          ],
          defaultValue: 'hotels',
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
          icon: 'hotels',
          title: 'Hotels, Resorts and Clubs',
          description:
            "We've partnered with leading hotels and resorts across the Philippines and Southeast Asia, from international luxury chains to boutique properties, providing custom kitchen solutions that meet the highest standards of quality and efficiency.",
        },
        {
          icon: 'hospitals',
          title: 'Hospitals and Pharmaceuticals',
          description:
            "We've delivered specialized kitchen solutions for hospitals, pharmaceutical facilities, and healthcare institutions that meet strict hygiene standards, operational requirements, and budget constraints while serving large numbers of people efficiently.",
        },
        {
          icon: 'foodchain',
          title: 'Quick Service and Food Chain',
          description:
            "We work with fast-food and quick-service restaurant chains to create efficient, high-volume kitchen systems that ensure consistency, speed, and quality across multiple locations, supporting their unique operational requirements.",
        },
        {
          icon: 'restaurants',
          title: 'Restaurants and Bars',
          description:
            "From fine dining establishments to casual restaurants and bars, we've designed and implemented kitchen solutions that optimize workflow, enhance efficiency, and support the unique culinary vision of each client.",
        },
        {
          icon: 'education',
          title: 'Educational Institutions',
          description:
            "We provide specialized kitchen solutions for schools, universities, and other educational institutions that balance efficiency, durability, and cost-effectiveness while serving large numbers of students and faculty daily.",
        },
        {
          icon: 'corporate',
          title: 'Corporate Offices',
          description:
            "Our corporate cafeteria and dining solutions help businesses create functional and appealing food service areas that enhance employee satisfaction and productivity while meeting the demands of busy office environments.",
        },
      ],
    },
  ],
}
