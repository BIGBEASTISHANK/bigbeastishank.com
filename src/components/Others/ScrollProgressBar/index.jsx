"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar({ customTWClass = "" }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`${customTWClass} z-[10]`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
