import React from 'react'
import Image from 'next/image'

import type { StoryBlock as StoryBlockType } from '@/payload-types'
import { Media } from '@/components/Media'

export const StoryBlock: React.FC<StoryBlockType> = ({ heading, paragraphs, image, stats }) => {
  return (
    <section className="py-20 bg-[#0a1a3a]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">{heading}</h2>
            <div className="w-16 h-1 bg-[#00a0e4] mb-6"></div>
            {paragraphs?.map((paragraph, i) => (
              <p key={i} className="text-gray-300 mb-6 last:mb-0">
                {paragraph.content}
              </p>
            ))}
          </div>
          <div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              {image ? (
                <Media resource={image} className="object-cover h-full w-full" />
              ) : (
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Allied Metals history"
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {stats?.map((stat, i) => (
                <div key={i} className="bg-[#0c2252] p-4 rounded-lg text-center">
                  <h3 className="text-2xl font-bold text-[#00a0e4]">{stat.value}</h3>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
