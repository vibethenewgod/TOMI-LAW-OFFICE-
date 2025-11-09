// import Link from "next/link"
// import { Linkedin } from "lucide-react"
// import Image from "next/image"

// export default function Footer() {
//   return (
//     <footer className="bg-[#002548] text-white">
//       <div className="container mx-auto py-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Logo and About */}
//           <div>
//             <Link href="/">
//               <div className="flex items-center mb-4">
//                 <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={60} height={60} />
//                 <div className="text-white text-2xl font-semibold tracking-wider ml-2">TOMI LAW OFFICE</div>
//               </div>
//             </Link>

//             <div className="text-gray-300 text-sm mb-6">
//               <p className="mb-3">
//                 Tomi Law Office is a general law firm offering a broad range of legal services to our clients. Tomi Law
//                 Office was established in Tisdale in February 2018 and opened a second office in Nipawin in March 2018.
//               </p>
//               <p>
//                 At Tomi Law Office, our goal is to provide efficient and affordable legal services. We take the time to
//                 listen to our clients, understand their needs and offer practical solutions to their individual or
//                 corporate needs.
//               </p>
//             </div>
//           </div>

//           {/* Offices */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Offices</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#tisdale" className="text-gray-300 hover:text-white font-medium">
//                   Tisdale
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#nipawin" className="text-gray-300 hover:text-white font-medium">
//                   Nipawin
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Practice Areas */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link href="#family" className="text-gray-300 hover:text-white font-medium">
//                   Family Law
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#corporate" className="text-gray-300 hover:text-white font-medium">
//                   Corporate and Commercial Law
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#real-estate" className="text-gray-300 hover:text-white font-medium">
//                   Real Estate
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#wills" className="text-gray-300 hover:text-white font-medium">
//                   Wills & Estates
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#labour" className="text-gray-300 hover:text-white font-medium">
//                   Labour Law
//                 </Link>
//               </li>
//               <li>
//                 <Link href="#municipal" className="text-gray-300 hover:text-white font-medium">
//                   Municipal Law
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-300 font-medium">Tisdale: 306-873-4521</li>
//               <li className="text-gray-300 font-medium">Nipawin: 306-862-4511</li>
//             </ul>

//             <h3 className="text-lg font-semibold mt-8 mb-4">Subscribe</h3>
//             <div className="mb-4">
//               <button className="bg-[#d4a017] text-white px-6 py-3 font-medium hover:bg-[#c09015] transition-colors w-full sm:w-auto">
//                 Subscribe
//               </button>
//             </div>
//             <p className="text-gray-300 font-medium text-sm mb-6">
//               Subscribe to Tomi Law Office's newsletter for legal updates and information.
//             </p>
//           </div>
//         </div>

//         <hr className="border-t border-[#003a6b] my-8" />

//         <div className="flex flex-col md:flex-row justify-between items-center">
//           <div className="mb-4 md:mb-0">
//             <p className="text-gray-400 text-sm font-medium">
//               &copy; {new Date().getFullYear()} Tomi Law Office. All rights reserved.
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium">
//             <Link href="#privacy" className="text-gray-400 hover:text-white">
//               Privacy Policy
//             </Link>
//             <Link href="#disclaimer" className="text-gray-400 hover:text-white">
//               Disclaimer
//             </Link>
//             <Link href="#terms" className="text-gray-400 hover:text-white">
//               Terms of Service
//             </Link>
//             <Link href="#accessibility" className="text-gray-400 hover:text-white">
//               Accessibility
//             </Link>
//             <Link href="#linkedin" className="text-gray-400 hover:text-white">
//               <Linkedin className="h-5 w-5" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }



import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#002548] text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <Link href="/">
              <div className="flex items-center mb-4">
                <Image src="/images/logo.png" alt="Tomi Law Office Logo" width={60} height={60} />
                <div className="text-white text-2xl font-semibold tracking-wider ml-2">TOMI LAW OFFICE</div>
              </div>
            </Link>

            <div className="text-gray-300 text-sm mb-6">
              <p className="mb-3">
                At Tomi Law Office, our goal is to provide efficient and affordable legal services. We take the time to
                listen to our clients, understand their needs and offer practical solutions to their individual or
                corporate needs.
              </p>
            </div>
          </div>

          {/* Offices + Contact Section (Swapped) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Offices</h3>
            <ul className="space-y-2 mb-6">
              <li>
                <Link href="#tisdale" className="text-gray-300 hover:text-white font-medium">
                  Tisdale
                </Link>
              </li>
              <li>
                <Link href="#nipawin" className="text-gray-300 hover:text-white font-medium">
                  Nipawin
                </Link>
              </li>
            </ul>

            {/* Contact Section (Moved Here) */}
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 font-medium">Tisdale: 306-873-4521</li>
              <li className="text-gray-300 font-medium">Nipawin: 306-862-4511</li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Practice Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#family" className="text-gray-300 hover:text-white font-medium">
                  Family Law
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="text-gray-300 hover:text-white font-medium">
                  Corporate and Commercial Law
                </Link>
              </li>
              <li>
                <Link href="#real-estate" className="text-gray-300 hover:text-white font-medium">
                  Real Estate
                </Link>
              </li>
              <li>
                <Link href="#wills" className="text-gray-300 hover:text-white font-medium">
                  Wills & Estates
                </Link>
              </li>
              <li>
                <Link href="#labour" className="text-gray-300 hover:text-white font-medium">
                  Labour Law
                </Link>
              </li>
              <li>
                <Link href="#municipal" className="text-gray-300 hover:text-white font-medium">
                  Municipal Law
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section (Moved Here) */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-2">
              <Link href="https://facebook.com" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Facebook className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Linkedin className="h-5 w-5 text-white" />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition">
                <Twitter className="h-5 w-5 text-white" />
              </Link>
            </div>
            <p className="text-gray-400 text-sm font-medium">
              Member - Canadian Bar Association
            </p>

            <h3 className="text-lg font-semibold mt-8 mb-4">Subscribe</h3>
            <div className="mb-4">
              <button className="bg-[#d4a017] text-white px-6 py-3 font-medium hover:bg-[#c09015] transition-colors w-full sm:w-auto">
                Subscribe
              </button>
            </div>
            <p className="text-gray-300 font-medium text-sm">
              Subscribe to Tomi Law Office's newsletter for legal updates and information.
            </p>
          </div>
        </div>

        <hr className="border-t border-[#003a6b] my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 text-sm font-medium">
              &copy; {new Date().getFullYear()} Tomi Law Office. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:gap-6 text-sm font-medium">
            <Link href="#privacy" className="text-gray-400 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#disclaimer" className="text-gray-400 hover:text-white">
              Disclaimer
            </Link>
            <Link href="#terms" className="text-gray-400 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#accessibility" className="text-gray-400 hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
