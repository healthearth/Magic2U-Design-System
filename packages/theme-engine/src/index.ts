import { TokenSet } from "@magic2u/tokens"

export type BrandTheme = TokenSet

let activeTheme: BrandTheme | null = null

export function setTheme(theme: BrandTheme) {
  activeTheme = theme
}

export function getTheme(): BrandTheme {
  if (!activeTheme) {
    throw new Error("Theme not set")
  }
  return activeTheme
}
