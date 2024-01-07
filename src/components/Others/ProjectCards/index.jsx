"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaRegEye } from "react-icons/fa";

// Variables
const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 200, scale: 0.5 },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.2,
      delay: 0.3 * index,
      type: "spring",
    },
  }),
};

export default function ProjectCards({ projectData = [] }) {
  return (
    <div class="my-auto projectW:flex projectW:flex-wrap gap-[2rem] justify-center items-center">
      {projectData.map((data, index) => (
        // Card
        <motion.div
          className="bg-gray-900/70 backgrop-blur-lg p-5 rounded-2xl transition-all 2xl:max-w-[26.85rem] projectW:max-w-[22.05rem] projectW:mb-0 mb-8 drop-shadow-2xl"
          key={index}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={index}
        >
          {/* Image */}
          <Image
            src={data.imageUrl}
            alt={data.title}
            className="2xl:w-[25.6rem] 2xl:h-[14.4rem] projectW:w-[20.8rem] projectW:h-[11.7rem] rounded-lg select-none"
          />

          {/* Title */}
          <h2 className="mt-3 mb-2 xl:text-3xl projectW:text-2xl sm:text-4xl text-2xl font-bold">
            {data.title} {data.index}
          </h2>

          {/* Description */}
          <p className="min-h-[5.5rem] projectW:text-base sm:text-lg text-base">
            {data.description}
          </p>

          {/* Button */}
          <a
            className="backdrop-blur-sm w-[10.6rem] select-none flex bg-gray-950/30 mt-4 text-white border text-xl hover:scale-[1.05] px-4  active:scale-[0.95] py-1 rounded-full outline-none bg-blue-600 text-center transition-all"
            href={data.projectUrl}
            target="_blank"
          >
            View Project{" "}
            <FaRegEye className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all" />
          </a>
        </motion.div>
      ))}
    </div>
  );
}
