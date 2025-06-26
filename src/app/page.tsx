import AboutComponent from "@/components/Home/About";
import HeroComponent from "@/components/Home/Hero";
import SkillsComponent from "@/components/Home/Skills";
import WorksComponent from "@/components/Home/Works";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Image
        className="absolute -right-170 -top-75 -z-10 rotate-47 rounded-2xl"
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
