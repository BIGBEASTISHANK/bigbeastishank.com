"use client";
import { JSX } from "react";
import HeadingBasic from "@/utility/HeadingBasic";
import { paletteColors } from "@@/data/PaletteColors";
import { HTMLMotionProps, motion } from "framer-motion";

export default function ColorPalette():JSX.Element {
  return (
    <div id="colorPalette" className="px-5 flex flex-col scroll-mt-24">
      {/* Heading */}
      <HeadingBasic
        heading="Color Palette"
        url="#colorPalette"
        animationDelay={0.3}
      />

      {/* Table */}
      <div className="overflow-x-auto flex flex-col">
        {paletteColors.map((data, index) => (
          <motion.div
            initial={{ y: -50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + (index * 0.3) / 2 }}
            key={index}
            {...({ className: "flex border-2 border-[#1793D1] rounded-xl my-1 p-2" } as HTMLMotionProps<"div">)}
          >
            {/* Name */}
            <p className="my-auto pr-3 md:w-[45%] w-[80%] md:font-bold md:text-xl select-none">
              {data.name}
            </p>
            {/* Color */}
            <div
              className="w-full h-11 my-auto outline outline-[#F6F9FC] rounded-md flex"
              style={{ background: data.hex }}
            >
              <p className="bg-[#050607] border-2 border-[#F6F9FC] my-auto ml-2 mr-auto px-2 rounded-full">
                {data.hex}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
