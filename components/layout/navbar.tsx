"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const navLinks = [
  { href: "/", label: "Home" },
  // { href: "/about", label: "About" },
  // { href: "/projects", label: "Projects" },
  { href: "/writings", label: "Writings" },
  // { href: "/connect", label: "Connect" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled ? "bg-background/30 backdrop-blur-sm shadow-sm py-4" : "bg-transparent py-6",
      )}
    >
      <div className="container mx-auto px-4">
        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex items-center justify-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors relative group",
                pathname === link.href ? "text-primary" : "text-foreground/70 hover:text-foreground",
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.span
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full mx-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
          <div className="ml-4">
            <ModeToggle />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between w-full">
          <div className="flex items-center space-x-2">
            {navLinks.map(
              (link, index) =>
                index < 2 && (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-2 py-2 text-sm font-medium transition-colors relative",
                      pathname === link.href ? "text-primary" : "text-foreground/70 hover:text-foreground",
                    )}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.span
                        layoutId="navbar-indicator-mobile"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full mx-2"
                      />
                    )}
                  </Link>
                ),
            )}
          </div>
          <div className="flex items-center space-x-2">
            <ModeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle Menu"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden animate-in">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2 bg-background/50 backdrop-blur-sm">
            {navLinks.map(
              (link, index) =>
                index >= 3 && (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-3 rounded-md text-base font-medium transition-colors text-center",
                      pathname === link.href
                        ? "text-primary bg-primary/10"
                        : "text-foreground/70 hover:text-foreground hover:bg-accent/10",
                    )}
                  >
                    {link.label}
                  </Link>
                ),
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
