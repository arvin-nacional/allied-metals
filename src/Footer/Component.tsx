import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

import type { Footer } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  let footerData: Footer | null = null

  try {
    footerData = await getCachedGlobal('footer', 1)()
  } catch (error) {
    console.error('Error fetching footer data:', error)
  }

  const navItems = footerData?.navItems || []
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a1a3a] py-12 border-t border-blue-900">
      <div className="container mx-auto px-4">
        <div className="flex max-sm:flex-col sm:flex-row justify-between mb-8 gap-12">
          {/* Company Info */}
          <div className="md:w-[25%]">
            <Logo />
            <p className="text-gray-300 mb-4 mt-4">
              Premium commercial kitchen solutions for the hospitality industry since 1965.
            </p>
            <p className="text-gray-300">
              We design, fabricate, and install high-quality stainless steel equipment for
              commercial kitchens.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {navItems.map(({ link }, i) => (
                <li key={i}>
                  <CMSLink {...link} className="hover:text-[#00a0e4] transition-colors" />
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#00a0e4] mt-0.5 mr-2" />
                <span>
                  <strong>Main Office:</strong>
                  <br />
                  2000 Gov Halili Highway Muzon
                  <br />
                  San Jose Del Monte City, Bulacan 3023
                </span>
              </li>
              <li className="flex items-start mt-3">
                <MapPin className="h-5 w-5 text-[#00a0e4] mt-0.5 mr-2" />
                <span>
                  <strong>Executive Office:</strong>
                  <br />
                  545 EDSA Bona Commercial Building, Cubao,
                  <br />
                  Quezon City 1111
                </span>
              </li>
              <li className="flex items-start mt-3">
                <Phone className="h-5 w-5 text-[#00a0e4] mt-0.5 mr-2" />
                <span>(+63 2) 8-721-1349 / 8-722-0984</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#00a0e4] mt-0.5 mr-2" />
                <span>info@alliedmetals.com.ph</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-blue-900 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} Allied Metals. All rights reserved.
            </p>
            {/* <ThemeSelector /> */}
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-400 hover:text-[#00a0e4] transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00a0e4] transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00a0e4] transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
