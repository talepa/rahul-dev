"use client";

import clsx from "clsx";
import { motion } from "motion/react";
import { useRef, type PointerEvent, type ReactNode } from "react";
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
            The tools I use day to day, grouped by what they&apos;re for.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {stack.map((group, i) => (
            <SpotCard
              key={group.group}
              delay={0.06 * i}
              className={clsx("p-6 sm:p-7", i < 2 ? "lg:col-span-3" : "lg:col-span-2", i === stack.length - 1 && "md:col-span-2 lg:col-span-2")}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-medium tracking-[-0.02em]">{group.group}</h3>
                  <p className="mt-1 text-sm text-ash">{group.blurb}</p>
                </div>
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
