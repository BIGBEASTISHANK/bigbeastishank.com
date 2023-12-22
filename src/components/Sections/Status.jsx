"use client";
// Imports
import { motion } from "framer-motion";
import SectionHeading from "../Subs/SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function Status() {
  // Variables

  // Navbar scroll animation but now working
  // const { ref } = useSectionInView("Status");

  // Component
  return (
    <section
      // ref={ref}
      className="max-w-[45rem] text-center leading-8 scroll-mt-28"
      id="status"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        viewport={{ once: true }}
        className="mb-[1rem]"
      >
        <SectionHeading>Skills</SectionHeading>
      </motion.div>

      {/* Status */}
      <motion.div
        className=" max-w-[45rem] mx-auto text-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        viewport={{ once: true }}
      >
        <p>
          I made this website and it is completed with the help of{" "}
          <a
            href="https://www.youtube.com/@ByteGrad/videos"
            target="_blank"
            className="underline"
          >
            Byte Grad
          </a>{" "}
          but I am not satisfied with it, I will change this website in future.
          <br />
          <br />
          Current Date: 23 December 2023
        </p>
      </motion.div>
    </section>
  );
}
