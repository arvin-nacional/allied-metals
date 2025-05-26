import React from 'react'

import type { CallToActionBlock as CTABlockProps } from '@/payload-types'

import { CMSLink } from '@/components/Link'

// Use type assertion to handle our new fields
export const CallToActionBlock: React.FC<CTABlockProps> = (props) => {
  const { links } = props
  // Type assertion to access the new fields
  const heading = (props as any).heading
  const subheading = (props as any).subheading

  return (
    <section className="py-20 dark:bg-[#0A1A3A] bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">{heading}</h2>
        <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
        <p className="text-lg text-gray-900 dark:text-gray-300 max-w-3xl mx-auto mb-8">
          {subheading}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {(links || []).map(({ link }, i) => {
            const isOutline = link?.appearance === 'outline'
            return (
              <CMSLink
                key={i}
                {...link}
                className={`${isOutline ? 'border-white text-white hover:bg-white/10' : 'bg-[#00a0e4] hover:bg-[#0081b8] text-white'} px-8 py-3 rounded-md`}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
