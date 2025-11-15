"use client"

import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function InsightsSection() {
  const containerRef = useRef(null)

  const next = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" })
    }
  }

  const prev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" })
    }
  }

  const insights = [
    {
      id: 1,
      image: "/images/insight-canada-1.jpg",
      date: "November 4, 2025",
      title: "Updates to Saskatchewan Real Estate Rules: What Buyers Should Know",
      description:
        "A summary of recent regulatory changes affecting property transactions in Saskatchewan and practical tips for buyers and sellers.",
      link: "#",
    },
    {
      id: 2,
      image: "/images/insight-canada-2.jpg",
      date: "October 27, 2025",
      title: "Estate Planning in Canada: New Considerations for 2025",
      description:
        "Key updates to estate planning practice across Canada and how they may affect wills, powers of attorney, and probate timelines.",
      link: "#",
    },
    {
      id: 3,
      image: "/images/insight-canada-3.jpg",
      date: "October 23, 2025",
      title: "Employment Law: Recent Case Law in Canadian Courts",
      description:
        "Highlights from recent decisions that impact employment agreements, termination, and workplace policies in Canada.",
      link: "#",
    },
    {
      id: 4,
      image: "/images/insight-canada-4.jpg",
      date: "November 4, 2025",
      title: "Immigration Updates: Changes to Canada's Work Permit Programs",
      description:
        "A look at the latest immigration policy adjustments affecting temporary foreign workers and employer compliance requirements.",
      link: "#",
    },
    {
      id: 5,
      image: "/images/insight-canada-5.jpg",
      date: "November 9, 2025",
      title: "Corporate Governance: Strengthening Compliance Frameworks",
      description:
        "Practical guidance for Canadian corporations on adapting to new transparency and reporting obligations under federal law.",
      link: "#",
    },
    {
      id: 6,
      image: "/images/insight-canada-6.jpg",
      date: "November 13, 2025",
      title: "Real Estate Trends: Navigating Development Regulations",
      description:
        "Insights into municipal planning updates, zoning restrictions, and how developers can prepare for 2026 regulatory shifts.",
      link: "#",
    },
    {
      id: 7,
      image: "/images/insight-canada-7.jpg",
      date: "November 10, 2025",
      title: "Tax Updates: How New Rules Affect Canadian Businesses",
      description:
        "An overview of fiscal changes impacting corporate tax obligations and financial reporting for small and large enterprises.",
      link: "#",
    },
    {
      id: 8,
      image: "/images/insight-canada-8.jpg",
      date: "November 12, 2025",
      title: "Family Law: Key Developments in Child Custody and Support",
      description:
        "Recent family court rulings and legislative changes shaping custody arrangements across Canadian provinces.",
      link: "#",
    },
  ]

  return (
    <section className="py-16 bg-gray-50" data-aos="fade-up">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">

        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0099D8] mb-3">Latest Insights</h2>
          <div className="w-24 h-1 bg-[#0099D8] mx-auto"></div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div
            ref={containerRef}
            className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {insights.map((insight) => (
              <Link
                key={insight.id}
                href={insight.link}
                className="snap-center flex-shrink-0 w-[85%] sm:w-[45%] md:w-[30%] lg:w-[28%] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
              >
                <div className="relative w-full h-40 md:h-44">
                  <Image
                    src={insight.image}
                    alt={insight.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4 flex flex-col h-full">
                  <p className="text-xs font-semibold text-[#0099D8] mb-1 uppercase">{insight.date}</p>

                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2 group-hover:text-[#0099D8] transition-colors">
                    {insight.title}
                  </h3>

                  <p className="text-gray-600 text-xs md:text-sm mb-3 line-clamp-3">
                    {insight.description}
                  </p>

                  <span className="text-[#0099D8] text-sm font-semibold flex items-center gap-1 mt-auto">
                    Read more <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prev}
            className="absolute left-2 md:left-4 bottom-[-60px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <ChevronLeft className="text-[#0099D8]" strokeWidth={3} />
          </button>

          <button
            onClick={next}
            className="absolute right-2 md:right-4 bottom-[-60px] md:bottom-auto md:top-1/2 md:-translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md hover:scale-110 transition"
          >
            <ChevronRight className="text-[#0099D8]" strokeWidth={3} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-16">
          <Link
            href="#"
            className="inline-flex items-center gap-3 text-sm md:text-base font-medium text-gray-800 hover:text-[#0099D8] border-t border-gray-200 pt-6"
          >
            CLICK HERE FOR MORE <span className="text-lg">›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
