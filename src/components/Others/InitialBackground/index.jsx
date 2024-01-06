"use client";
import { motion } from "framer-motion";

export default function InitialBackground() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
      <div className="fixed md:left-[45%] left-[40%] md:top-[10vh] h-[65vh] w-[50vw] min-w-[40vw] bg-[#4eb8ee] blur-[9rem] md:blur-[14rem] lg:blur-[17rem] xl:blur-[20rem] rounded-full z-[-999]"/>
      <div className="fixed md:right-[45%] right-[40%] md:top-[10vh] h-[65vh] w-[50vw] min-w-[40vw] bg-[#f37cba] blur-[9rem] md:blur-[14rem] lg:blur-[17rem] xl:blur-[20rem] rounded-full z-[-999]"/>
      </motion.div>
    </>
  );
}
