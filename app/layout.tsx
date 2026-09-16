import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/SmoothScroll";
import { profile } from "@/lib/data";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist" });
const instrument = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

const description =
  "Rahul Talepa is an AI Engineer building production LLM applications, RAG pipelines, multi-agent systems with LangGraph, and multimodal search.";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahul-dev-ecru.vercel.app"),
  title: "Rahul Talepa — AI Engineer",
  description,
  keywords: ["AI Engineer", "LLM", "RAG", "LangGraph", "LangChain", "AI Agents", "Semantic Search", "Vector Databases", "FastAPI", "Mumbai"],
  authors: [{ name: profile.name, url: profile.github }],
  openGraph: { title: "Rahul Talepa — AI Engineer", description, type: "website" },
  twitter: { card: "summary_large_image", title: "Rahul Talepa — AI Engineer", description },
};

export const viewport: Viewport = { themeColor: "#0c0c0b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll />
        <Cursor />
        <div aria-hidden className="grain" />
        {children}
      </body>
    </html>
  );
}
