// Button.tsx
// A reusable UI button component with theme + accessibility baked in.

import React from "react";
import { useTheme } from "../shared/theme";

export const Button = ({ children, variant = "primary", onClick }) => {
  const theme = useTheme();

  return (
    <button
      style={{
        background: theme.colors[variant].bg,
        color: theme.colors[variant].text,
        padding: theme.spacing.md,
        borderRadius: theme.radius.sm,
      }}
      onClick={onClick}
      aria-label={typeof children === "string" ? children : "button"}
    >
      {children}
    </button>
  );
};
