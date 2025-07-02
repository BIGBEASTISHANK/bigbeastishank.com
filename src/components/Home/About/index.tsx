"use client";
import { motion } from "motion/react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";

export default function AboutComponent() {
  return (
    <div
      id="about"
      className="min-h-[100dvh] flex lg:flex-row-reverse flex-col px-5 items-center justify-center"
    >
      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-2/5 flex items-center justify-center lg:mb-0 mb-10"
      >
        <img
          src="/image/main/pfp.png"
          alt="PFP"
          className="rounded-2xl object-cover border-4 2xl:h-[30rem] 2xl:w-[30rem] md:h-[20rem] md:w-[20rem] sm:h-[15rem] sm:w-[15rem] h-[10rem] w-[10rem]"
          style={{ borderColor: CP.primary.hex }}
        />
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="lg:w-3/5 flex flex-col items-center justify-center"
      >
        <div className="max-w-[55rem] flex flex-col gap-8">
          {/* Heading */}
          <h1
            className="text-3xl md:text-5xl sm:text-4xl font-bold"
            style={{ color: CP.accent.hex }}
          >
            About Me
          </h1>

          {/* About me */}
          <div
            className="text-sm sm:text-base md:text-md lg:text-lg font-mono flex flex-col gap-3"
            style={{ color: CP.text.primary.hex }}
          >
            {/* 1 */}
            <p>
              An open-source game and web developer who also occasionally
              creates exclusive games. I used to produce games on{" "}
              <span style={{ color: CP.warning.hex }}>Unity</span>, but I'm also
              learning about the{" "}
              <span style={{ color: CP.success.hex }}>Unreal Engine</span>. I
              create my website using{" "}
              <span style={{ color: CP.accent.hex }}>NextJS</span>.
            </p>

            {/* 2 */}
            <p>
              Currently diving into{" "}
              <span style={{ color: CP.warning.hex }}>AI/ML fundamentals</span>{" "}
              and practicing data structures and algorithms with{" "}
              <span style={{ color: CP.accent.hex }}>Rust</span>.
            </p>

            {/* 3 */}
            <p>
              I not only work on creating websites & games, but I also explore
              the complexity of{" "}
              <span style={{ color: CP.success.hex }}>
                networking, servers & pentesting
              </span>
              . I find joy in securing computer systems & networks.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
