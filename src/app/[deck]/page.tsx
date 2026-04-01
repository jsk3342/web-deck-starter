"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface DeckPageProps {
  params: Promise<{ deck: string }>;
}

export default function DeckPage({ params }: DeckPageProps) {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState<React.ReactElement[]>([]);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    params.then(({ deck }) => {
      import(`@/decks/${deck}/slides`)
        .then((mod) => {
          setSlides(mod.slides);
          setLoading(false);
        })
        .catch(() => {
          setNotFound(true);
          setLoading(false);
        });
    });
  }, [params]);

  const total = slides.length;

  const goTo = useCallback(
    (n: number) => setCurrent((prev) => Math.max(0, Math.min(n, total - 1))),
    [total],
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      switch (e.key) {
        case "ArrowRight":
        case " ":
          e.preventDefault();
          goTo(current + 1);
          break;
        case "ArrowLeft":
          e.preventDefault();
          goTo(current - 1);
          break;
        case "Home":
          e.preventDefault();
          goTo(0);
          break;
        case "End":
          e.preventDefault();
          goTo(total - 1);
          break;
        case "f":
          e.preventDefault();
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
          break;
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, total, goTo]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p style={{ color: "var(--briefing-muted)" }}>Loading...</p>
      </div>
    );
  }

  if (notFound || total === 0) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4">
        <p className="text-4xl font-bold">404</p>
        <p style={{ color: "var(--briefing-muted)" }}>덱을 찾을 수 없습니다</p>
        <a href="/" className="text-sm hover:underline" style={{ color: "var(--briefing-accent)" }}>
          메인으로
        </a>
      </div>
    );
  }

  const progress = ((current + 1) / total) * 100;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {slides[current]}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-50">
        <motion.div
          className="h-full"
          style={{ background: "var(--briefing-accent)" }}
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>

      {/* HUD */}
      <div className="fixed top-[3px] left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 rounded-full px-4 py-1.5 text-xs select-none pt-2"
        style={{ background: "rgba(0,0,0,0.05)", backdropFilter: "blur(8px)", color: "rgba(0,0,0,0.4)" }}
      >
        <span>← →</span>
        <span className="font-mono">{current + 1} / {total}</span>
        <span style={{ opacity: 0.5 }}>f 풀스크린</span>
      </div>

      {/* Nav buttons */}
      {current > 0 && (
        <button
          onClick={() => goTo(current - 1)}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.4)" }}
        >
          ←
        </button>
      )}
      {current < total - 1 && (
        <button
          onClick={() => goTo(current + 1)}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all"
          style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.4)" }}
        >
          →
        </button>
      )}
    </>
  );
}
