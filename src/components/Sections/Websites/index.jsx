"use client";
import { motion } from "framer-motion";
import { websiteProjects } from "@/lib/data";
import ProjectCards from "@/components/Others/ProjectCards";

export default function Websites({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="websites">
      {/* Title */}
      <motion.a
        className="mx-auto block text-center lg:text-8xl mb-3 md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-2xl font-black"
        href="/#websites"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        Website Projects
      </motion.a>

      {/* Section Desc */}
      <motion.div
        className="xl:text-2xl sm:text-xl text-lg md:mb-[3rem] mb-[1.5rem] justify-center text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.3 }}
        viewport={{ once: true }}
      >
        <p className="mb-2">
          Browse Through My Web Design Portfolio: A Compilation of Websites
          Crafted Throughout My Creative Journey
        </p>
      </motion.div>

      {/* Websites */}
      <ProjectCards projectData={websiteProjects} />
    </div>
  );
}
