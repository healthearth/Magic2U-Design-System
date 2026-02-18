import React, { useState, useEffect, useRef } from "react"
import "./fairy.css"

export default function FairyChatbot() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ x: 80, y: 300 })
  const [dragging, setDragging] = useState(false)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const fairyRef = useRef(null)

  const [messages, setMessages] = useState([
    { 
      from: "Fairy", text: "Hello! my name is Fairy. I live in the Magic2U Cloud as ✨ a MagicAl Touch Able to Respond AlOUD." 
    }
  ])

  useEffect(() => {
  speak(messages[0].text)
  }, [])

  const [input, setInput] = useState("")

  const speak = (text) => {
  const utter = new SpeechSynthesisUtterance(text)
  utter.pitch = 1.4
  utter.rate = 1.1
  speechSynthesis.speak(utter)
  }


  /* -----------------------------
     1. DRAGGABLE FAIRY
  ----------------------------- */
  const onMouseDown = (e) => {
    setDragging(true)
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const onMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y
      })
    }
  }

  const onMouseUp = () => setDragging(false)

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)
    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  })

  /* -----------------------------
     2. FAIRY FOLLOWS MOUSE
  ----------------------------- */
  useEffect(() => {
    const follow = (e) => {
      if (!dragging) {
        setPosition(prev => ({
          x: prev.x + (e.clientX - prev.x) * 0.02,
          y: prev.y + (e.clientY - prev.y) * 0.02
        }))
      }
    }
    window.addEventListener("mousemove", follow)
    return () => window.removeEventListener("mousemove", follow)
  }, [dragging])

  /* -----------------------------
     3. SPARKLE TRAIL
  ----------------------------- */
  const createSparkle = () => {
    const sparkle = document.createElement("div")
    sparkle.className = "fairy-trail"
    sparkle.style.left = position.x + "px"
    sparkle.style.top = position.y + "px"
    document.body.appendChild(sparkle)
    setTimeout(() => sparkle.remove(), 800)
  }

  useEffect(() => {
    const interval = setInterval(createSparkle, 120)
    return () => clearInterval(interval)
  }, [position])

  /* -----------------------------
     4. VOICE ENABLED
  ----------------------------- */
  const speak = (text) => {
    const utter = new SpeechSynthesisUtterance(text)
    utter.pitch = 1.4
    utter.rate = 1.1
    speechSynthesis.speak(utter)
  }

  const startListening = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
    if (!SpeechRecognition) return

    const recognition = new SpeechRecognition()
    recognition.lang = "en-US"
    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript
      sendMessage(transcript)
    }
    recognition.start()
  }

  /* -----------------------------
     5. LLM BACKEND INTEGRATION
  ----------------------------- */
  const sendMessage = async (text) => {
    setMessages(prev => [...prev, { from: "user", text }])
    setInput("")

    // Replace with your real backend endpoint
    const response = await fetch("https://your-llm-endpoint.com/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text })
    })

    const data = await response.json()
    const reply = data.reply || "I'm here to help!"

    setMessages(prev => [...prev, { from: "fairy", text: reply }])
    speak(reply)
  }

  return (
    <>
      {/* FAIRY ICON */}
      <div
        className="fairy"
        ref={fairyRef}
        style={{ left: position.x, top: position.y }}
        onMouseDown={onMouseDown}
        onClick={() => setOpen(!open)}
      >
        <div className="fairy-core"></div>
        <div className="fairy-glow"></div>
        <div className="fairy-sparkle sparkle1"></div>
        <div className="fairy-sparkle sparkle2"></div>
        <div className="fairy-sparkle sparkle3"></div>
      </div>

      {/* CHAT WINDOW */}
      {open && (
        <div className="fairy-chat">
          <div className="chat-header">
            ✨ Magic2U Fairy Assistant
            <button className="voice-btn" onClick={startListening}>🎤</button>
          </div>

          <div className="chat-body">
            {messages.map((m, i) => (
              <div key={i} className={`msg ${m.from}`}>{m.text}</div>
            ))}

            {/* INSERTED LINES — EXACTLY WHERE THEY BELONG */}
            <p>Need a human? I can summon one instantly:</p>

            <a
              href="mailto:Magic2UDesignSystems@gmail.com"
              className="chat-email"
            >
              Magic2UDesignSystems@gmail.com
            </a>
          </div>

          <div className="chat-input">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything…"
            />
            <button onClick={() => sendMessage(input)}>Send</button>
          </div>
        </div>
      )}
    </>
  )
}
