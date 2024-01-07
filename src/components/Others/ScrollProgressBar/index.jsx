"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar({ customTWClass = "" }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={`${customTWClass}`}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
