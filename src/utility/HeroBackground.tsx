"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function HeroBackground() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="select-none"
    >
      <Image
        className="absolute -right-55 top-2 sm:-right-90 sm:top-22 md:-right-170 md:-top-75 -z-10 rotate-35 sm:rotate-40 md:rotate-47 rounded-2xl transition-all"
        src={"/image/hero/blueSquare.svg"}
        height={1200}
        width={1200}
        alt="blueSquare"
      />
    </motion.div>
  );
}
