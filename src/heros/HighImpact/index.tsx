'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText, heroImage }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div
      className="relative -mt-[6rem] flex items-center justify-center text-white h-[90vh]"
      data-theme="dark"
    >
      <div className="container mb-8 z-10 relative flex items-center justify-start">
        <div className="flex items-center gap-4 justify-between">
          <div className="max-w-[700px]">
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}

            {Array.isArray(links) && links.length > 0 && (
              <ul className="flex justify-start gap-4">
                {links.map(({ link }, i) => {
                  return (
                    <li key={i}>
                      <CMSLink {...link} />
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
          <div className="w-1/3 rounded-md overflow-hidden">
            {heroImage && <Media resource={heroImage} />}
          </div>
        </div>
      </div>
      <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
        )}
      </div>
    </div>
  )
}
