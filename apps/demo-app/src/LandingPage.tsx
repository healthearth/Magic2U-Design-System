import React, { useState } from "react"
import "./app.css"
import FairyChatbot from "./FairyChatbot"

export default function LandingPage() {
  return (
    <>
      <FairyChatbot />

      <div className="landing-root theme-light">
        <header className="landing-header">
          <div className="logo">✨ Magic2U Cloud</div>
          <nav>
            <a href="#features">Features</a>
            <a href="#whitelabel">White‑Label</a>
            <a href="#pricing">Pricing</a>
            <a href="#sales">Sales</a>
          </nav>
          <a className="cta-button" href="mailto:Magic2UDesignSystems@gmail.com">
            Contact Sales
          </a>
        </header>

        <section className="landing-hero">
          <h1 className="hero-title">
            Design Systems with Real Magic💨
          </h1>

          <p>
            Magic2U Cloud is a hosted, white‑label design system platform that lets teams adopt,
            customize, and deploy enterprise‑grade UI foundations in minutes—not months.
          </p>

          <div className="hero-buttons">
            <a className="cta-primary" href="#demo">View Live Demo</a>
            <a className="cta-secondary" href="mailto:Magic2UDesignSystems@gmail.com">
              Talk to Sales
            </a>
          </div>
        </section>

        <section id="demo" className="landing-section">
          <h2>Live Demo</h2>

          <p className="center">
            Explore how Magic2U Cloud instantly transforms into any brand using tokens,
            themes, and white‑label configuration.
          </p>

          <div className="demo-controls">
            <h3>Theme</h3>
            <button>Light</button>
            <button>Dark</button>
            <button>High Contrast</button>

            <h3>Brand</h3>
            <button>UnitedHealthcare</button>
            <button>Your Brand Here</button>
            <button>Custom</button>
          </div>

          <div className="demo-gallery">
            <h3>Components</h3>
            <button className="demo-button">Primary Button</button>
            <input className="demo-input" placeholder="Input field" />
            <div className="demo-card">Card Component</div>
          </div>
        </section>


        <section id="features" className="landing-section">
          <h2>Why Magic2U Cloud</h2>
          <div className="feature-grid">
            <Feature
              title="Hosted in the Cloud"
              description="Access your design system anywhere. No setup, no installs, no maintenance."
            />
            <Feature
              title="White‑Label Ready"
              description="Brand it for UnitedHealthcare, or any client. One platform, infinite identities."
            />
            <Feature
              title="Enterprise‑Grade"
              description="Accessibility, tokens, themes, telemetry, and governance built‑in."
            />
            <Feature
              title="Developer‑Friendly"
              description="Install via npm, consume via API, or embed via CDN."
            />
          </div>
        </section>

        <section id="whitelabel" className="landing-section alt">
          <h2>White‑Label Example</h2>
          <p className="center">
            Below is a preview of how Magic2U Cloud can instantly transform into a branded design
            system for any enterprise—like <strong>UnitedHealthcare</strong> or <strong>Your Brand Here</strong>.
          </p>

          <div className="white-label-demo">
            <div className="brand-card">
              <h3>UnitedHealthcare Design System</h3>
              <p>Powered by Magic2U Cloud</p>
            </div>

            <div className="brand-card white">
              <h3>Your Brand Here</h3>
              <p>Fully customizable. Fully yours.</p>
            </div>
          </div>
        </section>

        <section id="pricing" className="landing-section">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            <PricingCard
              title="Starter"
              price="$0"
              description="Perfect for small teams exploring design system adoption."
            />
            <PricingCard
              title="Pro"
              price="$49/mo"
              description="Full access to tokens, themes, components, and cloud hosting."
            />
            <PricingCard
              title="Enterprise"
              price="Contact Us"
              description="White‑label, multi‑tenant hosting, SSO, governance, and support."
            />
          </div>
        </section>

        <section id="sales" className="landing-section alt center">
          <h2>Talk to Sales</h2>
          <p>
            Want a custom demo, enterprise pricing, or white‑label onboarding  
            Email us anytime:
          </p>
          <a className="cta-primary" href="mailto:Magic2UDesignSystems@gmail.com">
            Magic2UDesignSystems@gmail.com
          </a>
        </section>

        <footer className="landing-footer">
          <div className="footer-top">
            <span>© {new Date().getFullYear()} Magic2U Cloud Design System</span>
            <span>Apache‑2.0 Licensed · Patent Pending</span>
          </div>
          <div className="footer-bottom">
            <a href="mailto:Magic2UDesignSystems@gmail.com">
              Magic2UDesignSystems@gmail.com
            </a>
          </div>
        </footer>
      </div>
    </>
  )
}

function Feature({ title, description }) {
  return (
    <div className="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function PricingCard({ title, price, description }) {
  return (
    <div className="pricing-card">
      <h3>{title}</h3>
      <p className="price">{price}</p>
      <p>{description}</p>
    </div>
  )
}
