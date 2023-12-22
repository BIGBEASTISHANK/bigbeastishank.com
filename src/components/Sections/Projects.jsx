"use client";
// Imports
import { motion, useScroll, useTransform } from "framer-motion";
import SectionHeading from "../Subs/SectionHeading";
import { projectsData } from "@/lib/data";
import React, { useRef } from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  // Variables

  // Navbar scroll animation but now working
  // const { ref } = useSectionInView("Projects", 0.5);

  // Component
  return (
    <section
      // ref={ref}
      id="projects"
      className="scroll-mt-28"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 }}
        viewport={{ once: true }}
      >
        <SectionHeading>Projects</SectionHeading>
      </motion.div>

      <div>
        {projectsData.map((data, index) => (
          <React.Fragment key={index}>
            <ProjectBox {...data} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function ProjectBox({ title, description, tags, imageUrl, projectUrl }) {
  // Variables
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // Components
  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] even-pl-8 hover:bg-gray-200 transition group-even:pl-8 rounded-[1.5rem]">
        {/*  */}
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          {/* Title */}
          <h3 className="text-2xl font-semibold hover:text-3xl transition-all">
            <a href={projectUrl} target="_blank">
              {title}
            </a>
          </h3>

          {/* Description */}
          <p className="mt-2 leading-relaxed text-gray-700">{description}</p>

          {/* Tag */}
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full select-none"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Project Image */}
        <Image
          src={imageUrl}
          alt={title}
          quality={100}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
