"use client";
import Image from "next/image";
import pfp from "@@/public/img/main/pfp.png";
import HeadingBasic from "@/utility/HeadingBasic";
import { motion, HTMLMotionProps } from "framer-motion";

export default function About() {
  return (
    <div id="about" className="px-5 scroll-mt-28 flex flex-col">
      {/* Title */}
      <HeadingBasic heading="About" url="/#about" animationDelay={1.2} />

      {/* Image */}
      <motion.a
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.4, duration: 0.5, type: "spring" }}
        {...({ href: pfp.src, target: "_blank" } as HTMLMotionProps<"a">)}
        {...({
          className:
            "md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10 mx-auto outline-none",
        } as HTMLMotionProps<"a">)}
      >
        <Image
          src={pfp}
          alt={"pfp"}
          className="select-none rounded-full border-2 border-[#1793D1] hover:scale-[1.1] transition-all hover:shadow-xl shadow-lg hover:shadow-[#1793D1]/50 shadow-[#1793D1]/50"
        />
      </motion.a>

      {/* About me */}
      <div className="text-center md:text-base text-sm flex flex-col md:gap-4 gap-3 text-[#F6F9FC]/75">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5, type: "spring" }}
        >
          👋 Hi, I'm Ishank-though my friends know me as the BIG BEAST ISHANK!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5, type: "spring" }}
        >
          I build games, develop websites, work with networks, and explore
          cybersecurity through penetration testing. It's what I love doing
          every day.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5, type: "spring" }}
        >
          The "BIG BEAST ISHANK" name represents my commitment to mastering{" "}
          <strong>Technologies</strong>, <strong>Programming</strong> &{" "}
          <strong>Development</strong>. It's about pushing boundaries and
          constantly improving my craft.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.5, type: "spring" }}
        >
          I share my game development journey through devlogs on my{" "}
          <a
            href="/youtube"
            target="_blank"
            className="text-[#0088CC] hover:underline outline-none"
          >
            <strong>YouTube</strong>
          </a>{" "}
          channel, where I also stream live gaming sessions. Feel free to
          subscribe and follow along as I tackle new projects and challenges.
        </motion.p>
      </div>
    </div>
  );
}
