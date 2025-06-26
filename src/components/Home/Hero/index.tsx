"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { RootNavbarComponent } from "@/components/Layout/Navbar";

export default function HeroComponent() {
  return (
    <div id="hero" className="h-[100dvh] flex flex-col ">
      {/* Main hero content */}
      <div className="flex-auto">
        <div className="h-full w-full flex px-20">
          {/* Order 1 */}
          <div className="order-1 h-full w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
              <h3 style={{ color: CP.text.secondary.hex }}>Hello I'm</h3>

              <div className="flex flex-col gap-1">
                <h1 className="text-6xl font-bold">BIG BEAST ISHANK</h1>
                <div
                  className="flex flex-col gap-0"
                  style={{ color: CP.text.tertiary.hex }}
                >
                  <h2>Game & Full Stack Web Developer</h2>
                  <h2>Network & Server Administrator</h2>
                  <h2>Pentester | AI/ML | DSA</h2>
                </div>
              </div>
            </div>
          </div>

          {/* Order 2 */}
          <div className="order-2 h-full w-full" />

          {/* Order 3 */}
          <div className="order-3 h-full w-full"></div>
        </div>
      </div>

      {/* Navbar */}
      <div className="flex justify-center items-center">
        <RootNavbarComponent />
      </div>
    </div>
  );
}
