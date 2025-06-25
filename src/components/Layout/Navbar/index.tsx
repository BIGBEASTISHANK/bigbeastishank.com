"use client";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { NavbarData } from "@@/data/NavbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
  const [isFixed, setIsFixed] = useState(false);

  // Use effect to run functions
  useEffect(() => {
    // Variables
    const heroElement = document.getElementById("hero");
    
    // Hero in viewport checking
    function heroInViewport() {
      // Variables
      let sectionViewport = 0;

      if (heroElement) {
        // Getting Rect
        const rect: DOMRect = heroElement.getBoundingClientRect();
        sectionViewport = (rect.bottom/rect.height)*100;
      }

      // Setting navbar should be fixed
      if(sectionViewport < 10.7) setIsFixed(true);
      else setIsFixed(false);
    }

    // Initializing functions
    heroInViewport();

    // Added scroll event listner
    window.addEventListener("scroll", heroInViewport);

    // Removing event listner
    return () => window.removeEventListener("scroll", heroInViewport);
  }, []);

  return (
    <nav
      className={`${
        isFixed ? "fixed top-0" : "relative"
      } flex justify-center items-center md:gap-5 rounded-full my-[1rem] w-min px-3 py-3 backdrop-blur-xl border`}
      style={{ borderColor: CP.border.emphasis.hex }}
    >
      {NavbarData.map((data, index) => (
        <p
          key={index}
          className={`px-3 py-1 rounded-full select-none ${
            currentPath === data.link ? "navItemIsActive" : ""
          }`}
        >
          <Link href={data.link}>{data.name}</Link>
        </p>
      ))}
    </nav>
  );
}

// Other page navbar component

function OtherPageNavbarComponent() {
  return <>hi</>;
}
