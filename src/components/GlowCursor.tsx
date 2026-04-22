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
        left: pos.x - 100,
        top: pos.y - 100,
        width: 200,
        height: 200,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(16,185,129,0.3) 0%, rgba(16,185,129,0.1) 40%, transparent 70%)",
        transition: "left 0.02s linear, top 0.02s linear",
      }}
    />
  );
}
