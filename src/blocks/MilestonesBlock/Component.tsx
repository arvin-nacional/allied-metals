'use client'

import React from 'react'
import { Media } from '@/components/Media'

import type { MilestonesBlock as MilestonesBlockType } from '@/payload-types'

export const MilestonesBlock: React.FC<MilestonesBlockType> = ({
  title,
  description,
  milestones,
}) => {
  return (
    <section className="py-20 bg-[#0a1a3a]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          {description && <p className="text-lg text-gray-300">{description}</p>}
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#00a0e4]/30"></div>

          {/* Timeline items */}
          <div className="space-y-16 relative">
            {milestones &&
              milestones.map((milestone, index) => (
                <div key={milestone.id} className="flex flex-col md:flex-row items-center">
                  {index % 2 === 0 ? (
                    // Even milestone (0, 2, 4...) - Text on left, image on right
                    <>
                      <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0 order-2 md:order-1">
                        <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                        <h4 className="text-xl text-[#00a0e4] mb-3">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                      <div className="md:w-12 flex justify-center order-1 md:order-2">
                        <div className="w-10 h-10 bg-[#00a0e4] rounded-full flex items-center justify-center z-10">
                          <span className="font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 order-3">
                        <div className="rounded-lg shadow-lg overflow-hidden">
                          <Media
                            resource={milestone.image}
                            alt={milestone.title}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    // Odd milestone (1, 3, 5...) - Image on left, text on right
                    <>
                      <div className="md:w-1/2 md:pr-12 md:text-right order-3 md:order-1 mb-8 md:mb-0">
                        <div className="rounded-lg shadow-lg overflow-hidden">
                          <Media
                            resource={milestone.image}
                            alt={milestone.title}
                            className="w-full h-auto rounded-lg"
                          />
                        </div>
                      </div>
                      <div className="md:w-12 flex justify-center order-1 md:order-2">
                        <div className="w-10 h-10 bg-[#00a0e4] rounded-full flex items-center justify-center z-10">
                          <span className="font-bold">{index + 1}</span>
                        </div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 order-2 md:order-3">
                        <h3 className="text-2xl font-bold mb-2">{milestone.year}</h3>
                        <h4 className="text-xl text-[#00a0e4] mb-3">{milestone.title}</h4>
                        <p className="text-gray-300">{milestone.description}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
