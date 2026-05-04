/**
 * Licenses & certifications — mirror your LinkedIn profile:
 * Profile → Add profile section → Recommended → Licenses & certifications (or edit existing).
 *
 * LinkedIn serves profiles behind an auth wall for automated tools, and the PDF résumé
 * linked in `lib/personal.ts` did not include a certifications section, so this list is
 * maintained manually. Paste each credential below (name, issuer, dates, optional verify URL).
 */

export type LinkedinCertification = {
  name: string
  issuer: string
  issued?: string
  expires?: string
  credentialUrl?: string
}

export const linkedinCertifications: LinkedinCertification[] = []
