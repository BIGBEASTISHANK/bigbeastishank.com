"use client";
import Link from "next/link";
import { navLinks } from "@/libs/data";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <nav className=" fixed top-0 left-0 right-0 flex justify-center items-center my-10 z-50">
      <div className="border border-neutral-800 bg-black/60 backdrop-blur-lg rounded-full p-1">
        <ul className="flex md:gap-2 gap-1">
          {navLinks.map((data, index) => (
            <li
              key={index}
              className={`${data.url == pathName ? "bg-neutral-800" : ""} ${
                data.url != pathName ? "hover:text-white/50" : ""
              } rounded-full md:py-[0.375rem] md:px-5 py-1 px-3 md:text-base text-sm select-none transition-all`}
            >
              <Link href={data.url}>{data.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}