"use client";
import { Dispatch, SetStateAction, useState } from "react";
import HeadingBasic from "@/utility/HeadingBasic";
import { paletteColors } from "@@/data/PaletteColors";
import { HTMLMotionProps, motion } from "framer-motion";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCheck } from "react-icons/fa";

export default function ColorPalette() {
  const [copiedIndex, setCopiedIndex]: [
    copiedIndex: number,
    setCopiedIndex: Dispatch<SetStateAction<number>>
  ] = useState<number | null>(null);

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
            transition={{
              delay: 0.6 + (index * 0.3) / 2,
              duration: 0.5,
              type: "spring",
            }}
            key={index}
            {...({
              className: "flex border-2 border-[#1793D1] rounded-xl my-1 p-2",
            } as HTMLMotionProps<"div">)}
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
              <CopyToClipboard
                text={data.hex}
                className="bg-[#050607] border-2 border-[#F6F9FC] my-auto ml-2 mr-auto px-2 rounded-full cursor-pointer select-none"
                onCopy={() => {
                  setCopiedIndex(index);
                  setTimeout(() => setCopiedIndex(null), 2000);
                }}
              >
                <div>
                  {copiedIndex === index ? (
                    <p className="flex gap-2 items-center justify-center">
                      Copied!
                      <FaCheck />
                    </p>
                  ) : (
                    data.hex
                  )}
                </div>
              </CopyToClipboard>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
