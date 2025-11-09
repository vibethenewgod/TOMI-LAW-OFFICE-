"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

/**
 * @typedef {Object} DropdownItem
 * @property {string} title - The title of the dropdown item
 * @property {string} href - The link for the dropdown item
 */

/**
 * Dropdown menu component
 * @param {Object} props
 * @param {string} props.title - The title of the dropdown
 * @param {DropdownItem[]} props.items - The items in the dropdown
 * @param {string} [props.className] - Additional CSS classes
 */
export default function DropdownMenu({ title, items, className }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn("flex items-center px-3 py-2 text-white hover:text-gray-200 transition-colors", className)}
      >
        <span>{title}</span>
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

