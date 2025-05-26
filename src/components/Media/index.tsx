import React, { Fragment } from 'react'

import type { Props } from './types'

import { ImageMedia } from './ImageMedia'
import { VideoMedia } from './VideoMedia'

export const Media: React.FC<Props> = (props) => {
  const { className, htmlElement = 'div', resource } = props

  // Improved video detection
  const isVideo = typeof resource === 'object' && (
    (resource?.mimeType && resource.mimeType.includes('video')) ||
    (resource?.filename && (
      resource.filename.endsWith('.mp4') ||
      resource.filename.endsWith('.webm') ||
      resource.filename.endsWith('.mov')
    )) ||
    (resource?.url && (
      resource.url.endsWith('.mp4') ||
      resource.url.endsWith('.webm') ||
      resource.url.endsWith('.mov')
    ))
  )
  
  // Log resource details for debugging
  if (typeof window !== 'undefined' && resource && typeof resource === 'object') {
    console.log('Media resource:', {
      url: resource.url,
      filename: resource.filename,
      mimeType: resource.mimeType,
      isVideo: isVideo
    })
  }
  
  const Tag = htmlElement || Fragment

  return (
    <Tag
      {...(htmlElement !== null
        ? {
            className,
          }
        : {})}
    >
      {isVideo ? <VideoMedia {...props} /> : <ImageMedia {...props} />}
    </Tag>
  )
}
