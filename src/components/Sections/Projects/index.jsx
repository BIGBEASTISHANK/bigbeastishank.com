"use client";
import { motion } from "framer-motion";
import { otherProjects } from "@/lib/data";
import ProjectCards from "@/components/Others/ProjectCards";

export default function Projects({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="projects">
      {/* Title */}
      <motion.a
        className="mx-auto block text-center lg:text-8xl mb-3 md:text-7xl sm:text-6xl text-5xl text-stroke drop-shadow-3xl font-black"
        href="/#projects"
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        Other Projects
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
          Project Showcase: Unveiling a Diverse Array of Creative Endeavors
          Beyond Games and Websites
        </p>
      </motion.div>

      {/* Projects */}
      <ProjectCards projectData={otherProjects} />
    </div>
  );
}
