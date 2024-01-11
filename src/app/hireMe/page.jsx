"use client";

import Link from "next/link";
import { hireMeFor } from "@/lib/data";
import { motion } from "framer-motion";
import { FaRegEye } from "react-icons/fa";
import ComingSoonToast from "@/utils/ComingSoon";
import SectionBasics from "@/utils/SectionBasics";

// Variables
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 200, scale: 0.5 },
  animate: (index) => ({
    y: 0,
    scale: 1,
    opacity: 1,

    transition: {
      duration: 0.2,
      type: "spring",
      delay: (0.3 * index) / 2,
    },
  }),
};

export default function Hire() {
  return (
    <div className="projectW:px-12 sm:px-[6rem] px-12" id="hire">
      {/* Title */}
      <SectionBasics
        title="Hire me"
        desc="Hire Me for Your Next Project: Bringing Expertise to Web Design, Game Development, and Various Creative Endeavors"
      />

      {/* Card */}
      <div className="my-auto projectW:flex projectW:flex-wrap gap-[2rem] justify-center items-center">
        {hireMeFor.map((data, index) => (
          // Card
          <motion.div
            key={index}
            custom={index}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInAnimationVariants}
          >
            <div className="bg-gray-800/70 backdrop-blur-xl p-5 rounded-2xl transition-all max-w-[32rem] projectW:mb-0 mb-8 drop-shadow-3xl hover:drop-shadow-blueGlow hover:bg-gray-900/85 hover:scale-[1.05] group/card overflow-auto">
              {/* Title */}
              <h2 className="mt-3 mb-2 xl:text-6xl projectW:text-4xl sm:text-6xl text-4xl font-bold text-center text-stroke">
                {data.service}
              </h2>

              {/* Description */}
              <p className="min-h-[9rem] projectW:text-base sm:text-lg text-base group-hover/card:font-medium">
                {data.description}
              </p>

              {/* Button */}
              {data.comingSoon ? (
                <button
                  className="backdrop-blur-sm w-[10.6rem] select-none flex bg-gray-950/30 mt-4 text-white border text-xl px-4 py-1 rounded-full outline-none bg-blue-600 text-center hover:font-medium hover:scale-[1.05] active:scale-[.9] transition-all"
                  onClick={ComingSoonToast}
                >
                  View Pricing{" "}
                  <FaRegEye className="my-auto ml-[12px] group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
                </button>
              ) : (
                <Link
                  className="backdrop-blur-sm w-[10.6rem] select-none flex bg-gray-950/30 mt-4 text-white border text-xl px-4 py-1 rounded-full outline-none bg-blue-600 text-center hover:font-medium hover:scale-[1.05] active:scale-[.9] transition-all"
                  href={data.priceLink}
                >
                  View Pricing{" "}
                  <FaRegEye className="my-auto ml-[12px] group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
