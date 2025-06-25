"use client";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { NavbarData } from "@@/data/NavbarData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavbarComponent() {
  // Getting pathname
  const currentPath: string = usePathname();

  return <nav>{currentPath === "/" ? null : <OtherPageNavbarComponent />}</nav>;
}

// Root Navbar component
export function RootNavbarComponent() {
  // Variables
  const currentPath: string = usePathname();
  const [activePath, setActivePath] = useState(currentPath);
  const [heroSectionViewPercent, setHeroSectionViewPercent] = useState(0.0);

  return (
    <nav
      className={`${
        heroSectionViewPercent < 10.7 ? "fixed top-0" : "relative"
      } flex justify-center items-center gap-5 rounded-full my-[1rem] w-min px-3 py-3 backdrop-blur-xl border`}
      style={{ borderColor: CP.border.emphasis.hex }}
    >
      {NavbarData.map((data, index) => (
        <p
          key={index}
          className={`px-3 py-1 rounded-full select-none ${
            activePath === data.link ? "navItemIsActive" : ""
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
