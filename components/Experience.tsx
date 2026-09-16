"use client";

import { GraduationCap } from "lucide-react";
import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { education, experience } from "@/lib/data";
import { Reveal, SectionLabel, SplitWords } from "./ui";

function Points({ points }: { points: string[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.6"] });
  const line = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });

  return (
    <ol ref={ref} className="relative pl-8">
      <span aria-hidden className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-line" />
      <motion.span aria-hidden style={{ scaleY: line }} className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-ember" />
      {points.map((point, i) => (
        <li key={i} className="border-b border-line py-5 last:border-0">
          <Reveal className="grid grid-cols-[40px_1fr] gap-3">
            <span className="pt-1.5 font-mono text-xs text-dim">{String(i + 1).padStart(2, "0")}</span>
            <p className="text-lg leading-relaxed text-bone/90">{point}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-ink-2/40 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="02" label="Experience" />
        <h2 className="mt-10 max-w-5xl text-[clamp(2.6rem,6vw,5.6rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          <SplitWords text="Where the models" />{" "}
          <SplitWords text="meet production." delay={0.2} className="font-serif font-normal italic text-ember" />
        </h2>

        {experience.map((job) => (
          <article key={job.company} className="mt-14 grid gap-10 border-t border-line pt-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-32">
                <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ash">
                  {job.current && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-ember/40 bg-ember/10 px-3 py-1 text-ember">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-ember" />
                      Current
                    </span>
                  )}
                  <span>{job.period}</span>
                </div>
                <h3 className="mt-5 text-[clamp(2.4rem,4.6vw,4rem)] font-semibold leading-none tracking-[-0.05em]">{job.company}</h3>
                <p className="mt-3 font-serif text-3xl italic text-bone/85">{job.role}</p>
                <p className="mt-1 text-sm text-ash">{job.location}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ash">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-7">
              <Points points={job.points} />
            </div>
          </article>
        ))}

        <Reveal className="mt-14">
          <div className="grid items-center gap-6 rounded-3xl border border-line bg-ink p-7 sm:grid-cols-[auto_1fr_auto] sm:p-9">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-bone text-ink">
              <GraduationCap size={24} />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">Education · {education.period}</p>
              <h3 className="mt-2 text-2xl font-medium tracking-[-0.02em]">{education.degree}</h3>
              <p className="text-ash">
                {education.school}, {education.location}
              </p>
            </div>
            <div className="sm:text-right">
              <p className="text-5xl font-semibold tracking-[-0.05em]">{education.cgpa}</p>
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-ash">CGPA</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
