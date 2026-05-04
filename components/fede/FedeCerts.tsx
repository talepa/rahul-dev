"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { personal } from "@/lib/personal"
import { linkedinCertifications } from "@/lib/certifications-data"
import { fedeLink } from "./fede-theme"

export function FedeCerts() {
  const hasCerts = linkedinCertifications.length > 0

  return (
    <section id="certifications" className="border-t border-neutral-900 bg-[#0c0c0c]">
      <div className="mx-auto max-w-6xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-600">Licenses</p>
            <h2 className="mt-3 font-display text-3xl font-medium text-[#fafaf9] md:text-4xl">Certifications</h2>
          </div>
          <a
            href={personal.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 transition-colors hover:text-[#fafaf9]"
          >
            LinkedIn profile
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>

        {!hasCerts ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-14 rounded-2xl border border-neutral-800 bg-[#111111] p-8 md:p-10"
          >
            <p className="max-w-2xl text-[15px] leading-relaxed text-neutral-400">
              LinkedIn serves &quot;Licenses & certifications&quot; behind a login wall for automated tools, and your
              résumé PDF did not include a dedicated certifications block — so this grid reads from{" "}
              <code className="rounded bg-neutral-900 px-1.5 py-0.5 font-mono text-[12px] text-neutral-300">
                lib/certifications-data.ts
              </code>
              . Open your profile&apos;s credentials list and paste each entry there (name, issuer, dates, optional
              credential URL). They will render here automatically.
            </p>
            <p className="mt-6 text-sm text-neutral-500">
              Profile:{" "}
              <a href={personal.linkedinUrl} target="_blank" rel="noopener noreferrer" className={fedeLink()}>
                {personal.linkedinPath}
              </a>
            </p>
          </motion.div>
        ) : (
          <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {linkedinCertifications.map((c, i) => (
              <motion.li
                key={`${c.name}-${c.issuer}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="rounded-2xl border border-neutral-800 bg-[#111111] p-6 transition-colors hover:border-neutral-600"
              >
                <p className="font-display text-lg font-medium leading-snug text-[#fafaf9]">{c.name}</p>
                <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-neutral-500">{c.issuer}</p>
                {(c.issued || c.expires) && (
                  <p className="mt-4 text-xs text-neutral-600">
                    {c.issued ? <>Issued {c.issued}</> : null}
                    {c.issued && c.expires ? " · " : null}
                    {c.expires ? <>Expires {c.expires}</> : null}
                  </p>
                )}
                {c.credentialUrl ? (
                  <a
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-300 hover:text-[#fafaf9]"
                  >
                    Verify
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                ) : null}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </section>
  )
}
