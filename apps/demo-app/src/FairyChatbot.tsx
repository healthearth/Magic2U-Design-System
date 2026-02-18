import React, { useEffect, useState } from "react";

export default function FairyChatbot() {
  const [target, setTarget] = useState({ x: 300, y: 300 });
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [open, setOpen] = useState(false);
  const [trail, setTrail] = useState([]);

  // Track mouse movement
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setTarget({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  // Smooth delayed movement (7s easing)
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => {
        const next = {
          x: prev.x + (target.x - prev.x) * 0.05,
          y: prev.y + (target.y - prev.y) * 0.05,
        };

        // Add sparkle trail
        setTrail((t) => [
          ...t,
          { id: Math.random(), x: next.x, y: next.y }
        ].slice(-20));

        return next;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <>
      {/* Sparkle Trail */}
      {trail.map((p) => (
        <div
          key={p.id}
          className="fairy-trail"
          style={{ left: p.x, top: p.y }}
        />
      ))}

      {/* Fairy */}
      <div
        className="fairy"
        style={{ left: position.x, top: position.y }}
        onClick={() => setOpen(!open)}
      >
        <div className="fairy-glow" />
        <div className="fairy-core" />
        <div className="fairy-sparkle sparkle1" />
        <div className="fairy-sparkle sparkle2" />
        <div className="fairy-sparkle sparkle3" />
      </div>

      {/* Chat Bubble */}
      {open && (
        <div className="fairy-chat">
          I am Fairy. I live on the Design System Cloud as a magical touch.
        </div>
      )}
    </>
  );
}
