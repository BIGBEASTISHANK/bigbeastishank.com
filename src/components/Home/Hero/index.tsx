"use client";
import { motion } from "motion/react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { RootNavbarComponent } from "@/components/Layout/Navbar";
import IntroCodeComponent from "@/components/Home/Hero/IntroCode";

export default function HeroComponent() {
  return (
    <div
      id="hero"
      className="h-[100dvh] flex flex-col relative overflow-hidden"
    >
      {/* Main hero content */}
      <div className="flex-auto">
        <div className="h-full w-full flex xl:flex-row flex-col 2xl:px-30 xl:px-10 px-5 justify-center">
          {/* Name & basic info */}
          <div className="h-full w-full flex flex-col justify-center xl:items-start items-center">
            <div className="flex flex-col">
              {/* Hello & Name */}
              <motion.h3
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="ml-1 sm:text-base text-sm"
                style={{ color: CP.text.secondary.hex }}
              >
                Hello I'm
              </motion.h3>

              <motion.h1
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="md:text-6xl sm:text-5xl text-4xl font-bold"
              >
                BIG BEAST ISHANK
              </motion.h1>

              {/* Minor text */}
              <div className="flex flex-col">
                <motion.h2
                  initial={{ opacity: 0, x: -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="ml-1 sm:text-base text-sm"
                  style={{ color: CP.text.secondary.hex }}
                >
                  Student | Developer | Linux & Open Source lover
                </motion.h2>
              </div>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1 }}
                className="flex gap-5 sm:text-sm text-xs mt-5 ml-1"
              >
                {/* Contact me code */}
                <motion.a
                  target="_blank"
                  href={"mailto:business@bigbeastishank.com"}
                  whileTap={{ scale: 0.8 }}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    backgroundColor: CP.primary.hex,
                    border: `1px solid ${CP.background.primary.hex}`,
                  }}
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
                  style={{
                    backgroundColor: CP.secondary.hex,
                    border: `1px solid ${CP.background.primary.hex}`,
                  }}
                  className="px-3 py-2 rounded-full outline-none cursor-pointer select-none"
                >
                  Read CV
                </motion.a>
              </motion.div>
            </div>
          </div>

          {/* Intro Code */}
          <div className="h-full w-full flex flex-col justify-center xl:items-end items-center">
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
