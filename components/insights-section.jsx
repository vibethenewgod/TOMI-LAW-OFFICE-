import Link from "next/link"
import Image from "next/image"

export default function InsightsSection() {
  const insights = [
    {
      id: 1,
      image: "/images/insight-1.jpg",
      date: "November 4, 2025",
      title: "Nigeria's Exit from the ECOWAS List: Implications for Businesses and the Financial System",
      description: "Explore the implications of Nigeria's recent exit from ECOWAS and its impact on businesses and the financial system.",
      link: "#"
    },
    {
      id: 2,
      image: "/images/insight-2.jpg",
      date: "October 27, 2025",
      title: "The Petroleum Industry Act (Amended) Bill, 2025: Status, Reform Themes, and Stakeholder Implications",
      description: "An in-depth analysis of the Petroleum Industry Act amendments and their implications for stakeholders.",
      link: "#"
    },
    {
      id: 3,
      image: "/images/insight-3.jpg",
      date: "October 23, 2025",
      title: "Kelechi Ibe - 2026 ITR World Tax Rankings",
      description: "Discover how Kelechi Ibe has been recognized in the 2026 ITR World Tax Rankings as a rising star.",
      link: "#"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0099D8] mb-4">
            Latest Insights
          </h2>
          <div className="w-20 h-1 bg-[#0099D8] mx-auto"></div>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {insights.map((insight) => (
            <div key={insight.id} className="flex flex-col">
              {/* Image Container */}
              <div className="relative w-full h-48 mb-6 overflow-hidden rounded-lg bg-gray-200">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="flex-grow flex flex-col">
                <p className="text-sm text-gray-500 mb-2">{insight.date}</p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mb-4 flex-grow">
                  {insight.description}
                </p>

                {/* Read More Link */}
                <Link
                  href={insight.link}
                  className="text-[#0099D8] font-medium hover:text-[#007BAD] transition-colors inline-flex items-center gap-2 mt-auto"
                >
                  Read more <span className="text-lg">›</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-8 border-t border-gray-200">
          <Link
            href="#"
            className="text-center font-medium text-gray-800 hover:text-[#0099D8] transition-colors inline-flex items-center gap-2"
          >
            CLICK HERE FOR MORE <span className="text-lg">›</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
