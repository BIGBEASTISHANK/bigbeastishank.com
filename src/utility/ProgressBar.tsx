"use client";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { motion, useScroll } from "motion/react";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, background: CP.primary.hex }}
      className="fixed top-0 h-1 w-full rounded-full z-100"
    />
  );
}
