"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { gameProjects, otherProjects, websiteProjects } from "@/libs/data";

export default function WorksComponent() {
  return (
    <div id="about" className="px-5">
      {/* Title */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-bold md:text-3xl text-2xl md:mb-8 mb-5"
      >
        <Link href="/works">~/My Works</Link>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-[#adadad] md:text-base text-sm"
      >
        🌐 Explore a collection of my standout projects right here. For a
        comprehensive look at all my endeavors, visit my{" "}
        <a
          href="/github"
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          <strong>GitHub</strong>
        </a>
        .
      </motion.p>

      {/* Game Project */}
      <ProjectList
        id="gameProjects"
        name="Game Projects"
        projectData={gameProjects}
        titleDelay={0.7}
      />

      {/* Website Project */}
      <ProjectList
        id="websiteProjects"
        name="Website Projects"
        projectData={websiteProjects}
        titleDelay={1.1}
      />

      {/* Other Project */}
      <ProjectList
        id="otherProjects"
        name="Other Projects"
        projectData={otherProjects}
        titleDelay={1.5}
      />
    </div>
  );
}

function ProjectList({ id = "", name = "", projectData = [], titleDelay = 0 }) {
  // Variables
  const projectPopAnimation = {
    initial: { y: 50, opacity: 0 },
    animate: (index) => ({
      y: 0,
      opacity: 1,

      transition: {
        delay: (titleDelay * (index  +  4)) / 3,
      },
    }),
  };

  return (
    <>
      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#4e4e4e] z-10" />

      {/* Project Heading */}
      <motion.h1
        id={id}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: titleDelay }}
        className="font-bold md:text-xl text-lg md:mb-7 mb-5 scroll-mt-24"
      >
        <Link href={`/works#${id}`}>~/{name}</Link>
      </motion.h1>

      {/* Project List */}
      <ul className="px-6">
        {projectData.map((data, index) => (
          <motion.li
            key={index}
            custom={index}
            initial="initial"
            animate="animate"
            variants={projectPopAnimation}
            className="mb-5 flex flex-col"
          >
            {/* Project title */}
            <h2 className="md:text-lg text-base font-semibold mr-auto">
              {data.title}
            </h2>

            {/* Project Description */}
            <p className="md:text-base text-sm mb-3 text-[#adadad]">
              {data.description}
            </p>

            {/* Read more txt */}
            <a
              href={data.projectUrl}
              target="_blank"
              className="text-semibold hover:scale-[1.05] transition-all md:text-base text-sm mr-auto"
            >
              <button className="flex py-[0.15rem] px-[0.55rem] border rounded-full bg-neutral-800/50">
                Read More <FaLongArrowAltRight className="my-auto ml-2" />
              </button>
            </a>
          </motion.li>
        ))}
      </ul>
    </>
  );
}
