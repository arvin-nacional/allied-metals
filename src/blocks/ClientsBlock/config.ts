import type { Block } from 'payload'

export const ClientsBlock: Block = {
  slug: 'clientsBlock',
  interfaceName: 'ClientsBlock',
  labels: {
    singular: 'Clients Block',
    plural: 'Clients Blocks',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      required: false,
      defaultValue: 'Our Client Portfolio',
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: false,
      defaultValue:
        "We're proud to have worked with some of the most prestigious establishments in the hospitality industry and beyond. Browse our client list by category.",
    },
    {
      name: 'clientCategories',
      type: 'array',
      label: 'Client Categories',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Category Name',
          required: true,
        },
        {
          name: 'slug',
          type: 'text',
          label: 'Slug (URL-friendly identifier)',
          required: true,
          admin: {
            description: 'Used for tab navigation. Use only lowercase letters, numbers, and hyphens.',
          },
        },
        {
          name: 'isDefault',
          type: 'checkbox',
          label: 'Default Tab',
          defaultValue: false,
        },
        {
          name: 'clientGroups',
          type: 'array',
          label: 'Client Groups',
          minRows: 1,
          fields: [
            {
              name: 'title',
              type: 'text',
              label: 'Group Title',
              required: true,
            },
            {
              name: 'clients',
              type: 'array',
              label: 'Client List',
              minRows: 1,
              fields: [
                {
                  name: 'name',
                  type: 'text',
                  label: 'Client Name',
                  required: true,
                }
              ]
            }
          ]
        }
      ],
      defaultValue: [
        {
          name: 'Hotels in Metro Manila',
          slug: 'metro-manila',
          isDefault: true,
          clientGroups: [
            {
              title: '5-Star Hotels',
              clients: [
                { name: 'Manila Hotel' },
                { name: 'Shangri-La at the Fort' },
                { name: 'Conrad Manila' },
                { name: 'Okada Manila' },
                { name: 'Solaire Resort & Casino' },
                { name: 'City of Dreams Manila' },
                { name: 'Grand Hyatt Manila' },
                { name: 'Fairmont Makati' },
                { name: 'Raffles Makati' },
                { name: 'The Peninsula Manila' }
              ]
            },
            {
              title: '4-Star Hotels',
              clients: [
                { name: 'Diamond Hotel Philippines' },
                { name: 'Nobu Hotel Manila' },
                { name: 'New World Makati Hotel' },
                { name: 'Dusit Thani Manila' },
                { name: 'Sofitel Philippine Plaza Manila' },
                { name: 'Manila Marriott Hotel' },
                { name: 'Holiday Inn & Suites Makati' },
                { name: 'Ascott Bonifacio Global City' },
                { name: 'Discovery Primea' },
                { name: 'Edsa Shangri-La Manila' }
              ]
            },
            {
              title: 'Boutique Hotels',
              clients: [
                { name: 'The Henry Manila' },
                { name: 'Aruga by Rockwell' },
                { name: "I'M Hotel" },
                { name: 'The Picasso Boutique Serviced Residences' },
                { name: 'Seda Vertis North' },
                { name: 'Seda BGC' },
                { name: 'Seda Residences Makati' },
                { name: 'The Mini Suites at Eton Tower Makati' },
                { name: 'Y2 Residence Hotel' },
                { name: 'Azumi Boutique Hotel' }
              ]
            }
          ]
        },
        {
          name: 'Hotels in Provincial Areas',
          slug: 'provincial',
          isDefault: false,
          clientGroups: [
            {
              title: 'Luzon',
              clients: [
                { name: 'Taal Vista Hotel, Tagaytay' },
                { name: 'The Manor at Camp John Hay, Baguio' },
                { name: 'The Forest Lodge at Camp John Hay, Baguio' },
                { name: 'Baguio Country Club' },
                { name: 'Thunderbird Resorts Poro Point, La Union' },
                { name: 'Vitalis Villas, Santiago, Ilocos Sur' },
                { name: 'Microtel by Wyndham Cabanatuan' },
                { name: 'Quest Plus Conference Center, Clark' },
                { name: 'Widus Hotel and Casino, Clark' },
                { name: 'Midori Hotel and Casino, Clark' }
              ]
            },
            {
              title: 'Visayas',
              clients: [
                { name: 'Radisson Blu Cebu' },
                { name: 'Marco Polo Plaza Cebu' },
                { name: "Shangri-La's Mactan Resort & Spa" },
                { name: 'Crimson Resort and Spa Mactan' },
                { name: 'Savoy Hotel Boracay' },
                { name: 'The Lind Boracay' },
                { name: 'Henann Regency Resort and Spa, Boracay' },
                { name: 'Movenpick Resort & Spa Boracay' },
                { name: 'Bellevue Resort Bohol' },
                { name: 'Mithi Resort and Spa, Bohol' }
              ]
            },
            {
              title: 'Mindanao',
              clients: [
                { name: 'Seda Abreeza, Davao' },
                { name: 'Park Inn by Radisson Davao' },
                { name: 'Marco Polo Davao' },
                { name: 'Dusit Thani Residence Davao' },
                { name: 'Waterfront Insular Hotel Davao' },
                { name: 'Limketkai Luxe Hotel, Cagayan de Oro' },
                { name: 'Seda Centrio, Cagayan de Oro' },
                { name: 'Mallberry Suites Business Hotel, Cagayan de Oro' },
                { name: 'Greenleaf Hotel, General Santos City' },
                { name: 'The Farm at Carpenter Hill, Koronadal' }
              ]
            }
          ]
        }
      ]
    }
  ],
}
