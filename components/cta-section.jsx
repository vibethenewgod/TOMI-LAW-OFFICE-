import Link from "next/link"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] })
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["600", "700"] })

export default function CTASection() {
  return (
    <section className="py-10 md:py-14 bg-[#d49e17]">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center">
        <h2 className={`${playfair.className} text-2xl md:text-3xl lg:text-4xl text-white mb-3`}>
          Get the insights that matter
        </h2>
        <p className={`${inter.className} text-base md:text-lg text-white/90 mb-6 max-w-xl mx-auto`}>
          Keep up to date with events and updates, now and in the future.
        </p>
        <Link
          href="#contact"
          className={`${inter.className} inline-block bg-white/10 hover:bg-white/20 text-white px-6 py-3 text-base font-medium uppercase tracking-wide transition-all duration-300 border border-white/30 hover:border-white/50 rounded-sm`}
        >
          Subscribe
        </Link>
      </div>
    </section>
  )
}
