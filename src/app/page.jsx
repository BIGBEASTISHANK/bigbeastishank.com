"use client";
import Hero from "@/components/Sections/Hero";
import Games from "@/components/Sections/Games";
import About from "@/components/Sections/About";
import Websites from "@/components/Sections/Websites";
import Projects from "@/components/Sections/Projects";
import { HorizontalSeprator } from "@/components/Others/Separator";

export default function Home() {
  return (
    <>
      {/* Minimum px-[4%] */}
      <div className="min-h-[8rem]" />

      <Hero customTWClass={"px-[6%] min-h-[82vh]"} />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <About customTWClass="px-[6%] min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Games customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Websites customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />

      <HorizontalSeprator customTWClass="mt-10 mb-[7rem]" />

      <Projects customTWClass="projectW:px-12 sm:px-[6rem] px-12 min-h-[82vh] md:scroll-mt-[8rem] scroll-mt-[7rem]" />
    </>
  );
}
