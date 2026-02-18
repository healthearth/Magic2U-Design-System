import React, { useState } from "react"
import "./app.css" // optional: create this for layout styling

const CLIENT_NAME = "UnitedHealthcare" // or "Your Brand Here"

type Theme = "light" | "dark" | "high-contrast"

export default function App() {
  const [theme, setTheme] = useState<Theme>("light")

  return (
    <div className={`magic2u-root theme-${theme}`}>
      <SiteHeader />
      <Hero theme={theme} clientName={CLIENT_NAME} />
      <NavBar />

      <main className="magic2u-main">
        <Section id="components" title="Component Gallery">
          <ComponentGallery />
        </Section>

        <Section id="tokens" title="Design Tokens">
          <TokenInspector />
        </Section>

        <Section id="themes" title="Theme Switcher">
          <ThemeSwitcher theme={theme} setTheme={setTheme} />
        </Section>

        <Section id="whitelabel" title="White‑Label Cloud Design System">
          <WhiteLabelPitch clientName={CLIENT_NAME} />
        </Section>

        <Section id="accessibility" title="Accessibility & Audit">
          <AccessibilityPitch />
        </Section>

        <Section id="telemetry" title="Telemetry & Live Stats">
          <TelemetryPitch />
        </Section>
      </main>

      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="magic2u-header">
      <div className="logo">✨ Magic2U Cloud</div>
      <nav>
        <a href="#components">Components</a>
        <a href="#tokens">Tokens</a>
        <a href="#themes">Themes</a>
        <a href="#whitelabel">White‑Label</a>
        <a href="#accessibility">Accessibility</a>
        <a href="#telemetry">Telemetry</a>
      </nav>
      <button className="primary-cta">Request a Demo</button>
    </header>
  )
}

function Hero({ theme, clientName }: { theme: Theme; clientName: string }) {
  return (
    <section className="hero">
      <h1>Cloud‑Hosted Design System, Ready to White‑Label</h1>
      <p>
        Magic2U Cloud lets teams adopt a production‑ready design system in days—not months. 
        White‑label it for clients like <strong>{clientName}</strong>, or plug it into your own stack.
      </p>
      <div className="hero-badges">
        <span>Multi‑tenant</span>
        <span>Accessible</span>
        <span>Telemetry‑aware</span>
        <span>Apache‑2.0 Licensed</span>
      </div>
      <p className="hero-theme-indicator">
        Current demo theme: <strong>{theme}</strong>
      </p>
    </section>
  )
}

function NavBar() {
  return (
    <div className="magic2u-subnav">
      <span>Demo: Magic2U Cloud Design System</span>
      <span>Environment: Demo / Sandbox</span>
    </div>
  )
}

function Section(props: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={props.id} className="magic2u-section">
      <h2>{props.title}</h2>
      {props.children}
    </section>
  )
}

// --- Component Gallery ---

function ComponentGallery() {
  return (
    <div className="gallery-grid">
      <ComponentCard
        name="Primary Button"
        description="Core call‑to‑action button with theme‑aware tokens."
      >
        <button className="btn btn-primary">Primary Action</button>
      </ComponentCard>

      <ComponentCard
        name="Secondary Button"
        description="Low‑emphasis action using the same token system."
      >
        <button className="btn btn-secondary">Secondary Action</button>
      </ComponentCard>

      <ComponentCard
        name="Card"
        description="Composable layout primitive for dashboards and content."
      >
        <div className="card">
          <h4>Card Title</h4>
          <p>Cards are built from spacing, radius, and shadow tokens.</p>
        </div>
      </ComponentCard>

      <ComponentCard
        name="Alert"
        description="Status messaging with semantic colors and icons."
      >
        <div className="alert alert-success">
          <strong>Success:</strong> Your design system is live in the cloud.
        </div>
      </ComponentCard>
    </div>
  )
}

function ComponentCard(props: {
  name: string
  description: string
  children: React.ReactNode
}) {
  return (
    <div className="component-card">
      <div className="component-header">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
      <div className="component-preview">{props.children}</div>
      <pre className="component-code">
        {/* In a real version, you’d render actual code snippets here */}
        {/* This is where you “prove” the API surface. */}
        {"// Code snippet would appear here"}
      </pre>
    </div>
  )
}

