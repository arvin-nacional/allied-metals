'use client'

import React, { useState, useEffect } from 'react'

import type { ClientsBlock as ClientsBlockType } from '@/payload-types'

// Define types for the component
type Client = {
  name: string
}

type ClientGroup = {
  title: string
  clients: Client[]
}

type ClientCategory = {
  name: string
  slug: string
  isDefault: boolean
  clientGroups: ClientGroup[]
}

export const ClientsBlock: React.FC<ClientsBlockType> = ({
  heading,
  description,
  clientCategories,
}) => {
  const [activeTab, setActiveTab] = useState<string>('')

  useEffect(() => {
    // Set the default active tab on initial render
    if (clientCategories && clientCategories.length > 0) {
      const defaultCategory = clientCategories.find((cat) => cat.isDefault) || clientCategories[0]
      if (defaultCategory) {
        setActiveTab(defaultCategory.slug)
      }
    }
  }, [clientCategories])

  // Show content based on active tab
  const showTab = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <section className="py-20 dark:bg-[#081632]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{heading}</h2>
          <div className="w-20 h-1 bg-[#00a0e4] mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        {/* Tabs */}
        {clientCategories && clientCategories.length > 0 && (
          <>
            <div className="mb-8">
              <div className="flex flex-wrap border-b border-blue-900 dark:border-blue-500 overflow-x-auto">
                {clientCategories.map((category, index) => (
                  <button
                    key={index}
                    className={`px-6 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
                      activeTab === category.slug
                        ? 'border-[#00a0e4] text-[#00a0e4]'
                        : 'border-transparent hover:border-gray-500 text-gray-600 dark:text-gray-300 dark:hover:text-white hover:text-gray-900'
                    }`}
                    onClick={() => showTab(category.slug)}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-blue-50 dark:bg-[#0c2252] rounded-lg p-6 md:p-8">
              {clientCategories.map((category, index) => (
                <div key={index} className={activeTab === category.slug ? 'block' : 'hidden'}>
                  <h3 className="text-2xl font-bold mb-6 border-l-4 border-[#00a0e4] pl-4">
                    {category.name}
                  </h3>
                  <div className="grid md:grid-cols-3 gap-8">
                    {category.clientGroups?.map((group, groupIndex) => (
                      <div key={groupIndex}>
                        <h4 className="text-xl font-semibold mb-4 text-[#00a0e4]">{group.title}</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                          {group.clients?.map((client, clientIndex) => (
                            <li key={clientIndex}>• {client.name}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
