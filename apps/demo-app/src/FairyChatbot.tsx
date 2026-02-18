import React, { useState, useEffect } from "react"
import "./fairy.css"

export default function FairyChatbot() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 40, y: 300 })

  // gentle floating animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prev => ({
        x: prev.x + (Math.random() * 6 - 3),
        y: prev.y + (Math.random() * 6 - 3)
      }))
    }, 900)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Floating Fairy */}
      <div
        className="fairy"
        style={{ left: position.x, top: position.y }}
        onClick={() => setOpen(!open)}
      >
        <div className="fairy-glow"></div>
        <div className="fairy-core"></div>
        <div className="fairy-sparkle sparkle1"></div>
        <div className="fairy-sparkle sparkle2"></div>
        <div className="fairy-sparkle sparkle3"></div>
      </div>

      {/* Chat Window */}
      {open && (
        <div className="fairy-chat">
          <div className="chat-header">
            ✨ Magic2U Fairy Assistant
          </div>
          <div className="chat-body">
            <p>Hello! I’m your Magic2U Cloud Fairy ✨  
            I help guide teams through adopting a cloud‑hosted, white‑label design system.</p>

            <p>Ask me about:</p>
            <ul>
              <li>How Magic2U Cloud works</li>
              <li>White‑labeling for enterprises</li>
              <li>Pricing & licensing</li>
              <li>Design tokens & components</li>
            </ul>

            <p>Or email us directly:</p>
            <a href="mailto:Magic2UDesignSystems@gmail.com" className="chat-email">
              Magic2UDesignSystems@gmail.com
            </a>
          </div>
        </div>
      )}
    </>
  )
}
