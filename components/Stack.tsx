"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useEffect, useRef, type PointerEvent, type ReactNode } from "react";
import { stack } from "@/lib/data";
import { SectionLabel, SplitWords, ease } from "./ui";

function SpotCard({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--x", `${e.clientX - r.left}px`);
    el.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      initial={{ opacity: 0, y: 34, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.75, ease, delay }}
      className={clsx("group relative overflow-hidden rounded-3xl border border-line bg-ink-2", className)}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: "radial-gradient(420px circle at var(--x) var(--y), rgb(255 90 31 / 0.13), transparent 60%)" }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
}

const TERMS = [
  "retrieval", "embedding", "vector", "agent", "planner", "tool call", "citation", "rerank",
  "chunk", "metadata", "policy", "memory", "graph", "prompt", "eval", "vision",
  "ViT", "schema", "stream", "checkpoint", "fallback", "audit", "context", "hybrid",
];

/** A 2D toy "embedding space": the pointer is a query, lines connect its k nearest neighbours. */
function EmbeddingField() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!wrap || !canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const monoFamily = getComputedStyle(document.documentElement).getPropertyValue("--font-jetbrains").trim() || "ui-monospace, monospace";
    const clusters = [
      [0.26, 0.3],
      [0.72, 0.26],
      [0.3, 0.74],
      [0.74, 0.7],
    ];
    type Point = { hx: number; hy: number; x: number; y: number; term?: string };
    let w = 0;
    let h = 0;
    let points: Point[] = [];
    const query = { x: 0, y: 0, tx: 0, ty: 0, pointer: false };

    const build = () => {
      const r = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width;
      h = r.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = w < 520 ? 72 : 120;
      let seed = 7;
      const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
      points = Array.from({ length: n }, (_, i) => {
        const [cx, cy] = clusters[i % clusters.length];
        const angle = rand() * Math.PI * 2;
        const radius = Math.pow(rand(), 0.7) * Math.min(w, h) * 0.21;
        const x = cx * w + Math.cos(angle) * radius;
        const y = cy * h + Math.sin(angle) * radius;
        return { hx: x, hy: y, x, y, term: TERMS[i] };
      });
      if (!query.x) {
        query.x = query.tx = w / 2;
        query.y = query.ty = h / 2;
      }
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(wrap);

    const onMove = (e: globalThis.PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      query.tx = e.clientX - r.left;
      query.ty = e.clientY - r.top;
      query.pointer = true;
    };
    const onLeave = () => (query.pointer = false);
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    let raf = 0;
    let visible = false;
    const start = performance.now();

    const frame = (now: number) => {
      const t = reduce ? 0 : (now - start) / 1000;
      if (!query.pointer && !reduce) {
        query.tx = w * (0.5 + 0.3 * Math.cos(t * 0.33));
        query.ty = h * (0.5 + 0.26 * Math.sin(t * 0.47));
      }
      query.x += (query.tx - query.x) * 0.08;
      query.y += (query.ty - query.y) * 0.08;

      for (const p of points) {
        p.x = p.hx + Math.sin(t * 0.6 + p.hy * 0.02) * 4;
        p.y = p.hy + Math.cos(t * 0.5 + p.hx * 0.02) * 4;
      }
      const nearest = points
        .map((p) => ({ p, d: Math.hypot(p.x - query.x, p.y - query.y) }))
        .sort((a, b) => a.d - b.d)
        .slice(0, 6);
      const near = new Set(nearest.map((n) => n.p));

      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      nearest.forEach(({ p }, k) => {
        ctx.strokeStyle = `rgba(255,90,31,${0.75 - k * 0.1})`;
        ctx.beginPath();
        ctx.moveTo(query.x, query.y);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
      });
      ctx.font = `11px ${monoFamily}`;
      for (const p of points) {
        const isNear = near.has(p);
        ctx.fillStyle = isNear ? "#ff5a1f" : "rgba(236,232,223,0.32)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, isNear ? 3.2 : 1.6, 0, Math.PI * 2);
        ctx.fill();
        if (p.term) {
          ctx.fillStyle = isNear ? "#ece8df" : "rgba(236,232,223,0.26)";
          ctx.fillText(p.term, p.x + 7, p.y - 6);
        }
      }
      ctx.strokeStyle = "#ff5a1f";
      ctx.beginPath();
      ctx.arc(query.x, query.y, 11, 0, Math.PI * 2);
      ctx.stroke();
      ctx.fillStyle = "#ff5a1f";
      ctx.beginPath();
      ctx.arc(query.x, query.y, 3.5, 0, Math.PI * 2);
      ctx.fill();

      if (visible) raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(frame);
    });
    io.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <div ref={wrapRef} data-cursor="Query" className="relative h-full min-h-[260px] touch-pan-y sm:min-h-[320px]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-label="Interactive visualisation of nearest-neighbour search in an embedding space" role="img" />
      <div className="pointer-events-none absolute left-6 top-6 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
        embedding space <span className="text-ember">· k = 6</span>
      </div>
      <div className="pointer-events-none absolute inset-x-6 bottom-6 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-dim">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full border border-ember" /> query
          <span className="ml-3 h-2 w-2 rounded-full bg-ember" /> nearest
        </span>
        <span>2D projection</span>
      </div>
    </div>
  );
}

export default function Stack() {
  return (
    <section id="stack" className="relative border-t border-line px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="04" label="Stack" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-4xl text-[clamp(2.8rem,6.6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            <SplitWords text="The toolkit behind" />{" "}
            <SplitWords text="the systems." delay={0.15} className="font-serif font-normal italic text-ember" />
          </h2>
          <p className="max-w-sm text-ash">
            Move over the field on the left. Every frame it runs a nearest-neighbour lookup, the same idea behind semantic search.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          <SpotCard className="md:col-span-2 lg:col-span-3 lg:row-span-2">
            <EmbeddingField />
          </SpotCard>
          {stack.map((group, i) => (
            <SpotCard key={group.group} delay={0.06 * (i + 1)} className={clsx("p-6 sm:p-7", i < 2 ? "lg:col-span-3" : "lg:col-span-2")}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{group.group}</h3>
                  <p className="mt-1 text-sm text-ash">{group.blurb}</p>
                </div>
                <span className="font-mono text-xs text-dim">{String(group.items.length).padStart(2, "0")}</span>
              </div>
              <ul className="mt-5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line bg-ink/60 px-2.5 py-1 text-[12px] text-bone/85 transition-colors duration-300 hover:border-ember hover:text-bone"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </SpotCard>
          ))}
        </div>
      </div>
    </section>
  );
}
