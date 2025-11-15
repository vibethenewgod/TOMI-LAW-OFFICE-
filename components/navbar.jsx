"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search, Menu, Phone, Mail, Clock } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * Navigation item component
 * @param {Object} props
 * @param {string} props.title 
 * @param {string} [props.href="#"] 
 * @param {boolean} [props.hasDropdown=false] 
 * @param {boolean} [props.isActive=false] 
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

    </div>
  )
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="w-full">
      {/* Top Bar - Contact Info */}
      <div className="bg-[#002548] text-white py-1 md:py-2 block">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-end gap-4 md:gap-6">
            <div className="flex items-center gap-1.5">
              <Phone className="h-4 w-4 text-white" />
              <span className="hidden md:inline text-xs text-white/70 uppercase">Call</span>
              <a 
                href="tel:+13068734521" 
                className="text-xs md:text-sm font-medium text-white hover:text-[#0099D8] transition-colors"
              >
                306-873-4521
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-4 w-4 text-white" />
              <span className="hidden md:inline text-xs text-white/70 uppercase">Email</span>
              <a href="mailto:info@tomilawoffice.ca" className="text-xs md:text-sm font-medium text-white hover:text-[#0099D8] transition-colors">
                <span className="hidden md:inline">info@tomilawoffice.ca</span>
                <span className="md:hidden">Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between h-16 md:h-20 px-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={50} height={50} />
                <div className="text-[#002548] text-xl md:text-2xl font-bold tracking-wide ml-3">TOMI LAW OFFICE</div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium text-base">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium text-base">
                About Us
              </Link>
              <Link href="#practice" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium text-base">
                Practice Areas
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium text-base">
                Our Team
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium text-base">
                Contact
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#002548] p-2" aria-label="Toggle menu">
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto py-4 px-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium py-1.5">
                Home
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium py-1.5">
                About Us
              </Link>
              <Link href="#practice" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium py-1.5">
                Practice Areas
              </Link>
              <Link href="#team" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium py-1.5">
                Our Team
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-[#0099D8] transition-colors font-medium py-1.5">
                Contact
              </Link>
              {/* Contact info removed here to keep mobile menu compact; it's now in the top bar on mobile */}
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
