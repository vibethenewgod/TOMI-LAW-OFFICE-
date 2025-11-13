import Link from "next/link"
import Image from "next/image"

export default function InsightsSection() {
  // Canada-focused sample articles — replace image paths with your assets
  const insights = [
    {
      id: 1,
      image: "/images/insight-canada-1.jpg",
      date: "November 4, 2025",
      title: "Updates to Saskatchewan Real Estate Rules: What Buyers Should Know",
      description:
        "A summary of recent regulatory changes affecting property transactions in Saskatchewan and practical tips for buyers and sellers.",
      link: "#"
    },
    {
      id: 2,
      image: "/images/insight-canada-2.jpg",
      date: "October 27, 2025",
      title: "Estate Planning in Canada: New Considerations for 2025",
      description:
        "Key updates to estate planning practice across Canada and how they may affect wills, powers of attorney, and probate timelines.",
      link: "#"
    },
    {
      id: 3,
      image: "/images/insight-canada-3.jpg",
      date: "October 23, 2025",
      title: "Employment Law: Recent Case Law in Canadian Courts",
      description:
        "Highlights from recent decisions that impact employment agreements, termination, and workplace policies in Canada.",
      link: "#"
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-[#0099D8] mb-3">Latest Insights</h2>
          <div className="w-24 h-1 bg-[#0099D8] mx-auto"></div>
        </div>

        {/* Insights Grid - image left, content right on desktop */}
        <div className="grid grid-cols-1 gap-10">
          {insights.map((insight) => (
            <article
              key={insight.id}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8"
            >
              <div className="flex-shrink-0 w-full md:w-56 h-56 rounded overflow-hidden bg-gray-100">
                <Image
                  src={insight.image}
                  alt={insight.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="flex-1">
                <p className="text-sm text-gray-500 mb-2">{insight.date}</p>
                <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                  {insight.title}
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-4">
                  {insight.description}
                </p>

                <Link
                  href={insight.link}
                  className="inline-block text-[#0099D8] font-medium hover:text-[#007BAD] border-b border-transparent hover:border-[#0099D8] pb-1"
                >
                  Read more <span className="text-base">›</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center pt-10">
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
