import AboutComponent from "@/components/Home/About";
import HeroComponent from "@/components/Home/Hero";
import SkillsComponent from "@/components/Home/Skills";
import WorksComponent from "@/components/Home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Image
        className="absolute -right-55 top-2 sm:-right-90 sm:top-22 md:-right-170 md:-top-75 -z-10 rotate-35 sm:rotate-40 md:rotate-47 rounded-2xl blur-lg transition-all"      
        src={"/image/hero/blueSquare.svg"}
        height={1200}
        width={1200}
        alt="blueSquare"
      />

      {/* Hero */}
      <HeroComponent />

      {/* About */}
      <AboutComponent />

      {/* Skills */}
      <SkillsComponent />

      {/* Works */}
      <WorksComponent />

      <div className="h-screen" id={"jiasd"} />
    </div>
  );
}
