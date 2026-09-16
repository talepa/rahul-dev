"use client";

import clsx from "clsx";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";
import AgentTrace from "./AgentTrace";
import Photo from "./Photo";
import { Magnetic, ease } from "./ui";

function Letters({ text, delay, className }: { text: string; delay: number; className?: string }) {
  return (
    <span className={clsx("inline-flex overflow-hidden pr-[0.1em]", className)}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ delay: delay + i * 0.045, duration: 1.1, ease }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const nameY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative overflow-hidden px-4 pb-12 pt-24 sm:px-6 sm:pt-28">
      <div aria-hidden className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_50%_35%,black_10%,transparent_70%)]" />
      <div aria-hidden className="absolute -top-56 left-1/2 h-[560px] w-[900px] max-w-[160vw] -translate-x-1/2 rounded-full bg-ember/[0.09] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ash"
        >
          <span className="flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-ember" />
              <span className="relative h-2 w-2 rounded-full bg-ember" />
            </span>
            Now — RAG &amp; search at Stuvio Digital
          </span>
          <span className="hidden sm:inline">Mumbai, India</span>
        </motion.div>

        <div className="mt-10 grid items-end gap-10 lg:grid-cols-12 lg:gap-12">
          <motion.div style={{ y: nameY }} className="lg:col-span-7">
            <h1 className="font-semibold leading-[0.84] tracking-[-0.06em] text-[clamp(3.6rem,10vw,8.8rem)]">
              <span className="sr-only">Rahul Talepa, AI Engineer</span>
              <span aria-hidden className="block">
                <Letters text="Rahul" delay={0.15} className="pb-[0.08em]" />
              </span>
              <span aria-hidden className="flex items-end">
                <Letters text="Talepa" delay={0.4} className="-mb-[0.19em] pb-[0.26em]! font-serif font-normal italic tracking-[-0.035em]" />
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.1, type: "spring", stiffness: 260, damping: 14 }}
                  className="mb-[0.12em] inline-block h-[0.12em] w-[0.12em] rounded-full bg-ember"
                />
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.9, ease }}
            >
              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ember">AI Engineer — LLM systems</p>
              <p className="mt-4 max-w-xl text-xl leading-snug tracking-[-0.02em] text-bone sm:text-2xl">{profile.tagline}</p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Magnetic>
                  <button
                    onClick={() => scrollToId("work")}
                    className="group inline-flex items-center gap-3 rounded-full bg-bone py-2 pl-6 pr-2 text-sm font-medium text-ink"
                  >
                    See the work
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </Magnetic>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm text-bone transition-colors duration-300 hover:border-bone"
                >
                  Résumé <ArrowDown size={14} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div style={{ y: photoY }} className="lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[380px] lg:ml-auto lg:mr-0">
              <span aria-hidden className="absolute -inset-3 rounded-[34px] border border-line" />
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{ delay: 0.55, duration: 1.3, ease }}
                className="group relative overflow-hidden rounded-[26px] border border-line bg-ink-2"
              >
                <div className="aspect-[960/1088] w-full">
                  <Photo
                    className="h-full w-full"
                    imgClassName="h-full w-full grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0"
                    monogramClassName="text-[6rem]"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-ink via-ink/70 to-transparent p-5 pt-16">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">Rahul Talepa</p>
                    <p className="text-sm text-bone">AI Engineer · Mumbai</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-ember">2026</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: fade }}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease }}
          className="mt-12 grid gap-8 border-t border-line pt-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <AgentTrace />
          </div>
          <div className="flex flex-col justify-between gap-6 lg:col-span-4 lg:col-start-9">
            <dl className="grid grid-cols-2 gap-6 font-mono text-[11px] uppercase tracking-[0.18em] lg:grid-cols-1">
              <div>
                <dt className="text-dim">Focus</dt>
                <dd className="mt-1 text-bone">RAG · Agents · Retrieval</dd>
              </div>
              <div>
                <dt className="text-dim">Currently</dt>
                <dd className="mt-1 text-bone">Stuvio Digital</dd>
              </div>
            </dl>
            <button
              onClick={() => scrollToId("about")}
              className="group hidden items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ash transition-colors hover:text-bone lg:flex"
            >
              Scroll
              <span className="relative h-12 w-px overflow-hidden bg-line">
                <motion.span
                  className="absolute inset-x-0 top-0 h-1/2 bg-ember"
                  animate={{ y: ["-100%", "220%"] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
