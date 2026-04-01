"use client";

import type { ReactNode } from "react";
import CanvasBackground from "@/components/canvas/CanvasBackground";

export default function ImpactSlide({
  children,
  bg,
}: {
  children: ReactNode;
  bg?: string;
}) {
  return (
    <div
      className="relative flex h-screen w-screen items-center justify-center overflow-hidden"
      style={{ background: bg ?? "var(--briefing-bg)" }}
    >
      <CanvasBackground />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-12">
        {children}
      </div>
    </div>
  );
}
