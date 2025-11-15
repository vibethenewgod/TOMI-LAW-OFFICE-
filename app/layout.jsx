import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata = {
  title: "Tomi Law Office | General Law Firm in Tisdale & Nipawin",
  description:
    "Tomi Law Office is a general law firm offering a broad range of legal services including family law, real estate, wills & estates, and more.",
  generator: "v0.dev",
}

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-out-cubic",
    })
  }, [])

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}