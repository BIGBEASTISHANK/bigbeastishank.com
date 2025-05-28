"use client";
import { JSX } from "react";
import Link from "next/link";
import { motion, HTMLMotionProps } from "framer-motion";

export default function HeadingBasic({
  heading = "",
  url = "",
  id = "",
  description = <></>,
  animationDelay = 0.3,
}: {
  heading?: string;
  url?: string;
  id?: string;
  description?: JSX.Element;
  animationDelay?: number;
}) {
  return (
    <>
      {/* Title */}
      {heading && (
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: animationDelay, duration: 0.5, type: "spring" }}
          {...({
            className:
              "font-bold md:text-3xl text-2xl md:mb-8 mb-5 scroll-mt-24",
          } as HTMLMotionProps<"div">)}
          {...({ id } as HTMLMotionProps<"h1">)}
        >
          {url ? (
            <Link href={url} className={"outline-none text-[#F6F9FC]"}>
              ~/{heading}
            </Link>
          ) : (
            <>~/{heading}</>
          )}
        </motion.h1>
      )}

      {/* Description */}
      {description && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: animationDelay + 0.2 }}
          {...({
            className: "text-[#AFB3C1] md:text-base text-sm",
          } as HTMLMotionProps<"div">)}
        >
          {description}
        </motion.div>
      )}
    </>
  );
}
