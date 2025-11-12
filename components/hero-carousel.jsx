"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const slides = [
  {
    image: "/images/hero-1.jpeg",
    title: "Welcome to Tomi Law Office",
    description: "Efficient. Practical. Local.",
    longDescription: "At Tomi Law Office, we provide practical, efficient, and affordable legal services tailored to your personal and business needs. From family and corporate law to real estate and estate planning, our experienced team is committed to achieving the best possible results for every client.",
    buttons: [
      { text: "Learn More", href: "#about", primary: true }
    ]
  },
  {
    image: "/images/hero-2.jpeg",
    title: "Trusted Legal Solutions, Rooted in Integrity",
    description: "Your Legal Partner in Life and Business",
    longDescription: "Tomi Law Office has been serving clients across Saskatchewan with personalized, solution-driven legal support. We take the time to understand your goals, protect your interests, and guide you toward lasting results.",
    buttons: [
      { text: "Learn More", href: "#about", primary: true }
    ]
  },
  {
    image: "/images/hero-3.jpg",
    title: "Experience. Dedication. Results.",
    description: "Comprehensive Legal Services Across Saskatchewan",
    longDescription: "Tomi Law Office offers comprehensive legal services across Family, Corporate, Real Estate, and Estate Law. With offices in Tisdale and Nipawin, we stand by individuals, businesses, and communities—every step of the way.",
    buttons: [
      { text: "Learn More", href: "#about", primary: true }
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
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(interval)
  }, [nextSlide])

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out",
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
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          {/* Content - Left aligned */}
          <div className="absolute inset-0 z-20 flex items-center">
              <div className="pl-6 md:pl-12 lg:pl-32">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight max-w-2xl">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-white/95 mb-10 leading-relaxed font-light max-w-2xl">
                  {slide.longDescription}
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  {slide.buttons.map((button, btnIndex) => (
                    <Link
                      key={btnIndex}
                      href={button.href}
                      className={cn(
                        "px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base",
                        button.primary
                          ? "bg-[#0099D8] text-white hover:bg-[#007BAD]"
                          : "border border-white text-white hover:bg-white hover:text-black"
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
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-30 p-2 text-white/70 hover:text-white transition-colors"
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
                setTimeout(() => setIsTransitioning(false), 700)
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