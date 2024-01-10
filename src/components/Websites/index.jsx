"use client";
import { motion } from "framer-motion";
import { websiteProjects } from "@/lib/data";
import ProjectCards from "@/utils/ProjectCards";
import SectionBasics from "@/utils/SectionBasics";

export default function Websites({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="websites">
      {/* Heading */}
      <SectionBasics
        title="Website Projects"
        url="/#websites"
        desc="Browse Through My Web Design Portfolio: A Compilation of Websites
          Crafted Throughout My Creative Journey"
      />

      {/* Websites */}
      <ProjectCards projectData={websiteProjects} />
    </div>
  );
}
