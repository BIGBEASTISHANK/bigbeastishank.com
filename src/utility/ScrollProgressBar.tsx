"use client";
import { JSX } from "react";
import { motion, useScroll } from "framer-motion";
import type { HTMLMotionProps, MotionValue } from "framer-motion";

export default function ScrollProgressBar(): JSX.Element {
  const { scrollYProgress }: { scrollYProgress: MotionValue } = useScroll();

  return (
    <motion.div
      {...({
        className:
          "fixed top-0 left-0 right-0 h-1 bg-[#1793D1] shadow-md shadow-[#1793D1]/50 origin-[0%] z-50",
      } as HTMLMotionProps<"div">)}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
