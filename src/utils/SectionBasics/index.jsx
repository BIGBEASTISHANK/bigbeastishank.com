"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function SectionBasics({
  url = "",
  desc = "",
  title = "",
  customTWClass = "",
}) {
  return (
    <div className={customTWClass}>
      {/* Title */}

      {/* Description */}
      {title && (
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: -100 }}
          className="mx-auto flex text-center justify-center  lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-3xl font-black"
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          {url ? (
            <Link
              href={url}
              className="lg:text-8xl md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-3xl font-black"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </motion.div>
      )}

{desc && (
        <motion.div
          className="xl:text-2xl sm:text-xl text-lg md:mb-[3rem] mb-[1.5rem] justify-center text-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-2">{desc}</p>
        </motion.div>
      )}
    </div>
  );
}
