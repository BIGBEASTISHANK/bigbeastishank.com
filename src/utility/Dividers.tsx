"use client";
import { motion } from "framer-motion";

export function ShortDivider({ delay = 0, customCSS = "my-7" }: { delay?: number, customCSS?: string }) {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "50%" }}
      transition={{ delay: delay, duration: 0.5, type: "spring" }}
      className={`h-[.125rem] bg-[#1793D1] z-10 ${customCSS}`}
    />
  );
}

export function FullDivider({ delay = 0, customCSS = "my-12" }: { delay?: number, customCSS?: string }) {
    return (
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ delay: delay, duration: 0.5, type: "spring" }}
        className={`h-[.125rem] bg-[#1793D1] z-10 ${customCSS} mx-auto`}
      />
    );
  }
  