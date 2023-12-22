// Import
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import SectionDivider from "@/components/Subs/SectionDivider";
import Projects from "@/components/Sections/Projects";
import Contact from "@/components/Sections/Contact";
import Status from "@/components/Sections/Status";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider/>
      <Status/>
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
}
