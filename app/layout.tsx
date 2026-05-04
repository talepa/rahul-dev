import type { Metadata } from "next"
import { DM_Sans, Fraunces } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "Rahul Talepa | AI Engineer & Data Scientist",
  description:
    "Semantic search, RAG, and production ML — Rahul Talepa builds intelligent systems that ship. Mumbai · Open to collaboration.",
  keywords: [
    "AI Engineer",
    "Machine Learning",
    "RAG",
    "Semantic Search",
    "Data Science",
    "Python",
  ],
  authors: [{ name: "Rahul Talepa", url: "https://linkedin.com/in/rahultalepa/" }],
  openGraph: {
    title: "Rahul Talepa | AI Engineer",
    description:
      "Semantic search, RAG, and production ML grounded in rigorous data science.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-[#0a0a0a] font-sans text-neutral-200 antialiased">
        {children}
      </body>
    </html>
  )
}
