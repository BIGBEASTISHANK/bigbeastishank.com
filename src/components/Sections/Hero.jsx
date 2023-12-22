"use client";
// Imports
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsEye, BsGithub } from "react-icons/bs";
import { useSectionInView } from "@/lib/hooks";

export default function Hero() {
  // Variable

  // Navbar scroll animation but now working
  // const { ref } = useSectionInView("Hero", 0.5);

  // Component
  return (
    <section
      // ref={ref}
      className="max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
      id="home"
    >
      {/* Logo section */}
      <div className="flex items-center justify-center select-none">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            {/* Logo Image */}
            <Image
              src="/img/logo.jpg"
              alt="logo"
              width={"192"}
              height={"192"}
              quality={"100"}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-[#23A55A] shadow-xl"
            />
          </motion.div>

          {/* Logo Emoji */}
          <motion.span
            className=" absolute bottom-0 right-0 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: "125",
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      {/* Intro section */}
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <strong>Hi, I'm Ishank.</strong> A self-taught{" "}
        <strong>Frontend Web</strong> & <strong>Game developer.</strong>
      </motion.h1>

      {/* Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-3 text-lg font-medium select-none"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {/* Github */}
        <Link
          target="_blank"
          href="/github"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 hover:bg-gray-950 active:scale-[.9] transition"
        >
          View GitHub{" "}
          <BsGithub className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        {/* Source */}
        <Link
          target="_blank"
          href="/sourcecode"
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-110 active:scale-[.9] transition"
        >
          View Source{" "}
          <BsEye className="opacity-60 group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}
