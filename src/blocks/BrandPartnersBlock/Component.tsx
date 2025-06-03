import React from 'react'

import { Media as MediaType } from '@/payload-types'
import { Media } from '@/components/Media'

// Function to get light mode background color based on dark mode color
const getLightModeBackground = (darkModeClass: string): string => {
  switch (darkModeClass) {
    case 'bg-[#081632]':
      return 'bg-blue-50'
    case 'bg-[#0a1a3a]':
      return 'bg-gray-50'
    case 'bg-[#050f22]':
      return 'bg-slate-100'
    default:
      return 'bg-white'
  }
}

const AnimatedElement: React.FC<{
  children: React.ReactNode
  animation?: 'fadeInUp' | 'fadeInDown' | 'fadeInLeft' | 'fadeInRight' | 'scale'
  delay?: number
}> = ({ children }) => {
  // Simple wrapper without animations since framer-motion is not available
  return <div className="transition-all duration-300 ease-in-out">{children}</div>
}

export const BrandPartnersBlock: React.FC<{
  heading?: string
  description?: string
  partners?: {
    name: string
    logo: string | MediaType
    invertImageInDarkMode?: boolean
    id?: string
  }[]
  background?: string
  blockType: 'brandPartnersBlock'
}> = ({ heading, description, partners, background }) => {
  // If no partners data is provided, use placeholder data for demo purposes
  // Set default values for props
  const headingText = heading || 'Our Brand Partners'
  const descriptionText =
    description ||
    "We partner with the world's leading kitchen equipment manufacturers to bring you the best in quality and innovation."

  // If no partners data is provided, use placeholder data for demo purposes
  const displayPartners =
    partners && partners.length > 0
      ? partners
      : [...Array(12)].map((_, i) => ({
          name: `Brand Partner ${i + 1}`,
          logo: {
            id: `placeholder-${i}`,
            url: `/placeholder.svg?height=80&width=160`,
            alt: `Brand Partner ${i + 1}`,
            width: 160,
            height: 80,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          },
          invertImageInDarkMode: false,
          id: `placeholder-${i}`,
        }))

  const darkModeBackground = background || 'bg-[#081632]'
  const lightModeBackground = getLightModeBackground(darkModeBackground)

  return (
    <section className={`py-20 ${lightModeBackground} dark:${darkModeBackground}`}>
      <div className="container mx-auto px-4">
        <AnimatedElement animation="fadeInUp">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{headingText}</h2>
            <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
            <p className="text-lg text-gray-700 dark:text-gray-300">{descriptionText}</p>
          </div>
        </AnimatedElement>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
          {displayPartners?.map((partner, i) => {
            return (
              <AnimatedElement key={partner.id || i}>
                <div className="bg-white dark:bg-[#0c2252] p-6 rounded-lg shadow flex items-center justify-center h-24 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Media
                    resource={partner.logo}
                    alt={partner.name}
                    imgClassName={`max-h-12 w-auto object-contain ${partner.invertImageInDarkMode ? 'dark:invert dark:brightness-[1.25] dark:hue-rotate-180' : ''}`}
                  />
                </div>
              </AnimatedElement>
            )
          })}
        </div>
      </div>
    </section>
  )
}
