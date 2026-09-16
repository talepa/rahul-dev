"use client";

import { ArrowUp, ArrowUpRight, Check, Copy, FileText } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { profile } from "@/lib/data";
import { scrollToId } from "@/lib/scroll";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { Magnetic, SplitWords } from "./ui";

const links = [
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedInIcon },
  { label: "GitHub", href: profile.github, icon: GitHubIcon },
  { label: "Résumé", href: profile.resume, icon: ({ className }: { className?: string }) => <FileText className={className} /> },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start center"] });
  // the section slides up over the previous one, its corners flattening as it lands
  const radius = useTransform(scrollYProgress, [0, 1], ["3.5rem", "0rem"]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      style={{ borderTopLeftRadius: radius, borderTopRightRadius: radius }}
      className="relative z-10 overflow-hidden bg-bone text-ink shadow-[0_-40px_120px_-40px_rgba(0,0,0,0.9)]"
    >
      <div className="mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-28">
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em] text-ink/60">
          <span className="text-ember">(06)</span>
          <span>Contact</span>
          <span className="h-px flex-1 bg-ink/15" />
        </div>

        <h2 className="mt-10 text-[clamp(3rem,8.5vw,8rem)] font-semibold leading-[0.86] tracking-[-0.06em]">
          <SplitWords text="Let's build" />
          <br />
          <SplitWords text="something" delay={0.12} className="font-serif font-normal italic tracking-[-0.035em]" />{" "}
          <SplitWords text="useful." delay={0.24} />
        </h2>

        <div className="mt-12 grid gap-10 border-t border-ink/15 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="max-w-md text-lg leading-relaxed text-ink/70">
              Hiring for LLM, RAG or agentic AI work? Or building something where retrieval and guardrails have to be right? My inbox is open.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-7">
            <button
              onClick={copy}
              data-cursor={copied ? "Copied" : "Copy"}
              className="group flex w-full items-center justify-between gap-4 border-b-2 border-ink pb-4 text-left"
            >
              <span className="text-[clamp(1.35rem,3.7vw,3.2rem)] font-medium tracking-[-0.035em] [overflow-wrap:anywhere]">{profile.email}</span>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink text-bone transition-transform duration-300 group-hover:scale-110">
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </span>
            </button>
            <span aria-live="polite" className="sr-only">
              {copied ? "Email address copied" : ""}
            </span>

            <div className="flex flex-wrap items-center gap-8">
              <Magnetic strength={0.3}>
                <a
                  href={`mailto:${profile.email}`}
                  className="grid h-36 w-36 place-items-center rounded-full bg-ember text-center text-sm font-medium text-ink transition-transform duration-500 hover:scale-105 sm:h-44 sm:w-44"
                >
                  <span className="flex flex-col items-center gap-1">
                    Write to me
                    <ArrowUpRight size={20} />
                  </span>
                </a>
              </Magnetic>
              <ul className="flex flex-col gap-2">
                {links.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-3 rounded-full border border-ink/15 py-2 pl-2 pr-5 text-sm font-medium transition-colors duration-300 hover:bg-ink hover:text-bone"
                    >
                      <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-bone transition-colors group-hover:bg-bone group-hover:text-ink">
                        <Icon className="h-4 w-4" />
                      </span>
                      {label}
                      <ArrowUpRight size={14} className="transition-transform duration-500 group-hover:rotate-45" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <footer className="mt-16 flex items-center justify-between gap-4 border-t border-ink/15 pt-8 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/60">
          <span>© {new Date().getFullYear()} Rahul Talepa</span>
          <button onClick={() => scrollToId("top")} className="inline-flex items-center gap-2 transition-colors hover:text-ink">
            Back to top <ArrowUp size={14} />
          </button>
        </footer>
      </div>
    </motion.section>
  );
}
