import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rahul Talepa | AI Engineer Portfolio",
  description: "AI Engineer specializing in Machine Learning, LLM Engineering, and Semantic Search. Building intelligent systems that think, learn, and scale.",
  keywords: ["AI Engineer", "Machine Learning", "LLM", "RAG", "Semantic Search", "Data Science"],
  authors: [{ name: "Rahul Talepa" }],
  openGraph: {
    title: "Rahul Talepa | AI Engineer",
    description: "Building intelligent systems that think, learn, and scale.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        {children}
      </body>
    </html>
  );
}
