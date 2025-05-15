import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import type { AboutBlock as AboutBlockType } from '@/payload-types'

export const AboutBlock: React.FC<AboutBlockType> = ({
  heading,
  subheading,
  description,
  image,
  storyTitle,
  story,
  story2,
  stats,
}) => {
  return (
    <section id="about" className={cn('py-20 bg-[#081632]')}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          {subheading && <h3 className="text-xl text-gray-200 mb-2">{subheading}</h3>}
          <p className="text-lg text-gray-300">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {image ? (
              <Media resource={image} className="rounded-lg shadow-lg" />
            ) : (
              <div className="bg-gray-700 rounded-lg shadow-lg h-[400px] flex items-center justify-center">
                <p className="text-gray-400">Image placeholder</p>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">{storyTitle}</h3>
            <p className="text-gray-300 mb-6">{story}</p>
            <p className="text-gray-300 mb-6">{story2}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats?.map((stat, i) => (
                <div key={i} className="bg-[#0c2252] p-6 rounded-lg">
                  <h4 className="text-xl font-bold mb-2">{stat.value}</h4>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
