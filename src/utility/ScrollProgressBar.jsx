"use client";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={
        "fixed top-0 left-0 right-0 h-[0.25rem] bg-[#4e4e4e] backdrop origin-[0%] z-50"
      }
      style={{ scaleX: scrollYProgress }}
    />
  );
}
