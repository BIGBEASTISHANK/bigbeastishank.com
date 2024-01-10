import Hero from "@/components/Hero";
import Games from "@/components/Games";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Websites from "@/components/Websites";
import Projects from "@/components/Projects";
import { HorizontalSeprator } from "@/utils/Separator";

export default function Home() {
  return (
    <>
      <Hero customTWClass={"px-[6%] min-h-[82vh]"} />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <About customTWClass="px-[6%] min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Games customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Websites customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Projects customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Contact customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />
    </>
  );
}
