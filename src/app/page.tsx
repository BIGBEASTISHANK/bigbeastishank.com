import HeroComponent from "@/components/Home/(1) Hero";
import AboutComponent from "@/components/Home/(2) About";
import ProjectsComponent from "@/components/Home/(3) Projects";
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

      {/* Works */}
      <ProjectsComponent />
    </div>
  );
}
