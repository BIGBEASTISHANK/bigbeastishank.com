"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Working from "@@/public/img/dotfile/working.png";
import HeadingBasic from "@/utility/HeadingBasic";
import Idle from "@@/public/img/dotfile/idle.png";
import Link from "next/link";

export default function Dotfile() {
  return (
    <div id="dotfile" className="px-5 flex flex-col scroll-mt-24">
      {/* Heading */}
      <HeadingBasic
        heading="Dotfile"
        url="#dotfile"
        animationDelay={2.4}
        description={
          <>
            <p>
              My <strong>Arch Linux</strong> rice was looking good so I am
              showing it to you all.
            </p>
          </>
        }
      />

      {/* Image 1 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.9 }}
        className="select-none my-5"
      >
        <Link href={Idle.src} target="_blank" className={"outline-none"}>
          <Image src={Idle} alt="Idle" />
        </Link>
      </motion.div>

      {/* Image 2 */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.1 }}
        className="select-none"
      >
        <Link href={Working.src} target="_blank" className={"outline-none"}>
          <Image src={Working} alt="Working" />
        </Link>
      </motion.div>

      {/* Button */}
      <Link
        href={"https://github.com/BIGBEASTISHANK/dotfile"}
        target="_blank"
        className="mr-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.4, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 3.3 }}
          className={"outline-none"}
        >
          <p className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border border-[#444D7E] rounded-full bg-[#1E2028] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#444D7E]/50 shadow-[#444D7E]/50 transition-all">
            View Project
          </p>
        </motion.button>
      </Link>
    </div>
  );
}
