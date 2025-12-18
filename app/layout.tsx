import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { LINKS } from "@/lib/links"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(LINKS.site.base),
  title: "Finlay Ekins",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Finlay Ekins",
    description: "a personal website",
    url: LINKS.site.base,
    siteName: "Finlay Ekins",
    images: [
      { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Finlay Ekins Personal Website" },
    ],
    locale: "en-AU",
    type: "website",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0f172a",
} as const

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-[100svh] min-h-[100dvh] md:min-h-screen flex-col bg-transparent">
            <Navbar />
            <main className="flex-1 bg-transparent">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
