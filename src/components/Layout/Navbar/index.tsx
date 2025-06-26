"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { NavbarData } from "@@/data/NavbarData";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";

export default function NavbarComponent() {
  // Getting pathname
  const currentPath: string = usePathname();

  // Returning different nav if on other page
  return <nav>{currentPath === "/" ? null : <OtherPageNavbarComponent />}</nav>;
}

// Root Navbar component
export function RootNavbarComponent() {
  // Variables
  const currentPath: string = usePathname();
  const [activePath, setActivePath] = useState(currentPath + "#hero");
  const [isFixed, setIsFixed] = useState(false);

  // Use effect to run functions
  useEffect(() => {
    // Variables
    const allSections = ["about", "skills", "works"];

    // Hero in viewport checking
    function heroInViewport() {
      const element = document.getElementById("hero");
      // Variables
      let sectionViewport = 0;

      if (element) {
        // Getting Rect
        const rect: DOMRect = element.getBoundingClientRect();
        sectionViewport = (rect.bottom / rect.height) * 100;
      }

      // Setting navbar should be fixed
      if (sectionViewport < 10.7) setIsFixed(true);
      else setIsFixed(false);

      if (sectionViewport > 49) setActivePath("/#hero");
    }

    // Skills in viewport checking
    function otherSectionInViewport() {
      allSections.map((ele) => {
        // Variables
        let sectionViewport = 0;
        const element = document.getElementById(ele);

        if (element) {
          // Getting Rect
          const rect: DOMRect = element.getBoundingClientRect();
          sectionViewport = (rect.top / rect.height) * 100;
        }

        // Changing path
        if (sectionViewport < 49) setActivePath(`/#${ele}`);
      });
    }

    // Scroll handler function
    const scrollHandler = () => {
      heroInViewport();
      otherSectionInViewport();
    };

    // Initializing all function
    scrollHandler();

    // Added scroll event listner
    window.addEventListener("scroll", scrollHandler);

    // Removing event listner
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <nav
      className={`${
        isFixed ? "fixed top-0" : "relative"
      } flex justify-center items-center md:gap-5 rounded-full my-[1rem] w-min px-3 py-3 backdrop-blur-xl border overflow-hidden z-50`}
      style={{ borderColor: CP.border.emphasis.hex }}
    >
      {NavbarData.map((data, index) => (
        <motion.div
          key={index}
          className={`rounded-full select-none flex relative`}
        >
          {/* Active background color */}
          {activePath === data.link && (
            <motion.div
              layoutId={"navbarBgActive"}
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: CP.primary.hex }}
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

          {/* Text */}
          <Link href={data.link} className="relative z-10 px-3 py-1">
            {data.name}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}

// Other page navbar component

function OtherPageNavbarComponent() {
  return <>hi</>;
}
