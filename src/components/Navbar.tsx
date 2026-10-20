"use client";

import SectionMouseTracker from "@/utils/SectionMouseTracker";
import { NavLink } from "@@/data/NavLink";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavbarComponent() {
  const [activeSection, setActiveSection] = useState<string>("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (name: string) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
  };

  return (
    <>
      <SectionMouseTracker currentSection={setActiveSection} />

      <nav className="navbar fixed top-0 left-0 z-100 w-full border-2 border-gray-800 bg-[#060E19]/90 px-4 py-4 backdrop-blur-xs sm:px-8 sm:py-5 md:px-12 lg:px-20 xl:px-35 2xl:px-40">
        <div className="flex w-full items-center justify-between">
          {/* Logo */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <img
              src="/images/BBILogo.png"
              draggable={false}
              alt="logo"
              className="my-auto h-8 select-none sm:h-10"
            />
          </Link>

          {/* Desktop / Tablet Navigation */}
          <div className="my-auto hidden items-center gap-5 text-lg font-bold sm:flex">
            {NavLink.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                onClick={() => handleNavClick(data.name)}
                className={
                  activeSection === data.name.toLowerCase()
                    ? "active-text"
                    : "inactive-text"
                }
              >
                {data.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex items-center justify-center rounded-lg p-2 text-3xl text-white transition-colors hover:bg-white/10 sm:hidden"
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="mt-4 flex flex-col gap-1 border-t border-gray-700 pt-3 sm:hidden">
            {NavLink.map((data, index) => (
              <Link
                key={index}
                href={data.link}
                onClick={() => handleNavClick(data.name)}
                className={`rounded-lg px-4 py-3 text-base font-bold transition-colors ${
                  activeSection === data.name.toLowerCase()
                    ? "active-text bg-white/5"
                    : "inactive-text hover:bg-white/5"
                }`}
              >
                {data.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}