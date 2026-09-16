"use client";

import clsx from "clsx";
import { ArrowUpRight, Award, BookOpen, FileText } from "lucide-react";
import { motion } from "motion/react";
import { credentials } from "@/lib/data";
import { SectionLabel, SplitWords, ease } from "./ui";

const card = "group relative flex h-full flex-col overflow-hidden rounded-[26px] border p-7 transition-transform duration-500 will-change-transform hover:-translate-y-1.5 sm:p-8";

function Enter({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 44, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.85, ease, delay }}
      className={className}
    >
      {children}
    </motion.article>
  );
}

export default function Beyond() {
  const { paper, badge, book } = credentials;

  return (
    <section id="beyond" className="relative border-t border-line px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="05" label="Beyond the code" />
        <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
          <h2 className="max-w-4xl text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
            <SplitWords text="Published, certified" />{" "}
            <SplitWords text="& printed." delay={0.18} className="font-serif font-normal italic text-ember" />
          </h2>
          <p className="max-w-sm text-ash">
            A peer-reviewed paper, a generative-AI certification, and one book that has nothing to do with engineering.
          </p>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <Enter className={clsx(card, "border-line bg-ink-2 lg:col-span-2")}>
            <div className="flex items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ash">
              <span className="flex items-center gap-2 text-ember">
                <FileText size={14} /> {paper.kicker}
              </span>
              <span>May 2025</span>
            </div>
            <h3 className="mt-5 text-[clamp(1.7rem,2.6vw,2.6rem)] font-semibold leading-[1.02] tracking-[-0.035em]">{paper.title}</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-ash">{paper.summary}</p>

            <dl className="mt-7 grid gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-2">
              {paper.rows.map((row) => (
                <div key={row.k} className="flex items-baseline justify-between gap-4 border-b border-line/60 pb-2">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{row.k}</dt>
                  <dd className="text-right text-sm text-bone/90">{row.v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 font-mono text-[11px] text-dim">{paper.coAuthors}</p>

            <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
              <a
                href={paper.paperUrl}
                target="_blank"
                rel="noreferrer"
                data-cursor="Read"
                className="group/btn inline-flex items-center gap-2 rounded-full bg-bone py-2 pl-5 pr-2 text-sm font-medium text-ink"
              >
                Read the paper
                <span className="grid h-7 w-7 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover/btn:rotate-45">
                  <ArrowUpRight size={13} />
                </span>
              </a>
              <a
                href={paper.certificate}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-bone transition-colors hover:border-bone"
              >
                Certificate
              </a>
              <a
                href={paper.post}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 text-sm text-ash transition-colors hover:border-bone hover:text-bone"
              >
                LinkedIn post <ArrowUpRight size={13} />
              </a>
            </div>
          </Enter>

          <Enter delay={0.12} className={clsx(card, "border-bone bg-bone text-ink")}>
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
              <Award size={14} className="text-ember" /> {badge.kicker}
            </div>
            <div className="mt-6 flex items-start gap-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={badge.image}
                alt=""
                className="h-20 w-20 shrink-0 rounded-xl object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <div>
                <h3 className="text-xl font-semibold leading-tight tracking-[-0.02em]">{badge.title}</h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ember">{badge.issuer}</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-ink/70">{badge.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {badge.skills.map((skill) => (
                <li key={skill} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[11px] text-ink/70">
                  {skill}
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <a
                href={badge.url}
                target="_blank"
                rel="noreferrer"
                data-cursor="Verify"
                className="group/btn inline-flex items-center gap-3 text-sm font-medium"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover/btn:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
                <span className="link-underline">Verify on Credly</span>
              </a>
            </div>
          </Enter>

          <Enter delay={0.2} className={clsx(card, "border-ember bg-ember text-ink lg:col-span-3")}>
            {/* dark wash behind the cover so the artwork reads against the orange */}
            <span aria-hidden className="pointer-events-none absolute -left-24 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-ink/25 blur-[90px]" />
            <span aria-hidden className="pointer-events-none absolute -right-8 -top-20 select-none font-serif text-[15rem] italic leading-none text-ink/10">
              &rdquo;
            </span>

            <div className="relative grid items-center gap-10 lg:grid-cols-12">
              <div className="flex justify-center lg:col-span-4 lg:justify-start">
                <a
                  href={book.store}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="Open"
                  className="group/book relative block w-[190px] shrink-0 sm:w-[220px]"
                  aria-label={`${book.title} — buy a copy`}
                >
                  {/* stacked pages peeking out behind the cover */}
                  <span aria-hidden className="absolute inset-y-2 -right-1.5 rounded-r-md bg-bone/70 shadow-md transition-transform duration-500 group-hover/book:translate-x-1" style={{ width: "14px" }} />
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={book.cover}
                    alt={`Cover of ${book.title} by Rahul Talepa`}
                    width={733}
                    height={1100}
                    loading="lazy"
                    className="relative w-full -rotate-3 rounded-sm shadow-[0_35px_70px_-20px_rgba(0,0,0,0.75)] ring-1 ring-ink/20 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/book:-translate-y-2 group-hover/book:rotate-0 group-hover/book:scale-[1.03]"
                  />
                  <span className="absolute -bottom-3 left-1/2 h-3 w-4/5 -translate-x-1/2 rounded-[50%] bg-ink/25 blur-md" aria-hidden />
                </a>
              </div>

              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone">
                    <BookOpen size={13} /> Published author
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">{book.kicker}</span>
                </div>

                <h3 className="mt-5 font-serif text-[clamp(2.8rem,6vw,4.8rem)] italic leading-[0.95] tracking-[-0.03em]">{book.title}</h3>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/85">{book.summary}</p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={book.store}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="Buy"
                    className="group/btn inline-flex items-center gap-3 rounded-full bg-ink py-2 pl-6 pr-2 text-sm font-medium text-bone"
                  >
                    Get a copy
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-bone text-ink transition-transform duration-500 group-hover/btn:rotate-45">
                      <ArrowUpRight size={15} />
                    </span>
                  </a>
                  <a
                    href={book.post}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/30 px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bone"
                  >
                    Read the post <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </Enter>
        </div>
      </div>
    </section>
  );
}
