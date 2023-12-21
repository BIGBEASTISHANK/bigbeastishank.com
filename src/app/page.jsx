// Import
import Hero from "@/components/Sections/Hero";
import About from "@/components/Sections/About";
import SectionDivider from "@/components/Subs/SectionDivider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      {/* Hero section */}
      <Hero />

      {/* Divider */}
      <SectionDivider />

      {/* About */}
      <About />
    </main>
  );
}
