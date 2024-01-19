"use client";
import { skills } from "@/libs/data";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";

export default function Skills() {
  return (
    <div id="skills" className="px-5 scroll-mt-24">
      {/* Headings */}
      <HeadingBasic
        heading="Skills"
        url="#skills"
        animationDelay={2.4}
        description={
          <>
            Versatile skills for digital excellence, spanning web development,
            programming, graphic design, and creative content.
          </>
        }
      />

      {/* Section content */}
      <ul className="justify-center items-center text-center mt-5 flex flex-wrap md:gap-2 gap-x-1 gap-y-2">
        {/* Card */}
        {skills.map((data, index) => (
          <motion.li
            key={index}
            initial={{ y: 50, scale: 0.4, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ delay: 2.9 + (index * 0.2) / 2 }}
            className="select-none"
          >
            <div className="bg-black/50 flex flex-col overflow-auto md:h-[8rem] md:w-[8rem] h-[7rem] w-[5rem] rounded-2xl hover:scale-[1.05] transition-all">
              {/* Icons */}
              <div className="p-5">
                <data.icon className="m-auto md:text-5xl text-2xl" />
              </div>

              {/* Divider */}
              <div className="w-full h-[.05rem] bg-[#4e4e4e]" />

              {/* Name */}
              <p className="md:text-base text-sm my-auto px">{data.name}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
