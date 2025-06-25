"use client";
import { RootNavbarComponent } from "@/components/Layout/Navbar";

export default function HeroComponent() {
  return (
    <div id="hero" className="h-[100dvh] flex flex-col ">
      {/* Main hero content */}
      <div className="flex-auto">
        
      </div>

      {/* Navbar */}
      <div className="flex justify-center items-center">
        <RootNavbarComponent />
      </div>
    </div>
  );
}
