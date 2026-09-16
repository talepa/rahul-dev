"use client";

import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { motion, useInView, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { flagships, lab, profile, type Flagship } from "@/lib/data";
import { useMediaQuery } from "@/lib/hooks";
import { Reveal, SectionLabel, SplitWords, ease } from "./ui";

const themes = [
  {
    card: "border-line bg-ink-2 text-bone",
    muted: "text-ash",
    chip: "border-line text-ash",
    panel: "border-line bg-ink/70",
    node: "border-line bg-ink-2",
    line: "bg-line",
    bullet: "bg-ember",
    button: "bg-bone text-ink",
    gate: "border-ember bg-ember text-ink",
    pulse: "bg-ember",
  },
  {
    card: "border-bone bg-bone text-ink",
    muted: "text-ink/60",
    chip: "border-ink/15 text-ink/70",
    panel: "border-ink/10 bg-ink/[0.04]",
    node: "border-ink/20 bg-bone",
    line: "bg-ink/15",
    bullet: "bg-ember",
    button: "bg-ink text-bone",
    gate: "border-ember bg-ember text-ink",
    pulse: "bg-ember",
  },
  {
    card: "border-ember bg-ember text-ink",
    muted: "text-ink/70",
    chip: "border-ink/20 text-ink/80",
    panel: "border-ink/15 bg-ink/[0.06]",
    node: "border-ink/25 bg-ember",
    line: "bg-ink/20",
    bullet: "bg-ink",
    button: "bg-ink text-bone",
    gate: "border-ink bg-ink text-bone",
    pulse: "bg-ink",
  },
];

type Theme = (typeof themes)[number];

function Pipeline({ steps, t }: { steps: Flagship["pipeline"]; t: Theme }) {
  const ref = useRef<HTMLOListElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <div className={clsx("h-full rounded-2xl border p-5 sm:p-6", t.panel)}>
      <div className={clsx("mb-4 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em]", t.muted)}>
        <span>Pipeline</span>
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" />
          graph
        </span>
      </div>
      <ol ref={ref} className="relative">
        <motion.span
          aria-hidden
          className={clsx("absolute bottom-5 left-[15.5px] top-5 w-px origin-top", t.line)}
          initial={{ scaleY: 0 }}
          animate={inView ? { scaleY: 1 } : undefined}
          transition={{ duration: 1.4, ease }}
        />
        {inView && (
          <motion.span
            aria-hidden
            className={clsx("absolute left-[12px] h-2 w-2 rounded-full", t.pulse)}
            initial={{ top: "6%", opacity: 0 }}
            animate={{ top: ["6%", "90%"], opacity: [0, 1, 1, 0] }}
            transition={{ delay: 1.4, duration: 3, repeat: Infinity, repeatDelay: 0.6, ease: "easeInOut" }}
          />
        )}
        {steps.map((step, k) => (
          <motion.li
            key={step.label}
            initial={{ opacity: 0, x: 14 }}
            animate={inView ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.2 + k * 0.12, duration: 0.6, ease }}
            className="relative flex items-center gap-4 py-2"
          >
            <span
              className={clsx(
                "relative z-10 grid h-8 w-8 shrink-0 place-items-center border font-mono text-[10px]",
                step.gate ? clsx("rotate-45 rounded-md", t.gate) : clsx("rounded-full", t.node),
              )}
            >
              <span className={step.gate ? "-rotate-45" : undefined}>{String(k + 1).padStart(2, "0")}</span>
            </span>
            <div className="flex min-w-0 flex-1 flex-wrap items-baseline justify-between gap-x-3">
              <span className="text-[15px] font-medium">{step.label}</span>
              <span className={clsx("font-mono text-[11px]", t.muted)}>{step.note}</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

function ProjectCard({
  project,
  i,
  total,
  progress,
  stacked,
}: {
  project: Flagship;
  i: number;
  total: number;
  progress: MotionValue<number>;
  stacked: boolean;
}) {
  const t = themes[i % themes.length];
  const scale = useTransform(progress, [i / total, 1], [1, 1 - (total - 1 - i) * 0.05]);

  return (
    <div className="stack:sticky stack:top-0 stack:flex stack:h-[78vh] stack:items-center">
      <motion.article
        style={stacked ? { scale, top: `${i * 26}px` } : undefined}
        className={clsx(
          "relative w-full origin-top overflow-hidden rounded-[28px] border p-6 sm:p-10 lg:p-12",
          "shadow-[0_-30px_80px_-40px_rgba(0,0,0,0.8)]",
          t.card,
        )}
      >
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="flex flex-col lg:col-span-7">
            <div className={clsx("flex flex-wrap items-center justify-between gap-2 font-mono text-xs uppercase tracking-[0.18em]", t.muted)}>
              <span>
                {project.index} / {String(total).padStart(2, "0")}
              </span>
              <span>{project.kicker}</span>
            </div>
            <h3 className="mt-5 text-[clamp(2.2rem,4.4vw,4.2rem)] font-semibold leading-[0.95] tracking-[-0.05em]">{project.name}</h3>
            <p className={clsx("mt-5 max-w-2xl leading-relaxed sm:text-lg", t.muted)}>{project.summary}</p>
            <ul className="mt-6 space-y-2.5">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3 text-[15px] leading-snug">
                  <span className={clsx("mt-[7px] h-1.5 w-1.5 shrink-0 rotate-45", t.bullet)} />
                  {h}
                </li>
              ))}
            </ul>
            <ul className="mt-7 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <li key={s} className={clsx("rounded-full border px-3 py-1 font-mono text-[11px]", t.chip)}>
                  {s}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex items-end gap-6 pt-8">
              <a href={project.repo} target="_blank" rel="noreferrer" data-cursor="Code" className="group inline-flex items-center gap-3 text-sm font-medium">
                <span className={clsx("grid h-11 w-11 place-items-center rounded-full transition-transform duration-500 group-hover:rotate-45", t.button)}>
                  <ArrowUpRight size={18} />
                </span>
                <span className="link-underline">View on GitHub</span>
              </a>
              <div className="ml-auto text-right">
                <div className="text-4xl font-semibold leading-none tracking-[-0.05em] sm:text-5xl">{project.metric.value}</div>
                <div className={clsx("mt-1 font-mono text-[11px] uppercase tracking-[0.18em]", t.muted)}>{project.metric.label}</div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block lg:col-span-5">
            <Pipeline steps={project.pipeline} t={t} />
          </div>
        </div>
      </motion.article>
    </div>
  );
}

function Lab() {
  return (
    <div className="mt-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">The lab</p>
          <h3 className="mt-3 text-[clamp(2.2rem,4.2vw,3.6rem)] font-semibold leading-none tracking-[-0.045em]">
            Earlier <span className="font-serif font-normal italic">ML &amp; data</span> work
          </h3>
        </div>
        <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 text-sm text-ash hover:text-bone">
          All repositories <ArrowUpRight size={14} />
        </a>
      </div>
      <ul className="mt-10 grid border-t border-line lg:grid-cols-2 lg:gap-x-10">
        {lab.map((p) => (
          <li key={p.name}>
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              data-cursor="Open"
              className="group relative grid grid-cols-[1fr_auto] items-center gap-4 overflow-hidden border-b border-line px-2 py-5 sm:px-4"
            >
              <span aria-hidden className="absolute inset-0 origin-bottom scale-y-0 bg-bone transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.2,1)] group-hover:scale-y-100" />
              <span className="relative min-w-0">
                <span className="block text-lg font-medium tracking-[-0.02em] transition-colors group-hover:text-ink sm:text-xl">{p.name}</span>
                <span className="mt-1 block font-mono text-[11px] uppercase tracking-[0.14em] text-ash transition-colors group-hover:text-ink/60">
                  {p.area} · {p.result}
                </span>
              </span>
              <ArrowUpRight className="relative shrink-0 text-ash transition-all duration-500 group-hover:rotate-45 group-hover:text-ink" size={20} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Work() {
  const container = useRef<HTMLDivElement>(null);
  const stacked = useMediaQuery("(min-width: 1024px) and (min-height: 760px)");
  const { scrollYProgress } = useScroll({ target: container, offset: ["start start", "end end"] });

  return (
    <section id="work" className="relative border-t border-line px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="03" label="Selected work" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-5xl text-[clamp(2.8rem,6.6vw,6.4rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            <SplitWords text="Systems that" />{" "}
            <SplitWords text="retrieve, reason & refuse." delay={0.15} className="font-serif font-normal italic text-ember" />
          </h2>
          <Reveal>
            <p className="max-w-sm text-ash">
              Three projects I designed and built on my own, each testing a different way to make LLM output dependable.
            </p>
          </Reveal>
        </div>

        <div ref={container} className="mt-16 space-y-6 stack:mt-4 stack:space-y-0">
          {flagships.map((project, i) => (
            <ProjectCard key={project.slug} project={project} i={i} total={flagships.length} progress={scrollYProgress} stacked={stacked} />
          ))}
        </div>

        <Lab />
      </div>
    </section>
  );
}
