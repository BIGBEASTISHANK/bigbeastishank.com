"use client";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { LanguageData, TechstackData, ToolsData } from "@@/data/TechstackData";

export default function SkillsComponent() {
  return (
    <div id="skills" className="min-h-[100vh] flex flex-col py-5">
      <div className="flex-1 flex flex-col justify-center">
        {/* Heading */}
        <div className="flex min-h-[7.4rem] sm:min-h-[7rem] md:min-h-[11rem] 2xl:min-h-[13.5rem] 2xl:px-20 sm:px-15 px-5 py-3 lg:py-7">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-end 2xl:items-center"
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-bold p-3 md:p-4 xl:p-5 rounded-2xl backdrop-blur-md select-none"
              style={{
                color: CP.accent.hex,
                border: `1px solid ${CP.border.subtle.hex}`,
              }}
            >
              Tech Stack
            </h1>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="flex flex-col h-full gap-5">
          {/* Languages */}
          <CarouselCard data={LanguageData} />

          {/* Tools */}
          <CarouselCard data={ToolsData} animDelay={0.9} />
        </div>
      </div>
    </div>
  );
}

// Paginated Carousel Component
function CarouselCard({
  data,
  animDelay = 0.5,
}: {
  data: TechstackData[];
  animDelay?: number;
}) {
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4); // Start with server default
  const [isClient, setIsClient] = useState(false);

  // Responsive items calculation
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1536) return 4; // 2xl
      if (window.innerWidth >= 1280) return 3; // xl
      if (window.innerWidth >= 768) return 2; // md
      return 1;
    }
    return 4;
  };

  // Handle client-side hydration
  useEffect(() => {
    setIsClient(true);
    setItemsPerPage(getItemsPerPage());
  }, []);

  // Handle resize events
  useEffect(() => {
    if (!isClient) return;

    const handleResize = () => setItemsPerPage(getItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const getCurrentItems = () => {
    const start = currentPage * itemsPerPage;
    return data.slice(start, start + itemsPerPage);
  };

  const nextPage = () => {
    setIsFirstLoad(false);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setIsFirstLoad(false);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="2xl:px-20 sm:px-15 px-5">
      {/* Section Title with Navigation */}
      <div className="flex items-center justify-end sm:mb-8 mb-4">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Previous Button */}
          <motion.button
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animDelay }}
            onClick={prevPage}
            viewport={{ once: true }}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg backdrop-blur-md flex items-center justify-center cursor-pointer outline-none"
            style={{
              border: `1px solid ${CP.border.subtle.hex}`,
              color: CP.accent.hex,
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </motion.button>

          {/* Page Indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: animDelay }}
            viewport={{ once: true }}
            className="flex items-center justify-center text-sm sm:text-base font-mono w-17 h-8 sm:w-18 sm:h-10 md:w-16 md:h-12 rounded-lg backdrop-blur-md"
            style={{
              border: `1px solid ${CP.border.subtle.hex}`,
              color: CP.accent.hex,
            }}
          >
            {`${currentPage + 1} / ${totalPages}`}
          </motion.div>

          {/* Next Button */}
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: animDelay }}
            viewport={{ once: true }}
            onClick={nextPage}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg backdrop-blur-md flex items-center justify-center cursor-pointer outline-none"
            style={{
              border: `1px solid ${CP.border.subtle.hex}`,
              color: CP.accent.hex,
            }}
          >
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-6">
        {getCurrentItems().map((items, index) => (
          <motion.div
            key={`${currentPage}-${index}`}
            initial={{ opacity: 0, y: index % 2 === 0 ? 100 : -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              bounce: 0.6,
              delay: isFirstLoad
                ? animDelay + (index * 0.2) / 2
                : (index * 0.2) / 2,
            }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col min-h-[11rem] md:min-h-[13rem] lg:min-h-[14rem] 2xl:min-h-[15rem] rounded-2xl backdrop-blur-md"
              style={{ border: `1px solid ${CP.border.subtle.hex}` }}
            >
              <div className="flex flex-col gap-4 lg:gap-5 p-3 sm:p-4 md:p-3 2xl:p-5 flex-1">
                {/* Header */}
                <div className="flex items-center gap-2 sm:gap-3 select-none">
                  {/* Icon */}
                  <items.icon
                    className="w-10 h-10 sm:w-12 sm:h-12 lg:w-11 lg:h-11 xl:h-12 xl:w-12 2xl:w-[3.5rem] 2xl:h-[3.5rem] text-primary p-2 sm:p-3 backdrop-blur-3xl rounded-xl flex-shrink-0"
                    style={{ border: `1px solid ${CP.border.subtle.hex}` }}
                  />

                  {/* Name */}
                  <h3 className="text-base sm:text-lg lg:text-2xl 2xl:text-3xl font-bold leading-tight">
                    {items.name}
                  </h3>
                </div>

                {/* Reason */}
                <p className="text-sm md:text-sm lg:text-[0.95rem] 2xl:text-base font-mono opacity-80 leading-relaxed">
                  {items.reason}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
