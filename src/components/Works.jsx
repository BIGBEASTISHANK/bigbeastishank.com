"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import HeadingBasic from "@/utility/HeadingBasic";
import { FaEye, FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { gameProjects, otherProjects, websiteProjects } from "@/libs/data";
import { useState } from "react";

export default function WorksComponent() {
  return (
    <div id="works" className="px-5 scroll-mt-24">
      {/* Title */}
      <HeadingBasic
        heading="Works"
        url="/works"
        description={
          <>
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
          </>
        }
      />

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
        titleDelay={2}
      />

      {/* Other Project */}
      <ProjectList
        id="otherProjects"
        name="Other Projects"
        projectData={otherProjects}
        titleDelay={3.45}
      />
    </div>
  );
}

function ProjectList({ id = "", name = "", projectData = [], titleDelay = 0 }) {
  // Searchbar variables
  const [sortedData, sortData] = useState("");
  // List variable
  const [listAnimationDelay, setListAnimationDelay] = useState(
    titleDelay + 0.3
  );

  return (
    <>
      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#4e4e4e] z-10" />

      {/* Project Heading */}
      <motion.h1
        id={id}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: titleDelay }}
        className="font-bold md:text-xl text-lg md:mb-7 mb-5 scroll-mt-24 flex"
      >
        {/* Heading */}
        <Link href={`/works#${id}`} className="mr-auto">
          ~/{name}
        </Link>

        {/* Search bar */}
        <div className="flex bg-black/10 border border-white/20 rounded-full px-4 select-none font-normal md:text-base text-sm my-auto">
          <FaSearch className="my-auto mr-2" />
          {/* Input area */}
          <input
            className="bg-transparent outline-none md:w-auto w-[5.5rem]"
            placeholder="Search..."
            onChange={(event) => {
              setListAnimationDelay(0.2);
              sortData(event.target.value);
            }}
          />
        </div>
      </motion.h1>

      {/* Project List */}
      <motion.ul className="px-6">
        {projectData
          .filter((data) => {
            if (sortedData == "") {
              return data;
            } else if (
              data.title.toLowerCase().includes(sortedData.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: listAnimationDelay + (index * 0.3) / 2 }}
            >
              <div className="mb-5 flex flex-col bg-black/50 p-5 rounded-3xl hover:scale-[1.03] transition-all">
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
                  <span className="flex group/readMore py-[0.15rem] px-[1rem] border rounded-full bg-neutral-800/50">
                    View Project
                    <FaEye className="my-auto ml-2 group-hover/readMore:scale-[1.1] transition-all" />
                  </span>
                </a>
              </div>
            </motion.li>
          ))}

        {/* Not found data */}
        {projectData.filter((data) =>
          data.title.toLowerCase().includes(sortedData.toLowerCase())
        ).length === 0 && (
          <div className="flex">
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-5 py-2 bg-black/50 rounded-full text-red-500 md:text-base text-sm mx-auto text-center"
            >
              Oops! No projects with that name. Check for mistake in your input.
            </motion.li>
          </div>
        )}
      </motion.ul>
    </>
  );
}
