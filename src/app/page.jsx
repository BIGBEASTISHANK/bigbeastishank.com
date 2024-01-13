import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-neutral-700" />
      <About />
    </>
  );
}
