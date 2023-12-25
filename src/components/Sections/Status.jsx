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
          Playing Minecraft and learning networking.
          <br />
          IP: <strong>local.bigbeastishank.com</strong>
          <br />
          Java port: <strong>50403</strong> | Bedrock port: <strong>3807</strong>
          <br />
          Java version: <strong>1.20.4</strong> | Bedrock version: <strong>1.20.40 - 1.20.51</strong>
          <br />
          <br />
          Current Date: 26 December 2023
        </p>
      </motion.div>
    </section>
  );
}
