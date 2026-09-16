"use client";

import clsx from "clsx";
import { animate, motion, useInView, useMotionValue, useScroll, useTransform, type MotionValue } from "motion/react";
import { useEffect, useRef } from "react";
import { principles, profile, stats } from "@/lib/data";
import { Reveal, SectionLabel, ease } from "./ui";

const statement =
  "I'm Rahul, an AI engineer who turns language models into systems people can trust. I build retrieval that finds the right context, agents that show their reasoning, and guardrails that decide when they're allowed to act.";
const accents = new Set(["trust.", "retrieval", "agents", "guardrails"]);

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <motion.span
      style={{ opacity }}
      className={clsx("mr-[0.24em] inline-block", accents.has(children) && "font-serif font-normal italic text-ember")}
    >
      {children}
    </motion.span>
  );
}

function ScrollStatement() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.5"] });
  const words = statement.split(" ");
  return (
    <p ref={ref} className="text-[clamp(1.7rem,3.6vw,3.1rem)] font-medium leading-[1.08] tracking-[-0.04em]">
      {words.map((word, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {word}
        </Word>
      ))}
    </p>
  );
}

function Counter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numeric = /^\d+(\.\d+)?\+?$/.test(value);
  const target = parseFloat(value);
  const decimals = value.includes(".") ? value.split(".")[1].replace("+", "").length : 0;
  const suffix = value.endsWith("+") ? "+" : "";
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => v.toFixed(decimals) + suffix);

  useEffect(() => {
    if (!inView || !numeric) return;
    const controls = animate(mv, target, { duration: 1.8, ease });
    return () => controls.stop();
  }, [inView, numeric, target, mv]);

  return <span ref={ref}>{numeric ? <motion.span>{text}</motion.span> : value}</span>;
}

export default function About() {
  return (
    <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="01" label="About" />

        <div className="mt-12 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <Reveal>
              <p className="font-mono text-xs uppercase leading-relaxed tracking-[0.18em] text-ash">
                {profile.role}
                <br />
                {profile.location}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-ash">{profile.summary}</p>
            </Reveal>
          </div>
          <div className="lg:col-span-9">
            <ScrollStatement />
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 border-l border-t border-line lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08} className="group relative border-b border-r border-line p-5 sm:p-8">
              <span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-ember transition-transform duration-700 group-hover:scale-x-100" />
              <div className="text-[clamp(2.6rem,5vw,4.6rem)] font-semibold leading-none tracking-[-0.05em]">
                <Counter value={stat.value} />
              </div>
              <p className="mt-4 max-w-[24ch] text-sm leading-relaxed text-ash">{stat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <h3 className="text-[clamp(2.4rem,4.4vw,3.8rem)] font-semibold leading-[0.95] tracking-[-0.045em]">
                How I <span className="font-serif font-normal italic text-ember">build</span>
              </h3>
              <p className="mt-5 max-w-sm text-ash">
                Four rules I follow in every system I ship, from production RAG to the projects I build on my own time.
              </p>
            </div>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {principles.map((p) => (
              <li key={p.k} className="group relative border-t border-line py-5 sm:py-6">
                <span aria-hidden className="absolute -top-px left-0 h-px w-0 bg-ember transition-all duration-700 group-hover:w-full" />
                <Reveal className="grid gap-3 sm:grid-cols-[88px_1fr]">
                  <span className="font-mono text-sm text-ember">{p.k}</span>
                  <div>
                    <h4 className="text-2xl font-medium tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-2 sm:text-[2rem]">
                      {p.title}
                    </h4>
                    <p className="mt-3 max-w-xl leading-relaxed text-ash">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
