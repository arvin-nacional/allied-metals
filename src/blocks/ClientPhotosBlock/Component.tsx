'use client'

import React, { useState, useEffect, Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'

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

// Component that uses search params - needs to be wrapped in Suspense
const ClientPhotosBlockContent: React.FC<ClientPhotosBlockType> = ({
  heading,
  description,
  clientTypes = [],
  displayOptions,
}) => {
  const [activeTab, setActiveTab] = useState<string>('')
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (clientTypes && clientTypes.length > 0) {
      // Check for category query parameter first
      const categoryParam = searchParams.get('category')
      
      if (categoryParam) {
        // Find if the category exists in clientTypes
        const matchingType = clientTypes.find((type) => type.slug === categoryParam)
        if (matchingType) {
          setActiveTab(categoryParam)
          return
        }
      }
      
      // Fallback to default tab if no valid category param
      const defaultType = clientTypes.find((type) => type.isDefault) || clientTypes[0]
      if (defaultType) {
        setActiveTab(defaultType.slug)
      }
    }
  }, [clientTypes, searchParams])

  // Function to handle tab changes and update URL
  const handleTabChange = (slug: string) => {
    setActiveTab(slug)
    
    // Update URL with query parameter
    const params = new URLSearchParams(searchParams.toString())
    params.set('category', slug)
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

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

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {clientTypes.map((type) => (
            <button
              key={type.slug}
              onClick={() => handleTabChange(type.slug)}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === type.slug
                  ? 'bg-[#00a0e4] text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-[#00a0e4] hover:text-[#00a0e4] hover:shadow-md'
              }`}
            >
              {type.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {clientTypes.map((type) => (
          <div
            key={type.slug}
            className={activeTab === type.slug ? 'block' : 'hidden'}
          >
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
                                  src={
                                    typeof photoItem.photo === 'string'
                                      ? photoItem.photo
                                      : photoItem.photo?.url || ''
                                  }
                                  alt={
                                    photoItem.caption ||
                                    project.projectTitle ||
                                    `Project photo ${photoIndex + 1} for ${project.clientName}`
                                  }
                                  fill
                                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                              )}
                            </div>
                            {photoItem.caption && (
                              <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 text-center">
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
          </div>
        ))}
      </div>
    </section>
  )
}

// Fallback component for loading state
const ClientPhotosBlockFallback: React.FC<ClientPhotosBlockType> = ({
  heading,
  description,
  clientTypes = [],
  displayOptions,
}) => {
  const bgClass = getBackgroundClass(displayOptions?.backgroundColor)
  const defaultType = clientTypes?.find((type) => type.isDefault) || clientTypes?.[0]
  
  return (
    <section className={`py-16 ${bgClass}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>
        
        {/* Loading state for tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {clientTypes?.map((type) => (
            <div
              key={type.slug}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                type.slug === defaultType?.slug
                  ? 'bg-[#00a0e4] text-white shadow-lg transform scale-105'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600'
              }`}
            >
              {type.name}
            </div>
          ))}
        </div>
        
        {/* Loading indicator */}
        <div className="flex justify-center">
          <div className="animate-pulse text-gray-500">Loading...</div>
        </div>
      </div>
    </section>
  )
}

// Main exported component with Suspense boundary
export const ClientPhotosBlock: React.FC<ClientPhotosBlockType> = (props) => {
  return (
    <Suspense fallback={<ClientPhotosBlockFallback {...props} />}>
      <ClientPhotosBlockContent {...props} />
    </Suspense>
  )
}
