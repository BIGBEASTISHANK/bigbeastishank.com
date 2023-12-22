// Import
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import Skills from "@/components/Sections/Skills";
import SectionDivider from "@/components/Subs/SectionDivider";
import Projects from "@/components/Sections/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 h-[5000px]">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
    </main>
  );
}
