import React from "react"
import { useTheme } from "./ThemeProvider"

export function Button({ children }: { children: React.ReactNode }) {
  const theme = useTheme()

  return (
    <button
      style={{
        background: theme.colors.primary,
        color: "#fff",
        padding: "0.75rem 1.5rem",
        borderRadius: theme.radius.md,
        border: "none",
        cursor: "pointer",
      }}
    >
      {children}
    </button>
  )
}
