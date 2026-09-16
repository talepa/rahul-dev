"use client";

import clsx from "clsx";
import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from "motion/react";
import { useRef } from "react";
import { Spark } from "./Icons";

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

/** Infinite ticker whose speed, direction and skew respond to scroll velocity. */
export default function Marquee({ items, speed = 1.6 }: { items: string[]; speed?: number }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const velocity = useSpring(useVelocity(scrollY), { damping: 50, stiffness: 400 });
  const factor = useTransform(velocity, [0, 1000], [0, 4], { clamp: false });
  const skew = useTransform(velocity, [-2500, 2500], [7, -7]);
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const direction = useRef(-1);

  useAnimationFrame((_, delta) => {
    let moveBy = direction.current * speed * (delta / 1000);
    const f = factor.get();
    if (f < 0) direction.current = 1;
    else if (f > 0) direction.current = -1;
    moveBy += direction.current * Math.abs(moveBy) * Math.abs(f);
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative overflow-hidden border-y border-line bg-ink py-4 sm:py-5" aria-label={items.join(", ")}>
      <motion.div style={{ x, skewX: skew }} className="flex w-max whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} aria-hidden className="flex shrink-0 items-center">
            {items.map((item, i) => (
              <span
                key={item}
                className="flex items-center gap-5 pr-5 text-[clamp(1.35rem,2.4vw,2rem)] font-semibold leading-none tracking-[-0.03em] sm:gap-7 sm:pr-7"
              >
                <span className={clsx(i % 2 === 1 && "text-outline font-serif font-normal italic tracking-[-0.02em]")}>{item}</span>
                <Spark className="h-[0.38em] w-[0.38em] text-ember" />
              </span>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
