"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { ActivateStateVar } from "@@/data/ActiveStateData";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import {
  gameProjects,
  otherProjects,
  ProjectData,
  websiteProjects,
} from "@@/data/ProjectsData";
import Image from "next/image";
import { FaLink } from "react-icons/fa";

export default function ProjectsComponent() {
  const sections: String[] = ["Games", "Website", "Others"];
  const [currentSection, setCurrentSection] = useState<String>("Games");
  const [initialCardAnimDelay, setInitialCardAnimDelay] = useState<number>(0.5);

  return (
    <div id="projects" className="min-h-[100dvh] scroll-mt-24 flex flex-col">
      {/* Projects name */}
      <div
        className="flex items-center sm:items-start xl:pl-20 sm:pl-10 p-5"
        style={{ color: CP.primary.hex }}
      >
        <motion.p
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl sm:text-4xl font-bold select-none sm:p-5 p-3 rounded-3xl backdrop-blur-lg"
          style={{ border: `1px solid ${CP.border.subtle.hex}` }}
        >
          Projects
        </motion.p>
      </div>

      {/* Section selector */}
      <div className="flex justify-end sm:mb-10 mb-5 xl:pr-20 sm:pr-10 pr-5">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className="flex sm:gap-3 gap-1 sm:p-4 p-2 backdrop-blur-md rounded-3xl"
          style={{ border: `1px solid ${CP.border.subtle.hex}` }}
        >
          {sections.map((name, index) => (
            <button
              key={index}
              className="relative text-sm sm:text-base md:text-md lg:text-lg cursor-pointer outline-none px-3 py-1"
              onClick={() => {
                setCurrentSection(name.toString());
                setInitialCardAnimDelay(0.1);
              }}
            >
              {name === currentSection && (
                <motion.div
                  layoutId={ActivateStateVar.projects}
                  className="absolute inset-0 rounded-full blur-xs -z-10"
                  style={{
                    backgroundColor: CP.primary.hex,
                    border: `1px solid ${CP.border.emphasis.hex}`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 1000,
                    damping: 60,
                    restDelta: 0.02,
                  }}
                  initial={false}
                  animate={{ x: 0, y: 0 }}
                />
              )}
              {name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Card Data */}
      <div className="flex flex-1 items-center justify-center">
        <ProjectCardsComponents
        currentSection={currentSection}
        initialCardAnimDelay={initialCardAnimDelay}
      />
      </div>
    </div>
  );
}

function ProjectCardsComponents({
  currentSection,
  initialCardAnimDelay,
}: {
  currentSection: String;
  initialCardAnimDelay: number;
}) {
  let cardData: ProjectData[] = [];
  const [isHovered, setIsHovered] = useState<{ yes: boolean; index: number }>({
    yes: false,
    index: -1,
  });
  const [animateCards, setAnimateCards] = useState<boolean>(false);

  switch (currentSection) {
    case "Games":
      cardData = gameProjects;
      break;
    case "Website":
      cardData = websiteProjects;
      break;
    case "Others":
      cardData = otherProjects;
      break;
  }

  return (
    <motion.div
      className="xl:px-20 sm:px-10 px-5 flex flex-wrap 2xl:gap-x-20 xl:gap-x-15 lg:gap-x-40 md:gap-x-12 gap-x-5 md:gap-y-10 gap-y-5 justify-center items-center"
      onViewportEnter={() => setAnimateCards(true)}
      viewport={{ once: true }}
    >
      {cardData.map((project, index) => (
        <motion.div
          key={`${currentSection}-${index}`}
          initial={{ scale: 0 }}
          animate={animateCards ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.5,
            delay: initialCardAnimDelay + (index * 0.3) / 2,
            type: "spring",
          }}
        >
          <motion.div
            className="flex flex-col p-5 gap-5 rounded-3xl backdrop-blur-lg max-w-[20rem] h-[24rem]"
            whileHover={{ scale: 1.1 }}
            style={{ border: `1px solid ${CP.border.subtle.hex}` }}
          >
            <div className="flex-shrink-0 h-48 w-full overflow-hidden rounded-2xl">
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={300}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text content */}
            <div className="flex flex-col gap-2">
                {/* Title */}
                <a
                  href={project.projectUrl}
                  target="_blank"
                  className="text-base sm:text-md md:text-xl font-bold line-clamp-2 flex items-center gap-2 group transition-all w-fit"
                  style={{
                    color: isHovered.index === index && isHovered.yes ? CP.primary.hex : "",
                  }}
                  onMouseEnter={() => setIsHovered({yes: true, index})}
                  onMouseLeave={() => setIsHovered({yes: false, index})}
                >
                  {/* Text */}
                  {project.title}

                  {/* Link icon */}
                  <FaLink className="text-xl sm:text-md md:text-lg scale-0 group-hover:scale-75 transition-all ease-in-out duration-300" />
                </a>

              {/* Description */}
              <p
                className="text-xs sm:text-sm leading-relaxed line-clamp-4"
                style={{ color: CP.text.tertiary.hex }}
              >
                {project.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
}
