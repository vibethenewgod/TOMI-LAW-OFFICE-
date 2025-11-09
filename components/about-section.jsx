import Image from "next/image"
import Link from "next/link"

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="relative w-full bg-[#002548] text-white overflow-hidden about-section">
          {/* Decorative corner elements */}
          <div className="absolute top-0 left-0 w-20 h-20">
            <div className="absolute top-0 left-0 w-full h-1 bg-[#d4a017]"></div>
            <div className="absolute top-0 left-0 h-full w-1 bg-[#d4a017]"></div>
          </div>
          <div className="absolute bottom-0 right-0 w-20 h-20">
            <div className="absolute bottom-0 right-0 w-full h-1 bg-[#d4a017]"></div>
            <div className="absolute bottom-0 right-0 h-full w-1 bg-[#d4a017]"></div>
          </div>

          <div className="p-10 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 md:gap-0 items-center">
              {/* Left column */}
              <div className="space-y-6 pr-0 md:pr-10">
                <div className="relative">
                  <Image
                    src="/images/about-team.jpg"
                    alt="Tomi Law Office team members"
                    width={400}
                    height={250}
                    className="rounded-md"
                  />
                </div>

                <h2 className="text-3xl font-medium">About Us</h2>

                <p className="text-gray-300 font-normal">
                  Tomi Law Office is a general law firm offering a broad range of legal services to our clients. Tomi
                  Law Office was established in Tisdale in February 2018 and opened a second office in Nipawin in March
                  2018.
                </p>

                <p className="text-gray-300 font-normal">
                  At Tomi Law Office, our goal is to provide efficient and affordable legal services. We take the time
                  to listen to our clients, understand their needs and offer practical solutions to their individual or
                  corporate needs. We take pride in our ability to achieve the best possible result for our clients.
                </p>

                <p className="font-normal">
                  Tomi Law Office is committed to serving our community with integrity and excellence.
                </p>

                <Link
                  href="#learn-more"
                  className="inline-block bg-[#d4a017] text-white px-5 py-2 text-sm uppercase tracking-wider hover:bg-[#c09015] transition-colors font-normal"
                >
                  Learn more about our firm
                </Link>
              </div>

              {/* Center divider */}
              <div className="hidden md:block absolute top-12 bottom-12 left-1/2 w-px bg-[#d4a017]"></div>

              {/* Right column */}
              <div className="space-y-8 md:pl-10">
                {/* Team culture */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-full h-full text-[#d4a017]"
                      >
                        <path d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Our Team</h3>
                    <p className="text-gray-300 font-normal">
                      Led by Tomi Olutunfese LL.B(Hons), B.L., our team includes experienced paralegals and legal
                      assistants dedicated to providing exceptional service to our clients.
                    </p>
                  </div>
                </div>

                {/* Client success */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-full h-full text-[#d4a017]"
                      >
                        <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Client Focus</h3>
                    <p className="text-gray-300 font-normal">
                      We take the time to listen to our clients, understand their needs and offer practical solutions to
                      their individual or corporate needs.
                    </p>
                  </div>
                </div>

                {/* Career excellence */}
                <div className="flex gap-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="w-full h-full text-[#d4a017]"
                      >
                        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-normal mb-2">Expertise</h3>
                    <p className="text-gray-300 font-normal">
                      With expertise in family law, corporate and commercial law, real estate, wills & estates, labour
                      law, and municipal law, we provide comprehensive legal services to meet your needs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

