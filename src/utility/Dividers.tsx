"use client";
import { motion } from "framer-motion";

export function ShortDivider({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ width: "0%" }}
      animate={{ width: "50%" }}
      transition={{ duration: 1, delay: delay }}
      className="h-[.125rem] my-7 bg-[#1793D1] z-10"
    />
  );
}

export function FullDivider({ delay = 0}: { delay?: number }) {
    return (
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, delay: delay }}
        className="h-[.125rem] my-12 mx-auto bg-[#1793D1] z-10" 
      />
    );
  }
  