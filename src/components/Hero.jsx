"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "@@/public/img/BBILogo.png";

export default function Hero() {
  return (
    <div className="px-5 flex flex-col scroll-mt-96">
      {/* Image */}
      <motion.a
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        href={"/img/BBILogo.png"}
        target="_blank"
        className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10"
      >
        <Image
          src={logo}
          alt={"logo"}
          className="select-none rounded-2xl border-2 border-[#444D7E] hover:scale-[1.1] transition-all hover:shadow-xl shadow-lg hover:shadow-[#444D7E]/50 shadow-[#444D7E]/50"
        />
      </motion.a>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-bold md:text-xl text-lg md:mb-7 mb-4"
      >
        I&apos;m Ishank ~ OSS Game & Web Developer
      </motion.h1>

      {/* Text */}
      <div className="md:text-base text-sm md:text-left text-justify flex flex-col md:gap-3 gap-2 text-[#AFB3C1]">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          An Open Source Game & Web Developer with a passion to create immersive experiences.
          Skilled in Unity and currently expanding knowledge with Unreal Engine.
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
      <Link
        href={
          "mailto:business@bigbeastishank.com?subject=Contact%20from%3A%20bigbeastishank.com%3B%20Regarding%3A%20%5BYour%20Issue%5D&body=Hey%20Ishank%2C%0AI'm%20%5Byour%20name%5D.%20%5Byour%20request%5D"
        }
        target="_blank"
        className="mr-auto group/chm hover:scale-[1.1] transition-all select-none"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.4, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <p className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border border-[#444D7E] rounded-full bg-[#1E2028] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#444D7E]/50 shadow-[#444D7E]/50 transition-all">
            Contact/Hire Me
          </p>
        </motion.button>
      </Link>
    </div>
  );
}
