import About from "@/components/About";
import Beyond from "@/components/Beyond";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Stack from "@/components/Stack";
import Work from "@/components/Work";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
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
