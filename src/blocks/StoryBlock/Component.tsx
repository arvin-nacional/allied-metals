'use client'

import React from 'react'
import AnimationWrapper from '@/components/AnimationWrapper'
import Image from 'next/image'

import type { StoryBlock as StoryBlockType } from '@/payload-types'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/ui'

type StoryBlockProps = StoryBlockType & {
  className?: string
}

export const StoryBlock: React.FC<StoryBlockProps> = ({
  heading,
  paragraphs,
  image,
  stats,
  className,
}) => {
  return (
    <section
      className={cn('py-20 bg-white dark:bg-[#0a1a3a] transition-colors duration-300', className)}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <AnimationWrapper direction="down">
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{heading}</h2>
            </AnimationWrapper>
            <AnimationWrapper direction="down" delay={0.1}>
              <div className="w-16 h-1 bg-[#00a0e4] mb-6"></div>
            </AnimationWrapper>
            {paragraphs?.map((paragraph, i) => (
              <AnimationWrapper direction="up" delay={i * 0.15} key={i}>
                <p className="text-gray-700 dark:text-gray-300 mb-6 last:mb-0">
                  {paragraph.content}
                </p>
              </AnimationWrapper>
            ))}
          </div>
          <div>
            <AnimationWrapper direction="left">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800">
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
            </AnimationWrapper>
            <div className="grid grid-cols-3 gap-4 mt-4">
              {stats?.map((stat, i) => (
                <AnimationWrapper direction="up" delay={i * 0.15} key={i}>
                  <div className="bg-blue-50 dark:bg-[#0c2252] p-4 rounded-xl text-center transition-colors duration-300 hover:shadow-lg">
                    <h3 className="text-2xl font-bold text-[#00a0e4]">{stat.value}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                  </div>
                </AnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
