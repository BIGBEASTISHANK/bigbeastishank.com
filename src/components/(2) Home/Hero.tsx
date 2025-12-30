"use client";
import Link from "next/link";
import Image from "next/image";
import { ReactTyped } from "react-typed";
import { HTMLMotionProps, motion } from "framer-motion";
import logo from "@@/public/img/main/BBILogo.png";

export default function Hero() {
    return (
        <div className="px-5 flex flex-col scroll-mt-96">
            {/* Image */}
            <motion.a
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                {...({ href: logo.src, target: "_blank" } as any)}
                className="md:h-[120px] md:w-[120px] h-[100px] w-[100px] md:mb-7 mb-5 z-10 outline-none"
            >
                <Image
                    src={logo}
                    alt={"logo"}
                    className="select-none rounded-2xl border-2 border-[#1793D1] hover:scale-[1.1] transition-all hover:shadow-xl shadow-lg hover:shadow-[#1793D1]/50 shadow-[#1793D1]/50 sm:mx-5 mx-3"
                />
            </motion.a>

            {/* Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
                {...({
                    className:
                        "font-bold md:text-xl text-lg md:mb-7 mb-4 border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 w-fit",
                } as HTMLMotionProps<"h1">)}
            >
                I'm Ishank ~{" "}
                <ReactTyped
                    strings={[
                        "Full-Stack Web Developer",
                        "Game Developer",
                        "Network and Server Administrator",
                        "Pentester",
                    ]}
                    typeSpeed={60}
                    backSpeed={40}
                    startDelay={600}
                    backDelay={800}
                    loop
                />
            </motion.h1>

            {/* Text */}
            <div className="md:text-base text-sm md:text-left flex flex-col md:gap-3 gap-2 text-[#F6F9FC]/75 border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3">
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
                    className="text-justify"
                >
                    A <strong>fullstack web developer</strong> specializing in
                    modern web technologies and scalable applications. I build
                    comprehensive web solutions using <strong>NextJS</strong>{" "}
                    for frontend development and <strong>Python</strong> for
                    backend with <strong>MongoDB</strong> databases. I also work
                    as a <strong>server administrator</strong> and{" "}
                    <strong>network administrator</strong>, ensuring robust
                    infrastructure and optimal system performance.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    className="text-justify"
                >
                    Currently expanding my expertise in{" "}
                    <strong>AI/ML fundamentals</strong> and strengthening my
                    foundation with{" "}
                    <strong>data structures and algorithms</strong>. I also
                    create <strong>open-source games</strong> using Unity and
                    exploring Unreal Engine. Additionally, I explore{" "}
                    <strong>cybersecurity</strong> through penetration testing,
                    finding satisfaction in securing computer systems and
                    networks. I use <strong>Arch BTW</strong>!
                </motion.p>
            </div>

            {/* Button */}
            <div className="flex gap-5 items-center">
                <Link
                    href={
                        "mailto:business@bigbeastishank.com?subject=%5BGeneral%20Contact%5D%20Regarding%20%5Byour%20inquiry%5D&body=Hey%20Ishank%2C%0AI'm%20%5Byour%20name%5D.%20%5Byour%20request%5D"
                    }
                    className="group/chm hover:scale-[1.1] transition-all select-none outline-none sm:ml-5 ml-3 w-fit"
                    target="_blank"
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.4, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        {...({
                            className: "outline-none cursor-pointer",
                        } as HTMLMotionProps<"button">)}
                    >
                        <p className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border border-[#1793D1] rounded-full bg-[#0A0C0E] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all">
                            Contact Me
                        </p>
                    </motion.button>
                </Link>

                <a
                    href={"/docs/CV.pdf"}
                    className="group/chm hover:scale-[1.1] transition-all select-none outline-none sm:mr-5 mr-3 w-fit"
                    target="_blank"
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.4, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.5, type: "spring" }}
                        {...({
                            className: "outline-none cursor-pointer",
                        } as HTMLMotionProps<"button">)}
                    >
                        <p className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border border-[#1793D1] rounded-full bg-[#0A0C0E] group-hover/chm:shadow-lg shadow-md group-hover/chm:shadow-[#1793D1]/50 shadow-[#1793D1]/50 transition-all">
                            Load CV
                        </p>
                    </motion.button>
                </a>
            </div>
        </div>
    );
}
