import Navbar from "@/components/navbar"
import HeroCarousel from "@/components/hero-carousel"
import FeaturedContent from "@/components/featured-content"
import AboutSection from "@/components/about-section"
import CommitmentSection from "@/components/commitment-section"
import InsightsSection from "@/components/insights-section"
import CTASection from "@/components/cta-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import AOSInitializer from "@/components/AOSInitializer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <AOSInitializer />
      <div className="bg-[#002548]">
        <Navbar />
      </div>
      <HeroCarousel />
      <CommitmentSection />
      <AboutSection />
      <InsightsSection />
      <CTASection />
      {/* <FeaturedContent /> */}
      {/* <ContactSection /> */}
      <Footer />
    </main>
  )
}