// --- Tokens ---

function TokenInspector() {
  const colors = [
    { name: "primary", value: "#2563eb" },
    { name: "primary-foreground", value: "#ffffff" },
    { name: "background", value: "#ffffff" },
    { name: "background-alt", value: "#f3f4f6" },
    { name: "danger", value: "#dc2626" }
  ]

  const spacing = ["4px", "8px", "12px", "16px", "24px", "32px"]

  return (
    <div className="tokens-grid">
      <div>
        <h4>Color Tokens</h4>
        <div className="token-row">
          {colors.map(c => (
            <div key={c.name} className="token-swatch">
              <div className="swatch" style={{ backgroundColor: c.value }} />
              <div className="token-meta">
                <code>color.{c.name}</code>
                <span>{c.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4>Spacing Scale</h4>
        <div className="token-row">
          {spacing.map(s => (
            <div key={s} className="token-spacing">
              <div className="spacing-box" style={{ height: s }} />
              <code>{s}</code>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// --- Theme Switcher ---

function ThemeSwitcher({
  theme,
  setTheme
}: {
  theme: Theme
  setTheme: (t: Theme) => void
}) {
  return (
    <div className="theme-switcher">
      <p>Switch themes to see how the same components adapt instantly.</p>
      <div className="theme-buttons">
        <button
          className={theme === "light" ? "btn btn-primary" : "btn"}
          onClick={() => setTheme("light")}
        >
          Light
        </button>
        <button
          className={theme === "dark" ? "btn btn-primary" : "btn"}
          onClick={() => setTheme("dark")}
        >
          Dark
        </button>
        <button
          className={theme === "high-contrast" ? "btn btn-primary" : "btn"}
          onClick={() => setTheme("high-contrast")}
        >
          High Contrast
        </button>
      </div>
      <p className="theme-note">
        In a production setup, these themes would be driven by tokens from the Magic2U Cloud
        design system, not hard‑coded.
      </p>
    </div>
  )
}

// --- White‑Label Pitch ---

function WhiteLabelPitch({ clientName }: { clientName: string }) {
  return (
    <div className="pitch-block">
      <p>
        Magic2U Cloud is built to be white‑labeled. In this demo, imagine the system branded for{" "}
        <strong>{clientName}</strong>—but the same infrastructure can serve dozens of clients,
        each with their own tokens, themes, and governance.
      </p>
      <ul>
        <li>Host a single design system in the cloud.</li>
        <li>Expose it via APIs, npm packages, and documentation.</li>
        <li>Let each client or team adapt tokens and themes locally.</li>
        <li>Keep governance, accessibility, and telemetry centralized.</li>
      </ul>
    </div>
  )
}

// --- Accessibility Pitch ---

function AccessibilityPitch() {
  return (
    <div className="pitch-block">
      <p>
        Magic2U Cloud bakes accessibility into the system: color contrast, focus states, ARIA
        patterns, and keyboard navigation are part of the core, not an afterthought.
      </p>
      <ul>
        <li>Pre‑audited components with WCAG‑aligned patterns.</li>
        <li>Automated checks in CI/CD.</li>
        <li>Live accessibility reports per release.</li>
      </ul>
    </div>
  )
}

// --- Telemetry Pitch ---

function TelemetryPitch() {
  return (
    <div className="pitch-block">
      <p>
        With telemetry enabled, you can see how components are used across teams and clients:
        which patterns are adopted, which are misused, and where performance bottlenecks appear.
      </p>
      <ul>
        <li>Component usage analytics.</li>
        <li>Performance metrics per page and component.</li>
        <li>Error tracking tied to specific UI patterns.</li>
      </ul>
    </div>
  )
}

function SiteFooter() {
  return (
    <footer className="magic2u-footer">
      <span>© {new Date().getFullYear()} Magic2U Cloud Design System</span>
      <span>Apache‑2.0 License · White‑Label Ready · Startup → Enterprise</span>
    </footer>
  )
}
