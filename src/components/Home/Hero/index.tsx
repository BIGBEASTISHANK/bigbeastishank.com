"use client";
import { motion } from "motion/react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { RootNavbarComponent } from "@/components/Layout/Navbar";
import IntroCodeComponent from "./IntroCode";

export default function HeroComponent() {
  return (
    <div
      id="hero"
      className="h-[100dvh] flex flex-col relative overflow-hidden"
    >
      {/* Main hero content */}
      <div className="flex-auto">
        <div className="h-full w-full flex px-20">
          {/* Name & basic info */}
          <div className="order-1 h-full w-full flex flex-col justify-center items-center">
            <div className="flex flex-col">
              {/* Hello & Name */}
              <h3 className="ml-1" style={{ color: CP.text.secondary.hex }}>
                Hello I'm
              </h3>
              <h1 className="text-6xl font-bold">BIG BEAST ISHANK</h1>

              {/* Minor text */}
              <div className="flex flex-col">
                <h2 className="ml-1" style={{ color: CP.text.secondary.hex }}>
                  Student | Developer | Open Source & Linux lover
                </h2>
              </div>
            </div>
          </div>

          {/* Seprator */}
          <div className="order-2 h-full w-full" />

          {/* Intro Code */}
          <div className="order-3 h-full w-full flex flex-col justify-center items-center">
            <IntroCodeComponent />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center items-center">
        <RootNavbarComponent />
      </div>
    </div>
  );
}
