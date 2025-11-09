import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

/**
 * @typedef {Object} FeaturedItemProps
 * @property {string} title - The title of the featured item
 * @property {string} description - The description of the featured item
 * @property {string} link - The link URL
 * @property {string} linkText - The text for the link
 * @property {string} image - The image URL
 */

/** @type {FeaturedItemProps[]} */
const featuredItems = [
  {
    title: "Estate Planning",
    description:
      "We provide assistance with wills, powers of attorney, health care directives, and family trusts to protect your legacy.",
    link: "#estate-planning",
    linkText: "Learn More",
    image: "/images/estate-planning.jpg",
  },
  {
    title: "Real Estate",
    description:
      "We represent vendors, purchasers, landlords and tenants in residential and commercial property transactions.",
    link: "#real-estate",
    linkText: "Learn More",
    image: "/images/real-estate.jpg",
  },
  {
    title: "Family Law",
    description:
      "We handle divorce applications, child custody, support arrangements, and property division with compassion and expertise.",
    link: "#family-law",
    linkText: "Learn More",
    image: "/images/family-law.jpg",
  },
]

export default function FeaturedContent() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-medium text-[#002548] mb-12 text-center uppercase">
          OUR PRACTICE AREAS
        </h2>

        {/* Desktop view */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white p-8 shadow-sm border-t-2 border-[#d4a017]">
              <h3 className="text-xl font-normal text-[#002548] mb-4">{item.title}</h3>
              <p className="text-gray-600 mb-6 font-normal">{item.description}</p>
              <Link
                href={item.link}
                className="inline-flex items-center text-[#002548] font-normal hover:text-[#d4a017]"
              >
                {item.linkText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet view with images */}
        <div className="md:hidden space-y-6">
          {featuredItems.map((item, index) => (
            <div key={index} className="bg-white shadow-sm flex">
              <div className="w-1/3 relative">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <div className="w-2/3 p-4">
                <div className="text-[#002548] text-xs font-normal mb-1">PRACTICE AREA</div>
                <h3 className="text-sm font-normal text-[#002548] mb-2">{item.title}</h3>
                <Link href={item.link} className="text-sm text-[#002548] font-normal hover:text-[#d4a017]">
                  Read More
                </Link>
              </div>
            </div>
          ))}

          <div className="text-center mt-6">
            <Link
              href="#all-services"
              className="inline-block px-6 py-2 border border-[#002548] text-[#002548] font-normal text-sm hover:bg-[#002548] hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>

        {/* View More button - desktop only */}
        <div className="mt-10 text-center hidden md:block">
          <Link
            href="#all-services"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#002548] text-white font-normal hover:bg-[#003a6b] transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  )
}

