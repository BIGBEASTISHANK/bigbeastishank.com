"use client";
// Imports
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "../Subs/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

// Variables
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 200 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * index },
  }),
};

export default function Skills() {
  // Variables

  // Navbar scroll animation but now working
  // const { ref } = useSectionInView("Skills", 0.5);

  // Components
  return (
    <section
      // ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center"
      id="skills"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: 500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 }}
        viewport={{ once: true }}
      >
        <SectionHeading>My Skills</SectionHeading>
      </motion.div>

      {/* Skills */}
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((data, index) => (
          <motion.li
            className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 select-none"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
          >
            {data}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
