'use client'

import React from 'react'
import { Media } from '@/components/Media'

import type { TeamMembersBlock as TeamMembersBlockType } from '@/payload-types'

export const TeamMembersBlock: React.FC<TeamMembersBlockType> = ({
  title,
  description,
  teamMembers,
}) => {
  return (
    <section className="py-20 bg-[#081632]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          {description && <p className="text-lg text-gray-300">{description}</p>}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers &&
            teamMembers.map((member) => (
              <div key={member.id} className="bg-[#0c2252] rounded-lg overflow-hidden">
                <div className="relative h-80">
                  <Media resource={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-[#00a0e4] mb-4">{member.position}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
