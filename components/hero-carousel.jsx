"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-1.jpeg",
    title: "Trusted Legal Solutions, Rooted in Integrity",
    description: "At Tomi Law Office, we provide practical, efficient, and affordable legal services tailored to your personal and business needs. From family and corporate law to real estate and estate planning, our experienced team is committed to achieving the best possible results for every client.",
    buttons: [
      { text: "Book a Consultation", href: "#contact", primary: true },
      { text: "Learn More About Us", href: "#about", primary: false }
    ]
  },
  {
    image: "/images/hero-2.jpeg",
    title: "Your Legal Partner in Life and Business",
    description: "Tomi Law Office has been serving clients across Saskatchewan with personalized, solution-driven legal support. We take the time to understand your goals, protect your interests, and guide you toward lasting results.",
    buttons: [
      { text: "Meet Our Team", href: "#team", primary: true },
      { text: "Get in Touch", href: "#contact", primary: false }
    ]
  },
  {
    image: "/images/hero-3.jpg",
    title: "Experience. Dedication. Results.",
    description: "Tomi Law Office offers comprehensive legal services across Family, Corporate, Real Estate, and Estate Law. With offices in Tisdale and Nipawin, we stand by individuals, businesses, and communities—every step of the way.",
    buttons: [
      { text: "Explore Our Services", href: "#services", primary: true },
      { text: "Contact Us", href: "#contact", primary: false }
    ]
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-500",
            currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0",
          )}
        >
          {/* Image with overlay */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-[#002548] bg-opacity-50"></div>
          </div>

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="container mx-auto px-4 md:px-8 text-center">
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl mx-auto leading-tight">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white/90 mb-8 max-w-3xl mx-auto font-medium leading-relaxed">
                {slide.description}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {slide.buttons.map((button, btnIndex) => (
                  <Link
                    key={btnIndex}
                    href={button.href}
                    className={cn(
                      "px-6 py-3 text-sm uppercase tracking-wider font-semibold transition-colors rounded-sm w-full sm:w-auto",
                      button.primary
                        ? "bg-white text-[#002548] hover:bg-white/90"
                        : "border border-white text-white hover:bg-white hover:text-[#002548]"
                    )}
                  >
                    {button.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true)
                setCurrentSlide(index)
                setTimeout(() => setIsTransitioning(false), 500)
              }
            }}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              currentSlide === index ? "bg-white w-8" : "bg-white/50 hover:bg-white/70",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}