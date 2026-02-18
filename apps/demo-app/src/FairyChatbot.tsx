import React, { useEffect, useState } from "react";

export default function FairyChatbot() {
  const [target, setTarget] = useState({ x: 300, y: 300 });
  const [position, setPosition] = useState({ x: 300, y: 300 });
  const [open, setOpen] = useState(false);

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
      setPosition((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.05,
        y: prev.y + (target.y - prev.y) * 0.05,
      }));
    }, 16);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <>
      <div
        className="fairy"
        style={{
          left: position.x,
          top: position.y,
        }}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <div className="fairy-chat">
          I am Fairy. I live on the Design System Cloud as a magical touch.
        </div>
      )}
    </>
  );
}
