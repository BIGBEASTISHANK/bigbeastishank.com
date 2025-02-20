"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

export default function GoToButton({
  animationDelay,
  title,
  link,
  customCSS,
}: {
  animationDelay?: number;
  title: string;
  link: string;
  customCSS?: string;
}) {
  return (
    <div className={`flex ${customCSS}`}>
      <Link
        href={link}
        className="mr-auto group/chm hover:scale-[1.1] transition-all select-none outline-none"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.4, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: animationDelay }}
          {...({ className: "outline-none" } as HTMLMotionProps<"div">)}
        >
          <p className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border border-[#1793D1] rounded-full bg-[#0A0C0E] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all">
            {title}
          </p>
        </motion.button>
      </Link>
    </div>
  );
}
