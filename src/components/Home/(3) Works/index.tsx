"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ActivateStateVar } from "@@/data/ActiveStateData";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";

export default function WorksComponent() {
  // Variables
  const sections: String[] = ["Games", "Website", "Others"];
  const [currentSection, setCurrentSection] = useState<String>("Games");

  // Return section html
  return (
    <div id="works" className="h-[100dvh] scroll-mt-24">
      {/* Heading */}
      <div
        className="flex items-center sm:items-start xl:pl-20 sm:pl-10"
        style={{ color: CP.primary.hex }}
      >
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          className="text-3xl md:text-5xl sm:text-4xl font-bold select-none p-5 rounded-3xl backdrop-blur-lg"
          style={{ border: `1px solid ${CP.border.subtle.hex}` }}
        >
          Projects
        </motion.p>
      </div>

      {/* Section Selector */}
      <div className="flex justify-end xl:pr-20 sm:pr-10 pr-5">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          className="flex gap-3 p-5 backdrop-blur-md rounded-3xl"
          style={{ border: `1px solid ${CP.border.subtle.hex}` }}
        >
          {sections.map((name, index) => (
            <button
              key={index}
              className="relative text-sm sm:text-base md:text-md lg:text-lg cursor-pointer outline-none px-3"
              onClick={() => setCurrentSection(name.toString())}
            >
              {/* Active state bg */}
              {name === currentSection && (
                <motion.div
                  layoutId={ActivateStateVar.projects}
                  className="absolute inset-0 rounded-full blur-xs -z-10"
                  style={{
                    backgroundColor: CP.primary.hex,
                    border: `1px solid ${CP.border.emphasis.hex}`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 60,
                    restDelta: 0.02,
                  }}
                  initial={false}
                  animate={{ x: 0, y: 0 }}
                />
              )}

              {/* Section name */}
              {name}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
