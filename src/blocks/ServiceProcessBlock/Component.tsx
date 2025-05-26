import React from 'react'

import type { ServiceProcessBlock as ServiceProcessBlockType } from '@/payload-types'

export const ServiceProcessBlock: React.FC<ServiceProcessBlockType> = ({
  heading,
  description,
  processItems,
}) => {
  return (
    <section className="py-20 dark:bg-[#081632]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            {heading}
          </h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg dark:text-gray-300 text-gray-900">{description}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {processItems?.map(
            (item: { number: number; title: string; description: string }, index: number) => (
              <div key={index} className="flex">
                <div className="mr-6">
                  <div className="w-12 h-12 bg-[#00a0e4] rounded-full flex items-center justify-center text-xl font-bold">
                    {item.number}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-gray-500 ">
                    {item.description}
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  )
}
