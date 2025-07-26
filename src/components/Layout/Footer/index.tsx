"use client";
import { motion } from "motion/react";
import { socialMedia } from "@@/data/FooterData";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { useState } from "react";

export default function FooterComponent() {
  // Variables
  const [inViewport, setInViewport] = useState<boolean>(false);

  return (
    <motion.footer
      className="flex flex-col justify-center items-center m-5 overflow-hidden"
      onViewportEnter={() => setInViewport(true)}
    >
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
        animate={inViewport ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        style={{ border: `1px solid ${CP.border.subtle.hex}` }}
        className="flex flex-col gap-2 sm:px-15 px-7 py-5 text-center backdrop-blur-lg rounded-3xl"
      >
        {/* Credit section */}
        <div className="leading-3">
          Made with <span>❤️</span> by{" "}
          <a
            href="/github"
            target="_blank"
            className="hover:underline underline-offset-2 font-bold"
            style={{ color: CP.primary.hex }}
          >
            BIGBEASTISHANK
          </a>
        </div>

        {/* Divider */}
        <div
          className="w-[60%] h-[0.01rem] rounded-full mx-auto my-2"
          style={{ backgroundColor: CP.border.subtle.hex }}
        />

        {/* Social links */}
        <div className="flex gap-5 text-xl flex-wrap items-center justify-center">
          {socialMedia.map((data, index) => (
            <motion.a
              key={index}
              href={data.link}
              target={"_blank"}
              aria-label={data.label}
              className="w-fit"
              whileHover={{scale: 1.3}}
              transition={{duration: 0.1}}
              whileTap={{scale: 0.75}}
            >
              <data.icon />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}
