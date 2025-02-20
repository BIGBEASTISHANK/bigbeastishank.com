"use client";
import { JSX } from "react";
import HeadingBasic from "@/utility/HeadingBasic";
import { myLangs, myTools } from "@@/data/MyToolsData";
import { motion, HTMLMotionProps } from "framer-motion";

export default function MyTools(): JSX.Element {
  return (
    <div id="myTools" className="px-5 scroll-mt-24">
      {/* Headings */}
      <HeadingBasic
        heading="My Tools"
        url="#myTools"
        animationDelay={2.5}
        description={
          <>
            <p>
              My Versatile tools for digital excellence, spanning web
              development, programming, and creative content. You can also click
              on the card title to open learning material.
            </p>
          </>
        }
      />

      {/* Section content */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap gap-x-8 gap-y-5 min-[439px]:gap-[0.3rem] min-[477px]:gap-[0.9rem] min-[520px]:gap-[1.5rem] min-[540px]:gap-[0.3rem] min-[563px]:gap-[0.62rem]">
        {/* My Langs card */}
        {myLangs.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 3 + (index * 0.3) / 2 }}
            {...({ className: "group/chm" } as HTMLMotionProps<"li">)}
          >
            <div className="group bg-[#050607] border border-[#1793D1]/70 hover:border-[#00FF00]/70 flex flex-col overflow-auto h-[8rem] md:w-[8rem] w-[6rem] rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#00FF00]/80 shadow-[#1793D1]/50">
              {/* Icons */}
              <div className="p-5">
                <data.icon className="m-auto md:text-5xl text-4xl" />
              </div>

              {/* Divider */}
              <div className="w-full h-[0.1rem] my-[0.013rem] bg-[#1793D1] group-hover:bg-[#00FF00]" />

              {/* Name */}
              <a
                className="md:text-base text-sm px-1 bg-[#1A1E23] h-[90%] content-center"
                href={data.learningLink}
                target="_blank"
              >
                {data.name}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>

      {/* Short divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#1793D1] z-10" />

      <ul className="justify-center items-center text-center mt-5 flex flex-wrap gap-x-8 gap-y-5 min-[439px]:gap-[0.3rem] min-[477px]:gap-[0.9rem] min-[520px]:gap-[1.5rem] min-[540px]:gap-[0.3rem] min-[563px]:gap-[0.62rem]">
        {/* Tools card */}
        {myTools.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 5.55 + (index * 0.3) / 2 }}
            {...({ className: "group/chm" } as HTMLMotionProps<"li">)}
          >
            <div className="group bg-[#050607] border border-[#1793D1]/70 hover:border-[#00FF00]/70 flex flex-col overflow-auto h-[8rem] md:w-[8rem] w-[6rem] rounded-2xl hover:scale-[1.1] transition-all hover:shadow-xl shadow-md hover:shadow-[#00FF00]/80 shadow-[#1793D1]/50">
              {/* Icons */}
              <div className="p-5">
                <data.icon className="m-auto md:text-5xl text-4xl" />
              </div>

              {/* Divider */}
              <div className="w-full h-[0.1rem] my-[0.013rem] bg-[#1793D1] group-hover:bg-[#00FF00]" />

              {/* Name */}
              <a
                className="md:text-base text-sm px-1 bg-[#1A1E23] h-[90%] content-center"
                href={data.learningLink}
                target="_blank"
              >
                {data.name}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
