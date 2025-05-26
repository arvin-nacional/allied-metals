import React from 'react'
import { Lightbulb, Target } from 'lucide-react'

import type { MissionVisionBlock as MissionVisionBlockType } from '@/payload-types'

export const MissionVisionBlock: React.FC<MissionVisionBlockType> = ({
  missionHeading,
  missionContent,
  visionHeading,
  visionContent,
}) => {
  return (
    <section className="py-20 dark:bg-[#081632]">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="dark:bg-[#0c2252] bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-[#00a0e4]/20 rounded-full flex items-center justify-center mb-6">
              <Target className="h-8 w-8 text-[#00a0e4]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{missionHeading}</h2>
            <div className="w-16 h-1 bg-[#00a0e4] mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">{missionContent}</p>
          </div>
          <div className="dark:bg-[#0c2252] bg-blue-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-[#00a0e4]/20 rounded-full flex items-center justify-center mb-6">
              <Lightbulb className="h-8 w-8 text-[#00a0e4]" />
            </div>
            <h2 className="text-2xl font-bold mb-4">{visionHeading}</h2>
            <div className="w-16 h-1 bg-[#00a0e4] mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">{visionContent}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
