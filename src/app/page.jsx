import Hero from "@/components/Hero";
import About from "@/components/About";

export default function Home() {
  return (
    <>
      <Hero />
      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#4e4e4e]" />
      <About />
    </>
  );
}
