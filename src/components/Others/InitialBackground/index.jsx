"use client";
import { motion } from "framer-motion";

export default function InitialBackground() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: .2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
      >
        {/* <div className="absolute  top-[-5rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-[68.75rem] bg-[#00aaff]" />
        <div className="absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[20rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#0D0D0D]" /> */}
      <div className="absolute md:left-[45%] left-[40%] md:top-[10vh] h-[65vh] w-[50vw] min-w-[40vw] bg-[#4eb8ee] blur-[9rem] md:blur-[14rem] lg:blur-[17rem] xl:blur-[20rem] rounded-full z-[-999]"/>
      <div className="absolute md:right-[45%] right-[40%] md:top-[10vh] h-[65vh] w-[50vw] min-w-[40vw] bg-[#f898ca] blur-[9rem] md:blur-[14rem] lg:blur-[17rem] xl:blur-[20rem] rounded-full z-[-999]"/>
      </motion.div>
    </>
  );
}
