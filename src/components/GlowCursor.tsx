"use client";
import { useEffect, useState } from "react";

export default function GlowCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] hidden md:block"
      style={{
        left: pos.x - 60,
        top: pos.y - 60,
        width: 120,
        height: 120,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.15) 0%, transparent 70%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  );
}
