import React, { createContext, useContext } from "react"
import { BrandTheme } from "@magic2u/engine"

const ThemeContext = createContext<BrandTheme | null>(null)

export function ThemeProvider({
  theme,
  children,
}: {
  theme: BrandTheme
  children: React.ReactNode
}) {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const theme = useContext(ThemeContext)
  if (!theme) throw new Error("ThemeProvider missing")
  return theme
}
