"use client"

import { useTheme } from "next-themes"
import { useEffect } from "react"

/**
 * Updates the theme-color meta tag based on the current theme.
 * Matches the background colors from globals.css:
 * Light mode: hsl(0 0% 100%) = #ffffff (white)
 * Dark mode: hsl(222.2 84% 4.9%) = #0f172a (dark blue-gray)
 */
export function ThemeColor() {
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const actualTheme = theme === "system" ? systemTheme : theme
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    
    // Match background colors from globals.css CSS variables
    const color = actualTheme === "dark" ? "#020817" : "#ffffff"

    if (metaThemeColor) {
      metaThemeColor.setAttribute("content", color)
    } else {
      const meta = document.createElement("meta")
      meta.name = "theme-color"
      meta.content = color
      document.getElementsByTagName("head")[0].appendChild(meta)
    }
  }, [theme, systemTheme])

  return null
}

