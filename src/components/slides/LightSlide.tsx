"use client";

import type { ReactNode } from "react";
import CanvasBackground from "@/components/canvas/CanvasBackground";

export default function LightSlide({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{ background: "var(--briefing-bg)" }}
    >
      <CanvasBackground />
      <div className="relative z-10 w-full max-w-6xl px-12 flex items-center justify-center h-full">
        {children}
      </div>
    </div>
  );
}
