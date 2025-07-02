import AboutComponent from "@/components/Home/About";
import HeroComponent from "@/components/Home/Hero";
import SkillsComponent from "@/components/Home/Skills";
import WorksComponent from "@/components/Home/Works";
import HeroBackground from "@/utility/HeroBackground";

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Background */}
      <HeroBackground />

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
