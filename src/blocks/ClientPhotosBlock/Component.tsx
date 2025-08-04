'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define types until they get generated in payload-types
type Media = {
  url: string
  alt?: string
  [key: string]: any
}

interface ProjectPhoto {
  photo?: string | Media
  caption?: string
  id?: string
}

interface Project {
  clientName: string
  projectTitle: string
  projectDescription?: string
  projectPhotos?: ProjectPhoto[]
  id?: string
}

interface ClientType {
  name: string
  slug: string
  isDefault?: boolean
  projects?: Project[]
  id?: string
}

interface DisplayOptions {
  backgroundColor?: string
  itemsPerRow?: string
  showProjectTitle?: boolean
  showClientName?: boolean
}

interface ClientPhotosBlockType {
  blockType: 'clientPhotosBlock'
  blockName?: string
  heading?: string
  description?: string
  clientTypes?: ClientType[]
  displayOptions?: DisplayOptions
}
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

// Helper function to convert background color selection to tailwind classes
const getBackgroundClass = (colorChoice: string | undefined) => {
  // For dark mode colors
  const darkModeClass =
    colorChoice === 'dark-blue'
      ? 'dark:bg-[#081632]'
      : colorChoice === 'light-blue'
        ? 'dark:bg-[#0a1a3a]'
        : colorChoice === 'very-dark-blue'
          ? 'dark:bg-[#050f22]'
          : 'dark:bg-transparent'

  // For light mode equivalent colors
  const lightModeClass =
    colorChoice === 'dark-blue'
      ? 'bg-blue-50'
      : colorChoice === 'light-blue'
        ? 'bg-gray-50'
        : colorChoice === 'very-dark-blue'
          ? 'bg-slate-100'
          : 'bg-white'

  return `${darkModeClass} ${lightModeClass}`
}

// Helper function to get grid column class based on items per row
const getGridClass = (itemsPerRow: string | undefined) => {
  switch (itemsPerRow) {
    case '2':
      return 'grid-cols-1 md:grid-cols-2'
    case '4':
      return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
    case '3':
    default:
      return 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3'
  }
}

export const ClientPhotosBlock: React.FC<ClientPhotosBlockType> = ({
  heading,
  description,
  clientTypes = [],
  displayOptions,
}) => {
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    // Set the default active tab on initial render
    if (clientTypes && clientTypes.length > 0) {
      const defaultType = clientTypes.find((type) => type.isDefault) || clientTypes[0]
      if (defaultType) {
        setActiveTab(defaultType.slug)
      }
    }
  }, [clientTypes])

  // Background color and grid layout classes
  const bgClass = getBackgroundClass(displayOptions?.backgroundColor)
  const gridClass = getGridClass(displayOptions?.itemsPerRow)

  if (!clientTypes || clientTypes.length === 0) {
    return null
  }

  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <Tabs
          defaultValue={activeTab}
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="flex flex-wrap border-b border-gray-200 dark:border-gray-700 mb-8 w-full justify-start overflow-x-auto">
            {clientTypes.map((type) => (
              <TabsTrigger
                key={type.slug}
                value={type.slug}
                className="px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap data-[state=active]:border-[#00a0e4] data-[state=active]:text-[#00a0e4]"
              >
                {type.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {clientTypes.map((type) => (
            <TabsContent key={type.slug} value={type.slug}>
              <div className="space-y-12">
                {type.projects?.map((project, projectIndex) => (
                  <div key={projectIndex} className="space-y-4">
                    {/* Project Header */}
                    <div className="text-center space-y-2">
                      {displayOptions?.showProjectTitle !== false && (
                        <h3 className="text-2xl font-bold">{project.projectTitle}</h3>
                      )}
                      {displayOptions?.showClientName !== false && (
                        <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
                          {project.clientName}
                        </p>
                      )}
                      {project.projectDescription && (
                        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                          {project.projectDescription}
                        </p>
                      )}
                    </div>
                    
                    {/* Project Photos Gallery */}
                    {project.projectPhotos && project.projectPhotos.length > 0 && (
                      <div className={`grid ${gridClass} gap-4`}>
                        {project.projectPhotos.map((photoItem, photoIndex) => (
                          <div key={photoIndex} className="group">
                            <div className="relative aspect-[4/3] w-full bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                              {photoItem.photo && (
                                <Image
                                  src={typeof photoItem.photo === 'string' 
                                    ? photoItem.photo 
                                    : photoItem.photo?.url || ''}
                                  alt={photoItem.caption || project.projectTitle || `Project photo ${photoIndex + 1} for ${project.clientName}`}
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              )}
                            </div>
                            {photoItem.caption && (
                              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                                {photoItem.caption}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
