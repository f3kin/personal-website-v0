import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import { ThemeProvider } from "@/components/theme-provider"

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
  metadataBase: new URL('https://finlayekins.com'),
  title: "Finlay Ekins | Personal Space",
  description: "A personal website showcasing my thoughts, projects, and reflections.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Finlay Ekins | Personal Space",
    description: "A personal website showcasing my thoughts, projects, and reflections.",
    url: "https://finlayekins.com",
    siteName: "Finlay Ekins",
    images: [
      { url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Finlay Ekins Personal Website" },
    ],
    locale: "en_US",
    type: "website",
  },
  generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
