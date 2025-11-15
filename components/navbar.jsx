"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Navigation item component
 * @param {Object} props
 * @param {string} props.title - The title of the navigation item
 * @param {string} [props.href="#"] - The link URL
 * @param {boolean} [props.isActive=false] - Whether the item is active
 * @param {string} [props.className] - Additional classes for styling
 */
const NavItem = ({ title, href = "#", isActive = false, className }) => {
  return (
    <div className="relative">
      <Link
        href={href}
        className={cn(
          "flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors",
          isActive && "text-gray-900",
          className,
        )}
      >
        <span>{title}</span>
      </Link>
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="w-full bg-gray-900 text-gray-100 text-xs md:text-sm">
        <div className="container mx-auto h-10 flex items-center justify-between px-4">
          <span className="hidden md:inline">24 x 7 Assistance</span>
          <div className="ml-auto flex items-center gap-4">
            <Link href="tel:13068734521" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Tisdale:</span>
              <span>306-873-4521</span>
            </Link>
            <span className="hidden md:inline text-gray-500">|</span>
            <Link href="tel:13068624511" className="flex items-center gap-2 hover:text-white">
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Nipawin:</span>
              <span>306-862-4511</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="w-full bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-20 px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={50} height={50} />
                <div className="text-gray-900 text-xl md:text-2xl font-semibold tracking-wide ml-2">
                  TOMI LAW OFFICE
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center">
                <NavItem title="Home" href="/" />
                <NavItem title="Practice Areas" href="#practice-areas" />
                <NavItem title="Attorney" href="#attorney" />
                <NavItem title="Success Cases" href="#success-cases" />
                <NavItem title="Locations" href="#locations" />
              </div>

              <div className="mx-6 h-5 border-l border-gray-300" />

              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-sm bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Free Consultation
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-900"
                aria-label="Toggle menu"
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-1">
              <NavItem title="Home" href="/" className="px-0 py-2" />
              <NavItem title="Practice Areas" href="#practice-areas" className="px-0 py-2" />
              <NavItem title="Attorney" href="#attorney" className="px-0 py-2" />
              <NavItem title="Success Cases" href="#success-cases" className="px-0 py-2" />
              <NavItem title="Locations" href="#locations" className="px-0 py-2" />
              <div className="pt-2">
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center rounded-sm bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                >
                  Free Consultation
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

