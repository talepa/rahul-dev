import type { ReactNode } from "react"

type Props = {
  id: string
  kicker: string
  title: ReactNode
  subtitle?: string
  children: ReactNode
}

export function AscendSection({ id, kicker, title, subtitle, children }: Props) {
  return (
    <section id={id} className="relative z-10 border-t border-white/[0.06] bg-[#030304]/40">
      <div className="mx-auto max-w-6xl px-5 py-24 md:px-8 md:py-32">
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.35em] text-violet-400/95">{kicker}</p>
        <h2 className="font-ascend mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.06] tracking-tight text-white md:text-5xl lg:text-[3.35rem]">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-400">{subtitle}</p>
        ) : null}
        <div className="mt-16">{children}</div>
      </div>
    </section>
  )
}
