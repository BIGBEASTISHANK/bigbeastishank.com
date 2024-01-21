"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/libs/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, scale: 0.7 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="fixed top-0 left-0 right-0 flex justify-center items-center md:my-10 my-5 z-50"
    >
      <div className="border border-[#444D7E] bg-[#1A1C23]/50 backdrop-blur-md rounded-xl p-1 shadow-md shadow-[#444D7E]/50">
        <ul className="flex md:gap-2 gap-1">
          {navLinks.map((data, index) => (
            <li
              key={index}
              className={`${
                data.url == pathName
                  ? "bg-[#373942] border border-[#444D7E]/50"
                  : ""
              } rounded-lg md:py-[0.375rem] md:px-5 py-2 px-4 md:text-base text-sm select-none transition-all`}
            >
              <Link
                href={data.url}
                className={`${
                  data.url != pathName
                    ? "hover:text-[#8b8b8b]"
                    : ""
                } transition-all`}
              >
                {data.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
