"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { FaBackward } from "react-icons/fa";
import SectionBasics from "@/utils/SectionBasics";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      className="flex flex-col min-h-[69vh] m-auto max-w-[90rem] px-[6%]"
      id="404"
    >
      <div className="m-auto">
        {/* Heading */}
        <SectionBasics
          title="404 Not found"
          desc="Whoops! The intergalactic web worms seem to have nibbled away at the
            digital threads, leading to a celestial 404 abyss; fear not,
            I'm diligently reconstructing the stardust pathways to unveil
            the cosmic wonders of my portfolio—stay tuned for the stellar
            return!"
        />

        {/* Go Back button */}
        <motion.div
          className="select-none flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <button
            onClick={() => router.back()}
            className="group backdrop-blur-sm flex border xl:text-3xl lg:text-2xl text-xl hover:scale-[1.1] active:scale-[0.9] lg:px-10 px-[1.65rem] py-1 rounded-full bg-gray-900/30 outline-none transition-all drop-shadow-xl"
          >
            Go Back{" "}
            <FaBackward className="my-auto ml-3 group-hover:scale-[1.1] group-active:scale-[0.8] transition-all text-white" />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
