"use client";

import { useEffect, useRef, useCallback } from "react";

function drawTexture(ctx: CanvasRenderingContext2D, w: number, h: number, mobile: boolean) {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, "#f5f5f6");
  grad.addColorStop(0.5, "#e8e8ea");
  grad.addColorStop(1, "#dcdcdf");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  const radGrad = ctx.createRadialGradient(w * 0.2, h * 0.15, 0, w * 0.2, h * 0.15, Math.max(w, h) * 0.7);
  radGrad.addColorStop(0, "rgba(255,255,255,0.12)");
  radGrad.addColorStop(0.5, "rgba(255,255,255,0.04)");
  radGrad.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, w, h);

  if (!mobile) {
    const imageData = ctx.getImageData(0, 0, w, h);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const noise = (Math.random() - 0.5) * 12;
      data[i] = Math.min(255, Math.max(0, data[i] + noise));
      data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise));
      data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise));
    }
    ctx.putImageData(imageData, 0, 0);
  }

  const gap = mobile ? 80 : 120;
  ctx.strokeStyle = "rgba(0,0,0,0.03)";
  ctx.lineWidth = 0.5;
  for (let x = 0; x < w; x += gap) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += gap) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }
}

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mobile = window.innerWidth < 768;
    const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.parentElement?.getBoundingClientRect();
    if (!rect) return;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    ctx.scale(dpr, dpr);
    drawTexture(ctx, rect.width, rect.height, mobile);
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(draw);
    window.addEventListener("resize", draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", draw); };
  }, [draw]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="absolute inset-0" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse at 25% 20%, rgba(74,74,90,0.18), transparent 70%)",
            "radial-gradient(ellipse at 75% 70%, rgba(74,74,90,0.10), transparent 60%)",
          ].join(", "),
        }}
        aria-hidden="true"
      />
    </div>
  );
}
