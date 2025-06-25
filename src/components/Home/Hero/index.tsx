import { RootNavbarComponent } from "@/components/Layout/Navbar";

export default function HeroComponent() {
  return (
    <div id="hero" className="h-[100dvh] flex flex-col ">
      <div className="flex-auto"></div>
      <div className="flex justify-center items-center">
        <RootNavbarComponent />
      </div>
    </div>
  );
}
