"use client";
import Link from "next/link";
import { socialMedia } from "@@/data/FooterData";
import { FullDivider, ShortDivider } from "@/utility/Dividers";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const forbidenPathsForVisitorCount = ["/admin"];

export default function Footer() {
    const pathName: string = usePathname().split("/blogs/")[1];
    const currentPath = usePathname();
    const [nthvisitor, setNthvisitor] = useState<number>();

    useEffect(() => {
        const isForbiddenPath = forbidenPathsForVisitorCount.some(path => 
            currentPath.startsWith(path)
        );

        async function handleVisitorCount() {
            try {
                const method = isForbiddenPath ? "GET" : "PUT";
                const response = await fetch("/api/visitorCount", {
                    method: method,
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setNthvisitor(data.nthvisitor);
            } catch (error) {
                console.error("Failed to fetch visitor count:", error);
            }
        }

        handleVisitorCount();
    }, []);

    return (
        <footer
            className={`text-center justify-center items-center my-5 ${
                pathName != null
                    ? "max-w-[110rem] sm:p-5 p-3"
                    : "md:max-w-[45rem] max-w-[35rem]"
            } mx-auto`}
        >
            <FullDivider />

            <div className="flex flex-col border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 justify-center items-center">
                {nthvisitor && (
                    <motion.p
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="px-3 py-2 border border-[#0088CC] shadow-sm shadow-[#0088CC] rounded-3xl text-center text-sm text-[#0088CC] w-fit mb-3 select-none"
                    >
                        You are {nthvisitor.toLocaleString('en-IN')}th Visitor.
                    </motion.p>
                )}
                
                <p className="md:text-base text-sm">
                    Made with ❤️ by{" "}
                    <strong>
                        <a
                            href="/github"
                            target="_blank"
                            className="text-[#0088CC] hover:underline outline-none"
                        >
                            BIGBEASTISHANK
                        </a>
                    </strong>
                </p>
                
                <ShortDivider customCSS="my-2" />
                
                <div className="mt-3 md:text-2xl text-xl flex flex-wrap gap-5 justify-center mx-10">
                    {socialMedia.map((data, index) => (
                        <Link
                            key={index}
                            aria-label={data.label}
                            href={data.link}
                            target="_blank"
                            className={"outline-none"}
                        >
                            <data.icon />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
