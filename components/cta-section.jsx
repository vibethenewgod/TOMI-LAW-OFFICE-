import Link from "next/link"
import { Poppins } from "next/font/google"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export default function CTASection() {
  return (
    <section className="py-10 md:py-14 bg-[#d49e17]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className={`${poppins.className} text-2xl md:text-3xl lg:text-4xl text-white mb-3 font-semibold`}>
          Get the insights that matter
        </h2>
        <p className={`${poppins.className} text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto`}>
          Keep up to date with events and updates, now and in the future.
        </p>
        <Link
          href="#contact"
          className={`${poppins.className} inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-base font-medium uppercase tracking-wide transition-all duration-300 border border-white/30 hover:border-white/50 rounded-sm`}
        >
          Subscribe
        </Link>
      </div>
    </section>
  )
}
