"use client";

import clsx from "clsx";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useState } from "react";

export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 });
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [down, setDown] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    setEnabled(true);
    document.body.classList.add("has-cursor");

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("a, button, [data-cursor]");
      setHover(Boolean(target));
      setLabel(target?.dataset.cursor ?? null);
    };
    const press = () => setDown(true);
    const release = () => setDown(false);
    const leave = () => {
      x.set(-100);
      y.set(-100);
    };

    window.addEventListener("pointermove", move);
    window.addEventListener("pointerdown", press);
    window.addEventListener("pointerup", release);
    document.documentElement.addEventListener("pointerleave", leave);
    return () => {
      document.body.classList.remove("has-cursor");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      document.documentElement.removeEventListener("pointerleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = label ? 84 : hover ? 54 : 30;

  return (
    <>
      <motion.div style={{ x, y }} className="pointer-events-none fixed left-0 top-0 z-[100]">
        <div className={clsx("h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ember transition-opacity", label && "opacity-0")} />
      </motion.div>
      <motion.div
        style={{ x: sx, y: sy }}
        className={clsx("pointer-events-none fixed left-0 top-0 z-[99]", !label && "mix-blend-difference")}
      >
        <motion.div
          style={{ translateX: "-50%", translateY: "-50%" }}
          animate={{
            width: size,
            height: size,
            scale: down ? 0.85 : 1,
            backgroundColor: label ? "rgba(255,90,31,1)" : "rgba(255,90,31,0)",
            borderColor: label ? "rgba(255,90,31,1)" : hover ? "rgba(236,232,223,0.9)" : "rgba(236,232,223,0.45)",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="flex items-center justify-center rounded-full border"
        >
          {label && (
            <motion.span
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              className="font-mono text-[11px] font-medium uppercase tracking-wider text-ink"
            >
              {label}
            </motion.span>
          )}
        </motion.div>
      </motion.div>
    </>
  );
}
