"use client";
// Import
import { motion } from "framer-motion"
import { links } from "@/lib/data";
import Link from "next/link";

// Export function
export default function Navbar() {
    return <header className="z-[999] relative">
        <motion.div
            className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
            initial={{ y: -100, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }} />

        {/* Nav links */}
        <nav
            className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">

            <ul
                className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">

                {links.map((link) => (
                    <motion.li
                        className="h-3/4 flex items-center justify-center "
                        key={link.hash}
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}>

                        <Link
                            className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition"
                            href={link.hash}>
                            {link.name}
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </nav>
    </header>
}