"use client";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { allHirePlan } from "@@/data/HireData";
import HeadingBasic from "@/utility/HeadingBasic";
import { HTMLMotionProps, motion } from "framer-motion";
import { ShortDivider } from "@/utility/Dividers";

export default function HireComponent() {
  return (
    <div id="hire" className="px-5 scroll-mt-28 min-h-[45vh]">
      {/* Title */}
      <HeadingBasic
        heading="Hire Me"
        url="#hire"
        description={
          <>
            <p className="text-justify">
              Have work to do? I'm always open to new opportunities. Hire me to
              do your work for you. I'm a freelancer with a passion for creating
              innovative solutions that make a difference.
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider delay={0.55}/>

      {/* Hire me card */}
      <ul className="px-2 my-10">
        {allHirePlan.map((allHirePlanData, index) => (
          <motion.li
            {...({ id: allHirePlanData.type } as HTMLMotionProps<"li">)}
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + (index * 0.3) / 2, duration: 0.5, type: "spring" }}
            {...({ className: "scroll-mt-28" } as HTMLMotionProps<"li">)}
          >
            <div className="group mb-5 flex flex-col bg-[#0A0C0E] border border-[#1793D1]/50 hover:border-[#FFFF00]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#FFFF00]/80 shadow-[#1793D1]/50">
              {/* Plan title */}
              <div className="flex">
                <Link
                  href={`#${allHirePlanData.type}`}
                  className={"outline-none"}
                >
                  <h2 className="md:text-lg text-base font-semibold">
                    {allHirePlanData.type}
                  </h2>
                </Link>
              </div>

              {/* Plan Description */}
              <p className="md:text-base text-sm mb-3 text-[#F6F9FC]/75">
                {allHirePlanData.description}
              </p>

              {/* Read more txt */}
              <Link
                href={allHirePlanData.link}
                className="text-semibold hover:scale-[1.1] transition-all md:text-base text-sm mr-auto outline-none"
              >
                <span className="flex group/readMore py-[0.15rem] px-[1rem] border border-[#1793D1]/50 group-hover:border-[#FFFF00]/70 rounded-full bg-[#050607] hover:shadow-md shadow-sm hover:shadow-[#1793D1]/30 group-hover:shadow-[#FFFF00]/50 transition-all shadow-[#1793D1]/30">
                  View Plans
                  <FaEye className="my-auto ml-2 group-hover/readMore:scale-[1.1] transition-all" />
                </span>
              </Link>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
