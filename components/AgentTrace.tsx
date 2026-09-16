"use client";

import clsx from "clsx";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

type Kind = "run" | "ok" | "pause" | "block";
type Line = { kind: Kind; step: string; msg: string };

// Illustrative runs modelled on the real graphs in Atelier and the Revenue Recovery Agent
const traces: { id: string; title: string; lines: Line[] }[] = [
  {
    id: "atelier",
    title: "atelier.investigation_graph",
    lines: [
      { kind: "run", step: "director", msg: "plan → 5 sub-questions · 12 tool budget" },
      { kind: "run", step: "specialists", msg: "web ✓  papers ✓  repos ✓  (parallel)" },
      { kind: "ok", step: "evidence", msg: "claims ranked · conflicts + gaps flagged" },
      { kind: "pause", step: "interrupt", msg: "expand research? → human accepted" },
      { kind: "run", step: "synthesizer", msg: "cited report drafted" },
      { kind: "ok", step: "validator", msg: "0 invented citations · complete" },
    ],
  },
  {
    id: "recovery",
    title: "revenue_recovery.policy_graph",
    lines: [
      { kind: "run", step: "detect", msg: "invoice overdue → case opened" },
      { kind: "run", step: "score", msg: "xgboost · recovery risk: high" },
      { kind: "run", step: "diagnose", msg: "gemini → repeat late payer" },
      { kind: "run", step: "recommend", msg: "SEND_REMINDER" },
      { kind: "block", step: "policy", msg: "rejected · cooldown window active" },
      { kind: "ok", step: "override", msg: "WAIT · written to audit trail" },
    ],
  },
];

const glyph: Record<Kind, string> = { run: "›", ok: "✓", pause: "‖", block: "✕" };
const tone: Record<Kind, string> = { run: "text-ash", ok: "text-sage", pause: "text-ember-soft", block: "text-ember" };

export default function AgentTrace() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px" });
  const [tab, setTab] = useState(0);
  const [count, setCount] = useState(0);
  const trace = traces[tab];
  const done = count >= trace.lines.length;

  useEffect(() => {
    if (!inView) return;
    if (!done) {
      const id = setTimeout(() => setCount((c) => c + 1), count === 0 ? 700 : 900);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => {
      setTab((t) => (t + 1) % traces.length);
      setCount(0);
    }, 4200);
    return () => clearTimeout(id);
  }, [count, done, inView]);

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-2xl border border-line bg-ink-2/85 font-mono text-[12px] shadow-[0_40px_120px_-50px_rgba(255,90,31,0.45)] backdrop-blur-md"
    >
      <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-line" />
          <span className="h-2.5 w-2.5 rounded-full bg-ember/80" />
        </div>
        <div role="tablist" aria-label="Agent traces" className="flex gap-1">
          {traces.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === tab}
              onClick={() => {
                setTab(i);
                setCount(0);
              }}
              className={clsx(
                "rounded-md px-2 py-1 text-[11px] transition-colors",
                i === tab ? "bg-ink-3 text-bone" : "text-dim hover:text-ash",
              )}
            >
              {t.id}
            </button>
          ))}
        </div>
        <span className="hidden text-[10px] uppercase tracking-widest text-dim sm:block">demo</span>
      </div>

      <div className="px-4 pt-3 text-dim">
        <span className="text-ember">$</span> graph.stream(&quot;{trace.title}&quot;)
      </div>

      <ol className="min-h-[190px] space-y-1.5 px-4 py-3" aria-live="polite">
        <AnimatePresence initial={false}>
          {trace.lines.slice(0, count).map((line, i) => (
            <motion.li
              key={`${tab}-${i}`}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35 }}
              className={clsx(
                "grid grid-cols-[14px_82px_1fr] gap-2 rounded",
                line.kind === "block" && "-mx-2 bg-ember/10 px-2 py-0.5",
              )}
            >
              <span className={tone[line.kind]}>{glyph[line.kind]}</span>
              <span className="text-ash">{line.step}</span>
              <span className={line.kind === "block" ? "text-ember" : "text-bone/90"}>{line.msg}</span>
            </motion.li>
          ))}
        </AnimatePresence>
        {!done && (
          <li className="grid grid-cols-[14px_1fr] gap-2 text-dim">
            <span className="animate-blink text-ember">▍</span>
            <span>running…</span>
          </li>
        )}
      </ol>

      <div className="flex items-center justify-between border-t border-line px-4 py-2.5 text-[10px] uppercase tracking-widest text-dim">
        <span>
          {Math.min(count, trace.lines.length)}/{trace.lines.length} nodes
        </span>
        <span className={done ? "text-sage" : "text-ember-soft"}>{done ? "✓ complete" : "● streaming"}</span>
      </div>
    </div>
  );
}
