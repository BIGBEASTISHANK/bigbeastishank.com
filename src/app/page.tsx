import AboutComponent from "@/components/Home/About";
import HeroComponent from "@/components/Home/Hero";
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

      {/* Works */}
      <WorksComponent />
    </div>
  );
}
