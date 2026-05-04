import { cn } from "@/lib/utils"

type Props = {
  number: string
  kicker: string
  title: string
  subtitle?: string
  className?: string
  dark?: boolean
}

export function SectionHeader({
  number,
  kicker,
  title,
  subtitle,
  className,
  dark,
}: Props) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      <p
        className={cn(
          "mb-3 font-mono text-xs font-medium tracking-[0.25em]",
          dark ? "text-white/50" : "text-neutral-400"
        )}
      >
        {number}
      </p>
      <p
        className={cn(
          "mb-4 text-sm font-medium uppercase tracking-[0.15em]",
          dark ? "text-white/70" : "text-neutral-500"
        )}
      >
        {kicker}
      </p>
      <h2
        className={cn(
          "font-display max-w-3xl text-3xl font-semibold leading-[1.08] tracking-tight text-balance md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-neutral-900"
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-base leading-relaxed md:text-lg",
            dark ? "text-white/65" : "text-neutral-600"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}
