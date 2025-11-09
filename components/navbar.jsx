"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Navigation item component
 * @param {Object} props
 * @param {string} props.title - The title of the navigation item
 * @param {string} [props.href="#"] - The link URL
 * @param {boolean} [props.hasDropdown=false] - Whether the item has a dropdown
 * @param {boolean} [props.isActive=false] - Whether the item is active
 */
const NavItem = ({ title, href = "#", hasDropdown = false, isActive = false }) => {
  return (
    <div className="relative group">
      <Link
        href={href}
        className={cn(
          "flex items-center px-3 py-2 text-white hover:text-gray-200 transition-colors text-sm font-normal",
          isActive && "text-white",
        )}
      >
        <span>{title}</span>
        {hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
      </Link>
      {hasDropdown && (
        <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg hidden group-hover:block z-50">
          <div className="py-1">
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-normal">
              Submenu Item 1
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-normal">
              Submenu Item 2
            </Link>
            <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-normal">
              Submenu Item 3
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full bg-[#002548]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={50} height={50} />
              <div className="text-white text-xl md:text-2xl font-normal tracking-wider ml-2">TOMI LAW OFFICE</div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <NavItem title="Home" href="/" />
            <NavItem title="About Us" hasDropdown={true} />
            <NavItem title="Practice Areas" hasDropdown={true} />

            <div className="mx-6 h-4 border-l border-gray-500"></div>

            <NavItem title="Our Team" />
            <NavItem title="Contact" />

            <button className="ml-2 p-2 text-white hover:text-gray-200">
              <Search className="h-5 w-5" />
            </button>
          </nav>

          {/* Mobile menu button - Only hamburger icon */}
          <div className="lg:hidden flex items-center space-x-4">
            <button className="text-white">
              <Search className="h-5 w-5" />
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#002548] border-t border-gray-700">
          <div className="container mx-auto py-2">
            <nav className="flex flex-col space-y-2">
              <NavItem title="Home" href="/" />
              <NavItem title="About Us" />
              <NavItem title="Practice Areas" />
              <NavItem title="Our Team" />
              <NavItem title="Contact" />
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

