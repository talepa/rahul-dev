"use client";

import clsx from "clsx";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { nav, profile } from "@/lib/data";
import { getLenis, scrollToId } from "@/lib/scroll";
import { GitHubIcon, LinkedInIcon } from "./Icons";
import { ease } from "./ui";

/** "Intro" plus every section, so the capsule and rail can address the whole page. */
const sections = [{ id: "top", label: "Intro" }, ...nav];

export default function Nav() {
  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });
  // motion value -> no React re-render per scroll frame
  const percent = useTransform(scrollYProgress, (v) => String(Math.round(v * 100)).padStart(2, "0"));

  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("top");
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const capsuleRef = useRef<HTMLDivElement>(null);

  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));
  const active = sections[activeIndex];

  useMotionValueEvent(scrollY, "change", (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 40);
    setHidden(v > prev && v > 480);
  });

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter((el): el is HTMLElement => Boolean(el));
    const visible = new Set<HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(el);
          else visible.delete(el);
        }
        if (!visible.size) return;
        // when several sections overlap the band, take the one nearest the viewport centre
        const middle = window.innerHeight / 2;
        let best: HTMLElement | null = null;
        let bestDistance = Infinity;
        for (const el of visible) {
          const rect = el.getBoundingClientRect();
          const distance = Math.abs(rect.top + rect.height / 2 - middle);
          if (distance < bestDistance) {
            bestDistance = distance;
            best = el;
          }
        }
        if (best) setActiveId(best.id);
      },
      { rootMargin: "-40% 0px -45% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const lenis = getLenis();
    if (menu) lenis?.stop();
    else lenis?.start();
  }, [menu]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      setMenu(false);
    };
    const onClick = (e: MouseEvent) => {
      if (capsuleRef.current && !capsuleRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("click", onClick);
    };
  }, []);

  const go = (id: string) => {
    setOpen(false);
    setMenu(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden && !open && !menu ? "-130%" : "0%" }}
        transition={{ duration: 0.55, ease }}
        className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4"
      >
        <div
          className={clsx(
            "mx-auto flex max-w-[1400px] items-center justify-between gap-4 rounded-full border p-2 transition-[background-color,border-color] duration-500",
            scrolled || open || menu ? "border-line bg-ink/75 backdrop-blur-xl" : "border-transparent",
          )}
        >
          <button onClick={() => go("top")} className="flex items-center gap-3" aria-label="Back to top">
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-bone font-serif text-xl italic leading-none text-ink">
              R
              <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-ember ring-2 ring-ink" />
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              Rahul Talepa <span className="text-dim">/ AI Engineer</span>
            </span>
          </button>

          {/* status capsule: where you are + how far, expands into the full map */}
          <div ref={capsuleRef} className="relative hidden md:block" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <button
              onClick={() => setOpen((o) => !o)}
              aria-expanded={open}
              aria-haspopup="menu"
              className="flex items-center gap-3 rounded-full border border-line bg-ink-2/70 py-1.5 pl-1.5 pr-4 transition-colors duration-300 hover:border-ash/50"
            >
              <span className="relative grid h-8 w-8 shrink-0 place-items-center">
                <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90" aria-hidden>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="currentColor" strokeWidth="2" className="text-line" />
                  <motion.circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    stroke="#ff5a1f"
                    strokeWidth="2"
                    strokeLinecap="round"
                    style={{ pathLength: progress }}
                  />
                </svg>
                <motion.span className="font-mono text-[9px] text-ash">{percent}</motion.span>
              </span>

              <span className="relative h-5 w-[116px] overflow-hidden text-left">
                <AnimatePresence initial={false} mode="popLayout">
                  <motion.span
                    key={active.id}
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-110%", opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="absolute inset-0 flex items-center gap-2"
                  >
                    <span className="font-mono text-[11px] text-ember">({String(activeIndex).padStart(2, "0")})</span>
                    <span className="text-sm">{active.label}</span>
                  </motion.span>
                </AnimatePresence>
              </span>

              <ChevronDown size={14} className={clsx("text-dim transition-transform duration-300", open && "rotate-180")} />
            </button>

            <AnimatePresence>
              {open && (
                <motion.div
                  role="menu"
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.25, ease }}
                  className="absolute left-0 top-[calc(100%+10px)] w-[268px] origin-top rounded-2xl border border-line bg-ink/95 p-1.5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl"
                >
                  {sections.map((s, i) => (
                    <button
                      key={s.id}
                      role="menuitem"
                      onClick={() => go(s.id)}
                      className={clsx(
                        "group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-200",
                        activeId === s.id ? "bg-bone text-ink" : "text-ash hover:bg-ink-3 hover:text-bone",
                      )}
                    >
                      <span className={clsx("font-mono text-[11px]", activeId === s.id ? "text-ink/50" : "text-dim")}>
                        {String(i).padStart(2, "0")}
                      </span>
                      <span className="text-sm">{s.label}</span>
                      <ArrowUpRight size={13} className="ml-auto opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`mailto:${profile.email}`}
              className="group hidden items-center gap-2 rounded-full bg-ember py-2 pl-4 pr-2 text-sm font-medium text-ink transition-transform duration-300 hover:scale-[1.03] sm:inline-flex"
            >
              Let&apos;s talk
              <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-bone transition-transform duration-500 group-hover:rotate-45">
                <ArrowUpRight size={14} />
              </span>
            </a>
            <button
              onClick={() => setMenu((o) => !o)}
              aria-label={menu ? "Close menu" : "Open menu"}
              aria-expanded={menu}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-ink-2 md:hidden"
            >
              <span className="relative block h-3 w-5">
                <span className={clsx("absolute left-0 h-px w-5 bg-bone transition-all duration-500", menu ? "top-1.5 rotate-45" : "top-0")} />
                <span className={clsx("absolute left-0 h-px w-5 bg-bone transition-all duration-500", menu ? "top-1.5 -rotate-45" : "top-3")} />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* tick rail: jump anywhere, and see where you are without looking up */}
      <nav
        aria-label="Sections"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3.5 lg:flex"
      >
        {sections.map((s) => (
          <button key={s.id} onClick={() => go(s.id)} className="group flex items-center gap-3" aria-label={`Go to ${s.label}`}>
            <span className="pointer-events-none translate-x-1 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-ash opacity-0 mix-blend-difference transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
              {s.label}
            </span>
            <span
              className={clsx(
                "h-px transition-all duration-500",
                activeId === s.id ? "w-9 bg-ember" : "w-4 bg-ash/50 group-hover:w-6 group-hover:bg-ash",
              )}
            />
          </button>
        ))}
      </nav>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 34px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 34px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 34px)" }}
            transition={{ duration: 0.75, ease }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-bone px-6 pb-10 pt-28 text-ink md:hidden"
          >
            <ul>
              {nav.map((item, i) => (
                <li key={item.id} className="overflow-hidden border-b border-ink/15">
                  <motion.button
                    initial={{ y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ delay: 0.2 + i * 0.06, duration: 0.7, ease }}
                    onClick={() => go(item.id)}
                    className="flex w-full items-baseline justify-between py-3.5 text-left"
                  >
                    <span className="font-serif text-4xl italic">{item.label}</span>
                    <span className="font-mono text-xs text-ink/50">0{i + 1}</span>
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6, ease }}
              className="space-y-5"
            >
              <a href={`mailto:${profile.email}`} className="block text-lg font-medium underline decoration-ember underline-offset-4">
                {profile.email}
              </a>
              <div className="flex gap-3">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center rounded-full bg-ink text-bone">
                  <LinkedInIcon />
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center rounded-full bg-ink text-bone">
                  <GitHubIcon />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
