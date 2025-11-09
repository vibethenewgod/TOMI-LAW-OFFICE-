import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function CommitmentSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex items-center mb-10">
          <div className="w-1 h-10 bg-[#d4a017] mr-4"></div>
          <h2 className="text-3xl font-medium text-[#002548] uppercase">OUR EXPERTISE</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Corporate and Commercial Law */}
          <div className="bg-white shadow-sm">
            <div className="h-48 relative overflow-hidden">
              <Image src="/images/commitment-1.jpg" alt="Corporate and Commercial Law" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-normal text-[#002548] mb-3">Corporate and Commercial Law</h3>
              <p className="text-gray-600 mb-4 font-normal">
                We provide a full range of services to sole proprietors, partnerships, corporations, non-profit
                corporations and other related organizations. These services include incorporation and dissolution of
                companies, corporate reorganization and more.
              </p>
              <Link
                href="#corporate-law"
                className="inline-flex items-center text-[#d4a017] font-normal hover:underline"
              >
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Labour Law */}
          <div className="bg-white shadow-sm">
            <div className="h-48 relative overflow-hidden">
              <Image src="/images/commitment-2.jpg" alt="Labour Law" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-normal text-[#002548] mb-3">Labour Law</h3>
              <p className="text-gray-600 mb-4 font-normal">
                We provide guidance in recruiting and hiring practices and policies, discipline and termination of
                employment, compliance with employment and labour standards legislation, workplace harassment,
                employment contracts and dismissal litigation.
              </p>
              <Link href="#labour-law" className="inline-flex items-center text-[#d4a017] font-normal hover:underline">
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Municipal Law */}
          <div className="bg-white shadow-sm">
            <div className="h-48 relative overflow-hidden">
              <Image src="/images/commitment-3.jpg" alt="Municipal Law" fill className="object-cover" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-normal text-[#002548] mb-3">Municipal Law</h3>
              <p className="text-gray-600 mb-4 font-normal">
                Our experience covers the range of legal issues a municipality may expect to face on a daily basis
                including planning, development, enforcement and employment matters as well as longer term initiatives.
              </p>
              <Link
                href="#municipal-law"
                className="inline-flex items-center text-[#d4a017] font-normal hover:underline"
              >
                LEARN MORE <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="#all-expertise"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#002548] text-white font-normal hover:bg-[#003a6b] transition-colors"
          >
            View All Areas of Expertise
          </Link>
        </div>
      </div>
    </section>
  )
}

