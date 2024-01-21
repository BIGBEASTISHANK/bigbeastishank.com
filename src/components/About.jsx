"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import pfp from "@@/public/img/pfp.png";
import HeadingBasic from "@/utility/HeadingBasic";

export default function About() {
  return (
    <div id="about" className="px-5 scroll-mt-24 flex flex-col">
      {/* Title */}
      <HeadingBasic heading="About" url="/#about" animationDelay={1.2} />

      {/* Image */}
      <motion.a
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4 }}
        href={"/img/pfp.png"}
        target="_blank"
        className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10 mx-auto"
      >
        <Image
          src={pfp}
          alt={"pfp"}
          className="select-none rounded-full border-2 border-[#444D7E] hover:scale-[1.1] transition-all hover:shadow-xl shadow-lg hover:shadow-[#444D7E]/50 shadow-[#444D7E]/50"
        />
      </motion.a>

      {/* About me */}
      <div className="text-center md:text-base text-sm flex flex-col md:gap-4 gap-3 text-[#AFB3C1]">
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
            className="text-[#7799E5] hover:underline"
          >
            <strong>YouTube</strong>
          </a>{" "}
          channel. Join the ride, hit that subscribe button, and let&apos;s turn
          the ordinary into extraordinary! 🚀👾
        </motion.p>
      </div>
    </div>
  );
}
