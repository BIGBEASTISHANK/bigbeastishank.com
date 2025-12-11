"use client";
import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import { motion } from "framer-motion";
import Link from "next/link";
import { allLinksData } from "@@/data/AllLinksData";

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
        },
    },
};

const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1 },
};

export default function AllLinksComponent() {
    return (
        <div>
            {/* Heading */}
            <HeadingBasic
                heading="All Links to site"
                description={
                    <p>All links to hidden and public pages on this website.</p>
                }
            />

            {/* Short Divider */}
            <ShortDivider delay={0.5} />

            {/* Links List */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap gap-4 justify-center"
            >
                {allLinksData.map((linkItem, index) => (
                    <motion.div
                        key={index}
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-fit h-fit"
                    >
                        <Link href={linkItem.link}>
                            <div className="border border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 hover:border-[#1793D1] transition-colors duration-300">
                                <h3 className="text-lg font-semibold text-[#1793D1] mb-1">
                                    {linkItem.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                                    {linkItem.link}
                                </p>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
}
