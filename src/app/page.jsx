import Hero from "@/components/Sections/Hero";
import { HorizontalSeprator } from "@/components/Others/Separator";

export default function Home() {
  return (
    <>
      {/* Minimum px-[4%] */}
      <div className="min-h-[8rem]"/>
      <Hero customTWClass={"px-[6%] min-h-[82vh]"} />
      <HorizontalSeprator customTWClass={"mt-10"} />
    </>
  );
}
