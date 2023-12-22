"use client";
// Imports
import { motion } from "framer-motion";
import { skillsData } from "@/lib/data";
import SectionHeading from "../Subs/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

// Variables
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
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
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        viewport={{ once: true }}
        className="mb-[1rem]"
      >
        <SectionHeading>Skills</SectionHeading>
      </motion.div>

      {/* Section desc */}
      <motion.p
        className="sm:mb-[2.5rem] max-w-[45rem] mx-auto mb-[2rem] text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
          Here are some examples of what I'm capable of.
      </motion.p>

      {/* Skills */}
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((data, index) => (
          <motion.li
            className="bg-white/90 backdrop-blur-50 border border-black/[0.25] rounded-xl px-5 py-3 select-none dark:bg-white/10 dark:text-white/80"
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
