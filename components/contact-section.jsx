export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column - Contact Info */}
          <div>
            <h2 className="text-4xl font-medium text-[#002548] mb-6">Contact Us</h2>
            <p className="text-gray-700 mb-4 font-normal">
              Tomi Law Office is a general law firm offering a broad range of legal services to our clients. With
              offices in Tisdale and Nipawin, we're here to serve our local communities.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-xl font-medium text-[#002548] mb-2">Tisdale Office</h3>
                <p className="text-gray-700 font-normal">1106 101st Ave E</p>
                <p className="text-gray-700 font-normal">P.O. Box 1360</p>
                <p className="text-gray-700 font-normal">Tisdale SK S0E1T0</p>
                <p className="text-gray-700 font-normal mt-2">Phone: 306-873-4521</p>
                <p className="text-gray-700 font-normal">Fax: 306-873-5113</p>
                <p className="text-gray-700 font-normal mt-2">Hours of Operation:</p>
                <p className="text-gray-700 font-normal">Monday to Friday, 8:30am to 4:30pm</p>
              </div>

              <div>
                <h3 className="text-xl font-medium text-[#002548] mb-2">Nipawin Office</h3>
                <p className="text-gray-700 font-normal">201 1st Ave W</p>
                <p className="text-gray-700 font-normal">Nipawin SK S0E1E0</p>
                <p className="text-gray-700 font-normal mt-2">Phone: 306-862-4511</p>
                <p className="text-gray-700 font-normal mt-2">Hours of Operation:</p>
                <p className="text-gray-700 font-normal">Monday to Wednesday, 9:00am to 4:00pm</p>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-normal text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-normal text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-normal text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-normal text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-normal text-gray-700 mb-1">
                  Office Location
                </label>
                <select
                  id="location"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548] appearance-none bg-white"
                  required
                >
                  <option value="">Select One</option>
                  <option value="tisdale">Tisdale</option>
                  <option value="nipawin">Nipawin</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-normal text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-normal text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#002548]"
                  required
                ></textarea>
              </div>

              <div className="flex items-start">
                <div className="flex items-center h-5 mt-1">
                  <input type="checkbox" id="consent" className="w-4 h-4" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="text-gray-600 font-normal">
                    I consent to receive email correspondence from Tomi Law Office related to my inquiry. I acknowledge
                    that I can opt-out or update my preferences at any time.
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="bg-[#002548] text-white px-6 py-3 text-sm uppercase tracking-wider hover:bg-[#003a6b] transition-colors font-normal rounded"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

