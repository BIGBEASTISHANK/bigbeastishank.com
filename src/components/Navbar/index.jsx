"use client";

import { navlinks } from "@/lib/data";
import { motion } from "framer-motion";
import { Patrick_Hand } from "next/font/google";

const navlinksFont = Patrick_Hand({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <motion.div
      className="my-7 select-none navbar fixed top-0 w-full px-[2%] z-[999]"
      initial={{ y: -110 }}
      animate={{ y: 1 }}
      transition={{ delay: 0.1, duration: 0.3, type: "spring", stiffness: 200 }}
    >
      {/* Navbar background */}
      <div className="bg-gray-950/60 rounded-full flex py-5 px-10 backdrop-blur-sm shadow-2xl">
        {/* Name */}
        <h1 className="md:flex hidden">
          <a href="/" className="flex text-3xl hover:scale-[1.1] font-bold mr-7 transition-all">
            BIGBEASTISHANK
          </a>
        </h1>

        {/* Middle space */}
        <div className="m-auto md:flex hidden" />

        {/* Navlinks */}
        <ul className={`${navlinksFont.className} flex my-auto mx-auto md:mx-0 overflow-hidden overflow-x-auto navitems`}>
          {navlinks.map((data) => (
            <li
              key={data.title}
              className="md:px-2 sm:px-[1.2rem] px-3 sm:text-2xl text-[1.35rem] md:hover:text-[1.875rem] hover:underline transition-all"
            >
              <a href={data.url}>{data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
