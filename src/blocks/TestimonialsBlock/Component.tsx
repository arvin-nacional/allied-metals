'use client'

import React from 'react'
import { Star } from 'lucide-react'

export const TestimonialsBlock: React.FC<{
  blockType?: 'testimonialsBlock'
  blockName?: string
  title: string
  description?: string
  backgroundColorClass?: string
  testimonials: {
    id: string
    quote: string
    author: string
    role: string
    company?: string
    rating: number
    initials: string
  }[]
}> = ({ 
  title, 
  description, 
  backgroundColorClass = 'bg-[#081632]',
  testimonials 
}) => {
  return (
    <section className={`py-20 ${backgroundColorClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          {description && <p className="text-lg text-gray-300">{description}</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials && testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#0c2252] p-8 rounded-lg">
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index} 
                    className={`h-5 w-5 ${index < testimonial.rating ? 'text-[#00a0e4]' : 'text-gray-600'}`} 
                    fill={index < testimonial.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>
              <blockquote className="italic text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#00a0e4]/20 rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#00a0e4] font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.author}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.role}
                    {testimonial.company && `, ${testimonial.company}`}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
