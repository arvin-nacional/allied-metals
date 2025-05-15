'use client'

import React from 'react'

import type { ProcessBlock as ProcessBlockProps } from '@/payload-types'

export const ProcessBlock: React.FC<ProcessBlockProps> = ({
  heading,
  description,
  processSteps,
}) => {
  return (
    <section className="py-20 bg-[#081632]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {heading || 'Our Service Process'}
          </h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-300">
            {description ||
              'We follow a structured approach to ensure every project is delivered to the highest standards, on time and within budget.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
          {(processSteps || []).map((step, index) => (
            <div key={index} className="flex">
              <div className="mr-6">
                <div className="w-12 h-12 bg-[#00a0e4] rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
