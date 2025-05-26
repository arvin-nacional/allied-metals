import React from 'react'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

import type { AboutBlock as AboutBlockType } from '@/payload-types'

type AboutBlockProps = AboutBlockType & {
  className?: string
}

export const AboutBlock: React.FC<AboutBlockProps> = ({
  heading,
  subheading,
  description,
  image,
  storyTitle,
  story,
  story2,
  stats,
  className,
}) => {
  return (
    <section
      id="about"
      className={cn('py-20 bg-white dark:bg-[#081632] transition-colors duration-300', className)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          {subheading && (
            <h3 className="text-xl text-gray-700 dark:text-gray-200 mb-2">{subheading}</h3>
          )}
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {image ? (
              <Media resource={image} className="rounded-lg shadow-lg" />
            ) : (
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg h-[400px] flex items-center justify-center transition-colors duration-300">
                <p className="text-gray-500 dark:text-gray-400">Image placeholder</p>
              </div>
            )}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{storyTitle}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{story}</p>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{story2}</p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats?.map((stat, i) => (
                <div
                  key={i}
                  className="bg-blue-50 dark:bg-[#0c2252] p-6 rounded-xl transition-colors duration-300"
                >
                  <h4 className="text-xl font-bold mb-2 text-[#00a0e4] dark:text-[#00a0e4]">
                    {stat.value}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
