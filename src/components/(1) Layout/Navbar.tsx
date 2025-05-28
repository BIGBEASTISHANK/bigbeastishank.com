"use client";
import Link from "next/link";
import { navLinks } from "@@/data/NavbarData";
import { usePathname } from "next/navigation";
import { HTMLMotionProps, motion } from "framer-motion";

export default function Navbar(){
  const pathName: string = usePathname();
  
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, scale: 0.7 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{duration: 0.5, type: "spring"}}
      {...({
        className:
          "fixed top-0 left-0 right-0 flex justify-center items-center md:my-10 my-5 z-50",
      } as HTMLMotionProps<"nav">)}
    >
      <div className="border border-[#1793D1] bg-[#1A1C23]/50 backdrop-blur-md rounded-xl p-1 shadow-md shadow-[#1793D1]/50">
        <ul className="flex md:gap-2 gap-1">
          {navLinks.map((data, index) => (
            <li
              key={index}
              className={`${
                data.url == pathName
                  ? "bg-[#0A0C0E] border border-[#1793D1]/50"
                  : ""
              } rounded-lg md:py-[0.375rem] md:px-5 py-2 px-4 md:text-base text-sm select-none transition-all`}
            >
              <Link
                href={data.url}
                className={`${
                  data.url != pathName ? "hover:text-[#515860]" : ""
                } transition-all outline-none`}
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
