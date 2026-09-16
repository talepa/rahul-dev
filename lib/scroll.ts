import type Lenis from "lenis";

type LenisWindow = Window & { __lenis?: Lenis };

export function getLenis() {
  return typeof window === "undefined" ? undefined : (window as LenisWindow).__lenis;
}

export function setLenis(lenis: Lenis | undefined) {
  (window as LenisWindow).__lenis = lenis;
}

export function scrollToId(id: string) {
  const target = id === "top" ? 0 : document.getElementById(id);
  if (target === null) return;
  const lenis = getLenis();
  if (lenis) {
    lenis.scrollTo(target, { duration: 1.4 });
  } else if (typeof target === "number") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
