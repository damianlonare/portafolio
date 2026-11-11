"use client";

import { useEffect, useRef } from "react";

// Barras tipo espectro que "respiran" y reaccionan al cursor / al dedo.
export default function Waveform() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let w = 0;
    let h = 0;
    const pointer = { x: -1, active: 0 };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left;
      pointer.active = 1;
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const gap = 6;
      const barW = 3;
      const count = Math.floor(w / gap);
      pointer.active *= 0.97;
      const light = document.documentElement.dataset.theme === "light";
      const baseL = light ? 46 : 62;

      for (let i = 0; i < count; i++) {
        const x = i * gap;
        const n =
          Math.sin(i * 0.18 + t * 0.0016) * 0.5 +
          Math.sin(i * 0.051 - t * 0.0009) * 0.35 +
          Math.sin(i * 0.37 + t * 0.003) * 0.15;
        let amp = 0.18 + Math.abs(n) * 0.5;
        if (pointer.x >= 0) {
          const d = Math.abs(x - pointer.x) / 120;
          amp += Math.exp(-d * d) * 0.45 * pointer.active;
        }
        const barH = Math.min(h * 0.92, amp * h);
        const y = (h - barH) / 2;
        const hue = 262 + (i / count) * 40;
        ctx.fillStyle = `hsla(${hue}, 85%, ${baseL + amp * 12}%, ${(light ? 0.5 : 0.35) + amp * 0.6})`;
        ctx.fillRect(x, y, barW, barH);
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    canvas.addEventListener("pointermove", onMove);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="wave" aria-hidden="true" />;
}
