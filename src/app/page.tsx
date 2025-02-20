import Hero from "@/components/(2) Home/Hero";
import About from "@/components/(2) Home/About";
import MyTools from "@/components/(2) Home/MyTools";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

      <About />

      {/* Divider */}
      <div className="w-full h-[.125rem] my-12 bg-[#1793D1]" />

      <MyTools />
    </>
  );
}
