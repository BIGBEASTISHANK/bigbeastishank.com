"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeadingBasic({
  heading = "",
  url = "",
  description = <></>,
  animationDelay = 0.3,
}) {
  return (
    <>
      {/* Title */}
      {heading && (
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: animationDelay }}
          className="font-bold md:text-3xl text-2xl md:mb-8 mb-5"
        >
          {url ? <Link href={url}>~/{heading}</Link> : <>~/{heading}</>}
        </motion.h1>
      )}

      {/* Description */}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelay + 0.2 }}
          className="text-[#adadad] md:text-base text-sm"
        >
          {description}
        </motion.p>
      )}
    </>
  );
}
