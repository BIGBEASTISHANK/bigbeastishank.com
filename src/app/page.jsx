import Hero from "@/components/Sections/Hero";
import { HorizontalSeprator } from "@/components/Others/Separator";
import About from "@/components/Sections/About";

export default function Home() {
  return (
    <>
      {/* Minimum px-[4%] */}
      <div className="min-h-[8rem]" />
      <Hero customTWClass={"px-[6%] min-h-[82vh]"} />
      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />
      <About customTWClass={"px-[6%] min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]"} />
      <HorizontalSeprator customTWClass="my-10" />
    </>
  );
}
