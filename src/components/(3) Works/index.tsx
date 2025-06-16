"use client";
import {
  gameProjects,
  otherProjects,
  websiteProjects,
} from "@@/data/WorksData";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";
import HeadingBasic from "@/utility/HeadingBasic";
import { FaEye, FaSearch } from "react-icons/fa";
import { motion, HTMLMotionProps } from "framer-motion";
import { ShortDivider } from "@/utility/Dividers";

export default function WorksComponent() {
  return (
    <div id="works" className="px-5 scroll-mt-28">
      {/* Title */}
      <HeadingBasic
        heading="Works"
        url="/works"
        description={
          <>
            <p className="text-justify">
              🌐 Explore a collection of my standout projects right here. For a
              comprehensive look at all my endeavors, visit my{" "}
              <a
                href="/github"
                target="_blank"
                className="font-bold text-[#0088CC] hover:underline underline-offset-2 outline-none"
              >
                <strong>GitHub</strong>
              </a>
              .
            </p>
          </>
        }
      />
      {/* Game Project */}
      <ProjectList
        id="gameProjects"
        name="Game Projects"
        projectData={gameProjects}
      />

      {/* Website Project */}
      <ProjectList
        id="websiteProjects"
        name="Website Projects"
        projectData={websiteProjects}
      />

      {/* Other Project */}
      <ProjectList
        id="otherProjects"
        name="Other Projects"
        projectData={otherProjects}
      />
    </div>
  );
}

function ProjectList({
  id,
  name,
  projectData,
}: {
  id: string;
  name: string;
  projectData: any[];
}) {
  // Searchbar variables
  const [sortedData, sortData]: [
    storedData: String,
    setData: Dispatch<SetStateAction<string>>
  ] = useState<string>("");
  // List variable
  const [listAnimationDelay, setListAnimationDelay]: [
    storedData: number,
    setData: Dispatch<SetStateAction<number>>
  ] = useState<number>(1);

  return (
    <>
      {/* Short Divider */}
      <ShortDivider delay={0.5} />

      {/* Project Heading */}
      <motion.h1
        {...({ id } as HTMLMotionProps<"h1">)}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, type: "spring" }}
        {...({
          className:
            "font-bold md:text-2xl text-xl md:mb-7 mb-5 scroll-mt-28 flex outline-none",
        } as HTMLMotionProps<"h1">)}
      >
        {/* Heading */}
        <Link href={`/works#${id}`} className="mr-auto outline-none">
          ~/{name}
        </Link>

        {/* Search bar */}
        <div className="flex bg-[#050607] border border-[#1793D1] rounded-full px-4 md:mr-7 select-none font-normal md:text-base text-sm my-auto">
          <FaSearch className="my-auto mr-2" />
          {/* Input area */}
          <input
            className="bg-transparent outline-none md:w-auto w-[5.5rem] h-6"
            placeholder="Search..."
            onChange={(event) => {
              setListAnimationDelay(0.2);
              sortData(event.target.value);
            }}
          />
        </div>
      </motion.h1>

      {/* Project List */}
      <motion.ul {...({ className: "px-6" } as HTMLMotionProps<"ul">)}>
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
              {...({ id: data.title } as HTMLMotionProps<"li">)}
              key={index}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: listAnimationDelay + (index * 0.3) / 2,
                duration: 0.5,
                type: "spring",
              }}
              {...({ className: "scroll-mt-28" } as HTMLMotionProps<"li">)}
            >
              <div className="group mb-5 flex flex-col bg-[#0A0C0E] border border-[#1793D1]/50 hover:border-[#FF3333]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#FF3333]/80 shadow-[#1793D1]/50">
                {/* Project title */}
                <div className="flex">
                  <Link href={`#${data.title}`} className={"outline-none"}>
                    <h2 className="md:text-lg text-base font-semibold">
                      {data.title}
                    </h2>
                  </Link>
                </div>

                {/* Project Description */}
                <p className="md:text-base text-sm mb-3 text-[#F6F9FC]/75">
                  {data.description}
                </p>

                {/* Read more txt */}
                <Link
                  href={data.projectUrl}
                  target="_blank"
                  className="text-semibold hover:scale-[1.1] transition-all md:text-base text-sm mr-auto outline-none"
                >
                  <span className="flex group/readMore py-[0.15rem] px-[1rem] border border-[#1793D1]/50 group-hover:border-[#FF3333]/70 rounded-full bg-[#050607] hover:shadow-md shadow-sm hover:shadow-[#1793D1]/30 group-hover:shadow-[#FF3333]/50 transition-all shadow-[#1793D1]/30">
                    View Project
                    <FaEye className="my-auto ml-2 group-hover/readMore:scale-[1.1] transition-all" />
                  </span>
                </Link>
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
              transition={{ duration: 0.5, type: "spring" }}
              {...({
                className:
                  "px-5 py-2 bg-[#0A0C0E] border border-[#1793D1]/20 rounded-full text-red-500 md:text-base text-sm mx-auto text-center",
              } as HTMLMotionProps<"li">)}
            >
              Oops! No projects with that name. Check for mistake in your input.
            </motion.li>
          </div>
        )}
      </motion.ul>
    </>
  );
}
