"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@@/public/img/BBILogo.png";

export default function Hero() {
  return (
    <div id="#" className="px-5">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10"
      >
        <Image
          src={logo}
          alt={"logo"}
          className="select-none rounded-2xl border-2 border-neutral-800"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-bold md:text-xl text-lg md:mb-7 mb-4"
      >
        I&apos;m Ishank ~ Web & Game Developer
      </motion.h1>

      {/* Text */}
      <div className="md:text-base text-sm md:text-left text-justify flex flex-col md:gap-3 gap-2">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          A Web & Game Developer with a passion to create immersive
          experiences. Skilled in Unity and currently expanding knowledge with
          Unreal Engine.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          I not only work on creating websites & games, but I also explore the
          complexity of networking and penetration testing. I find joy in
          securing computer systems & networks. I use Arch BTW!
        </motion.p>
      </div>

      {/* Button */}
      <Link href={"/contact"}>
        <motion.button
          initial={{ opacity: 0, scale: 0.4, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border rounded-full bg-neutral-800/50 hover:scale-[1.1]"
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
}
