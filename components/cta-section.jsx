import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-20 bg-[#000]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">
          Get the insights that matter
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Keep up to date with events and updates, now and in the future.
        </p>
        <Link
          href="#contact"
          className="inline-block bg-white/10 hover:bg-white/20 text-white px-10 py-4 text-lg font-medium uppercase tracking-wide transition-all duration-300 border border-white/30 hover:border-white/50"
        >
          SUBSCRIBE
        </Link>
      </div>
    </section>
  )
}
