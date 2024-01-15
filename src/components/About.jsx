"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "@@/public/img/pfp.png";

export default function About() {
  return (
    <div id="about" className="px-5 scroll-mt-24 flex flex-col">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="font-bold md:text-3xl text-2xl md:mb-8 mb-5"
      >
        <Link href="/#about">~/About</Link>
      </motion.h1>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10 mx-auto"
      >
        <Image
          src={pfp}
          alt={"pfp"}
          className="select-none rounded-full border-2 border-[#4e4e4e]"
        />
      </motion.div>

      {/* About me */}
      <div className="text-center md:text-base text-sm flex flex-col md:gap-4 gap-3 text-[#adadad]">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          🚀 Hey there, I&apos;m Ishank, but you can call me the BIG BEAST
          ISHANK! 👹
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8 }}
        >
          🎮 Crafting games, coding websites, diving into networks, and breaking
          barriers with pentesting—yeah, that&apos;s my jam! 💻✨
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          Wondering about the &quot;BIG BEAST ISHANK&quot; title? Well,
          it&apos;s not just a name; it&apos;s a journey. I&apos;m on the path
          to becoming a <strong>Beast</strong> in the realms of Web and Game
          Development, along with conquering the vast landscapes of Network
          Engineering & Pentesting.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2 }}
        >
          🎥 Curious about my adventures? I document them in thrilling devlogs
          over on my{" "}
          <a
            href="/youtube"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <strong>YouTube</strong>
          </a>{" "}
          channel. Join the ride, hit that subscribe button, and let&apos;s turn
          the ordinary into extraordinary! 🚀👾
        </motion.p>
      </div>

      {/* Button */}
      <Link href={"/"} className="mx-auto hover:scale-[1.1] transition-all select-none">
        <motion.button
          initial={{ opacity: 0, scale: 0.4, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2.4 }}
          className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border rounded-full bg-neutral-800/50"
        >
          Contact Me
        </motion.button>
      </Link>
    </div>
  );
}
