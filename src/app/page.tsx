import HeroComponent from "@/components/Home/Hero";
import SkillsComponent from "@/components/Home/Skills";

export default function Home() {
  return (
    <>
      <HeroComponent />

      <SkillsComponent />

      <div className="h-screen" id={'ji'}/>
    </>
  );
}
