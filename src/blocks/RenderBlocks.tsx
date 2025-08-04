import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { AboutBlock } from '@/blocks/AboutBlock/Component'
import { BeliefsBlock } from '@/blocks/BeliefsBlock/Component'
import { ServicesBlock } from '@/blocks/ServicesBlock/Component'
import { ClientsBlock } from '@/blocks/ClientsBlock/Component'
import { ProcessBlock } from '@/blocks/ProcessBlock/Component'
import { CoreValuesBlock } from '@/blocks/CoreValuesBlock/Component'
import { MissionVisionBlock } from '@/blocks/MissionVisionBlock/Component'
import { StoryBlock } from '@/blocks/StoryBlock/Component'
import { TeamMembersBlock } from '@/blocks/TeamMembersBlock/Component'
import { MilestonesBlock } from '@/blocks/MilestonesBlock/Component'
import { ServiceDetailBlock } from '@/blocks/ServiceDetailBlock/Component'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock/Component'
import { ClientOverviewBlock } from '@/blocks/ClientOverviewBlock/Component'
import { CoreServicesBlock } from '@/blocks/CoreServicesBlock/Component'
import { ServiceProcessBlock } from '@/blocks/ServiceProcessBlock/Component'
import { BrandPartnersBlock } from '@/blocks/BrandPartnersBlock/Component'
import { ContactSectionBlock } from '@/blocks/ContactSection/Component'
import { ClientPhotosBlock } from '@/blocks/ClientPhotosBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  aboutBlock: AboutBlock,
  beliefsBlock: BeliefsBlock,
  servicesBlock: ServicesBlock,
  clientsBlock: ClientsBlock,
  processBlock: ProcessBlock,
  clientPhotosBlock: ClientPhotosBlock,
  coreValuesBlock: CoreValuesBlock,
  missionVisionBlock: MissionVisionBlock,
  storyBlock: StoryBlock,
  teamMembersBlock: TeamMembersBlock,
  milestonesBlock: MilestonesBlock,
  serviceDetailBlock: ServiceDetailBlock,
  testimonialsBlock: TestimonialsBlock,
  clientOverviewBlock: ClientOverviewBlock,
  coreServicesBlock: CoreServicesBlock,
  serviceProcessBlock: ServiceProcessBlock,
  brandPartnersBlock: BrandPartnersBlock,
  contactSection: ContactSectionBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div key={index}>
                  {/* @ts-expect-error there may be some mismatch between the expected types here */}
                  <Block {...block} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
