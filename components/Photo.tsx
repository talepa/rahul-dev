"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/lib/data";

/** Portrait from /public/rahul.jpg, with a monogram fallback until the file exists. */
export default function Photo({
  className,
  imgClassName,
  monogramClassName,
}: {
  className?: string;
  /** Classes applied only to the real photo (e.g. filters that shouldn't tint the monogram) */
  imgClassName?: string;
  monogramClassName?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const img = ref.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <span role="img" aria-label="Rahul Talepa" className={clsx("flex items-center justify-center bg-ember text-ink", className)}>
        <span className={clsx("font-serif italic leading-none", monogramClassName)}>RT</span>
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={profile.photo}
      alt="Portrait of Rahul Talepa"
      onError={() => setFailed(true)}
      className={clsx("object-cover", className, imgClassName)}
    />
  );
}
