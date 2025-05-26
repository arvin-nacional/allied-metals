import React from 'react'
import { Media } from '@/components/Media'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

import type { ServiceDetailBlock as ServiceDetailBlockType } from '@/payload-types'

export const ServiceDetailBlock: React.FC<ServiceDetailBlockType> = ({
  title,
  description,
  additionalText,
  backgroundColorClass,
  imagePosition,
  features,
  image,
  buttonText,
  buttonLink,
}) => {
  // Function to determine the light mode background color based on the dark mode selection
  const getLightModeBackground = () => {
    switch (backgroundColorClass) {
      case 'bg-[#081632]': // Dark Blue
        return 'bg-blue-50'
      case 'bg-[#0a1a3a]': // Light Blue
        return 'bg-white'
      case 'bg-[#050f22]': // Very Dark Blue
        return 'bg-slate-100'
      default:
        return 'bg-white' // Default or transparent case
    }
  }

  return (
    <section
      className={`py-20 ${getLightModeBackground()} dark:${backgroundColorClass} transition-colors duration-300`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {imagePosition === 'left' && (
            <div className="order-2 md:order-1">
              <Media resource={image} className="rounded-lg shadow-xl" />
            </div>
          )}

          <div className={`${imagePosition === 'left' ? 'order-1 md:order-2' : ''}`}>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
            <div className="w-16 h-1 bg-[#00a0e4] mb-6"></div>
            {description && <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>}
            {additionalText && (
              <p className="text-gray-600 dark:text-gray-300 mb-6">{additionalText}</p>
            )}

            {features && features.length > 0 && (
              <div className="space-y-4 mb-8">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start">
                    <div className="w-6 h-6 bg-[#00a0e4] rounded-full flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">{feature.text}</p>
                  </div>
                ))}
              </div>
            )}

            {buttonText && buttonLink && (
              <Button className="bg-[#00a0e4] hover:bg-[#0081b8] text-white" asChild>
                <Link href={buttonLink}>{buttonText}</Link>
              </Button>
            )}
          </div>

          {imagePosition === 'right' && (
            <div>
              <Media resource={image} className="rounded-lg shadow-xl" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
