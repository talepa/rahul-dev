import About from "@/components/About";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Nav from "@/components/Nav";
import Stack from "@/components/Stack";
import Work from "@/components/Work";
import { marquee } from "@/lib/data";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee items={marquee} />
        <About />
        <Experience />
        <Work />
        <Stack />
        <Beyond />
        <Contact />
      </main>
    </>
  );
}
