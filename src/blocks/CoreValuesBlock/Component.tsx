import React from 'react'
import { Award, Shield, Lightbulb, Users, Clock } from 'lucide-react'

import type { CoreValuesBlock as CoreValuesBlockType } from '@/payload-types'

export const CoreValuesBlock: React.FC<CoreValuesBlockType> = ({
  heading,
  description,
  values,
}) => {
  // Function to render the correct icon based on the value type
  const renderIcon = (iconType: string) => {
    switch (iconType) {
      case 'award':
        return <Award className="h-8 w-8 text-[#00a0e4]" />
      case 'shield':
        return <Shield className="h-8 w-8 text-[#00a0e4]" />
      case 'lightbulb':
        return <Lightbulb className="h-8 w-8 text-[#00a0e4]" />
      case 'users':
        return <Users className="h-8 w-8 text-[#00a0e4]" />
      case 'clock':
        return <Clock className="h-8 w-8 text-[#00a0e4]" />
      case 'chart':
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-[#00a0e4]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
            />
          </svg>
        )
      default:
        return <Award className="h-8 w-8 text-[#00a0e4]" />
    }
  }

  return (
    <section className="py-20 bg-[#0a1a3a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">{description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values?.map((value, index) => (
            <div key={index} className="bg-[#0c2252] p-8 rounded-lg">
              <div className="w-16 h-16 bg-[#00a0e4]/20 rounded-full flex items-center justify-center mb-6">
                {renderIcon(value.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
