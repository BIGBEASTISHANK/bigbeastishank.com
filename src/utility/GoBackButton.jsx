"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GoBackButton({animationDelay=0}) {
  return (
    <Link
      href={"/"}
      className="mr-auto hover:scale-[1.1] transition-all select-none"
    >
      <motion.button
        initial={{ opacity: 0, scale: 0.4, y: 50 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: animationDelay }}
        className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border rounded-full bg-neutral-800/50"
      >
        Go To Home
      </motion.button>
    </Link>
  );
}
