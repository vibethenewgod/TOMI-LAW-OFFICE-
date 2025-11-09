import Link from "next/link"

export default function HeroSimple() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center relative text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl text-center px-6 py-24">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">Tomi Law Office</h1>
        <p className="mt-4 text-lg md:text-xl text-white/90 font-medium">Efficient. Practical. Local.</p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="#contact"
            className="inline-block bg-white text-[#002548] px-6 py-3 rounded font-semibold"
          >
            Contact Us
          </Link>
          <a href="tel:306-873-4521" className="inline-block border border-white/30 text-white px-6 py-3 rounded font-medium">
            Call: 306-873-4521
          </a>
        </div>
      </div>
    </section>
  )
}
