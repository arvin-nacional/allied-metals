import React from 'react'
import { Media } from '@/components/Media'
import type { ServicesBlock as ServicesBlockType } from '@/payload-types'
import { cn } from '@/utilities/ui'

// Define types for the component

type ServicesBlockProps = ServicesBlockType & {
  className?: string
}

export const ServicesBlock: React.FC<ServicesBlockProps> = ({
  heading,
  description,
  services,
  galleryImages,
  className,
}) => {
  return (
    <section
      id="what-we-do"
      className={cn('py-20 bg-white dark:bg-[#081632] transition-colors duration-300', className)}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              {galleryImages && galleryImages.length > 0 ? (
                galleryImages.map((item, index) => (
                  <div key={index} className="rounded-lg overflow-hidden">
                    <Media
                      resource={item.image}
                      alt={item.alt}
                      imgClassName="rounded-lg h-[350px] max-sm:h-[200px] object-cover"
                    />
                  </div>
                ))
              ) : (
                // Placeholder grid if no images are provided
                <>
                  {[1, 2, 3, 4].map((num) => (
                    <div
                      key={num}
                      className="bg-gray-200 dark:bg-[#061A3A] rounded-lg h-[200px] flex items-center justify-center transition-colors duration-300"
                    >
                      <p className="text-gray-500 dark:text-gray-400">Image placeholder</p>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="space-y-8">
              {services?.map((service, index) => (
                <div key={index}>
                  <h3 className="text-2xl font-bold mb-3 flex items-center text-gray-900 dark:text-white">
                    <span className="w-8 h-8 bg-[#00a0e4] rounded-full flex items-center justify-center mr-3 text-sm text-white">
                      {service.number}
                    </span>
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 ml-11">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
