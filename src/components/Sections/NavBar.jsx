"use client";
// Import
import clsx from "clsx";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { motion } from "framer-motion";
import { useActiveSectionContext } from "../Context/ActiveSection";

// Export function
export default function NavBar() {
  // Variables

  // Navbar scroll animation
  // const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  // Component
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[3.6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.35rem] sm:top-6 sm:h-[3.25rem] sm:w-[24rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      />

      {/* Nav links */}
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[21rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          {navLinks.map((data) => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={data.urlLink}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              {/*  */}
              <Link
                className={clsx(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition",
                  
                  // Scroll Animation
                  // {
                  //   "text-gray-950": activeSection === data.name,
                  // }
                )}
                // Scroll animation
                // onClick={() => {
                //   setActiveSection(data.name), setTimeOfLastClick(Date.now());
                // }}
                
                href={data.urlLink}
              >
                {data.name}

                {/* Scroll animation */}
                {/* Active link bg */}
                {/* {data.name === activeSection && (
                  <motion.span
                    className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )} */}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
