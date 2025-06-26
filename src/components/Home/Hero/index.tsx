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
        <div className="h-full w-full flex px-60">
          {/* Name & basic info */}
          <div className="h-full w-full flex flex-col justify-center items-start">
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

              {/* Buttons */}
              <div className="flex gap-5 text-sm mt-5 ml-1">
                {/* Contact me code */}
                <motion.a
                target="_blank"
                href={"mailto:business@bigbeastishank.com"}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  style={{ backgroundColor: CP.primary.hex }}
                  className="px-3 py-2 rounded-full outline-none cursor-pointer select-none"
                >
                  Contact Me
                </motion.a>

                {/* Download resume */}
                <motion.a
                  target="_blank"
                  href={"/documents/CV.pdf"}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  style={{ backgroundColor: CP.secondary.hex }}
                  className="px-3 py-2 rounded-full outline-none cursor-pointer select-none"
                >
                  Read CV
                </motion.a>
              </div>
            </div>
          </div>

          {/* Intro Code */}
          <div className="h-full w-full flex flex-col justify-center items-end">
            {/* Code */}
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
