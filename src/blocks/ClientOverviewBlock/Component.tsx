import React from 'react'
import { Building2, HeartPulse, UtensilsCrossed, CakeSlice, Building, GraduationCap, Briefcase } from 'lucide-react'

import { ClientOverviewBlock as ClientOverviewBlockType } from '@/payload-types'

export const ClientOverviewBlock: React.FC<ClientOverviewBlockType> = ({
  heading,
  description,
  clientCategories,
}) => {
  // Function to render the correct icon based on the category type
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'hotels':
        return <Building2 className="h-8 w-8 text-[#00a0e4]" />
      case 'hospitals':
        return <HeartPulse className="h-8 w-8 text-[#00a0e4]" />
      case 'foodchain':
        return <CakeSlice className="h-8 w-8 text-[#00a0e4]" />
      case 'restaurants':
        return <UtensilsCrossed className="h-8 w-8 text-[#00a0e4]" />
      case 'education':
        return <GraduationCap className="h-8 w-8 text-[#00a0e4]" />
      case 'corporate':
        return <Briefcase className="h-8 w-8 text-[#00a0e4]" />
      default:
        return <Building className="h-8 w-8 text-[#00a0e4]" />
    }
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {clientCategories?.map((category, index) => (
            <div key={index} className="bg-[#0c2252] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#00a0e4]/20 rounded-full flex items-center justify-center mb-6">
                {renderIcon(category.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{category.title}</h3>
              <p className="text-gray-300">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientOverviewBlock
