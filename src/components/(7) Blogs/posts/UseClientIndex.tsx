"use client";
import Link from "next/link";
import {
  FaArrowLeft,
  FaTag,
  FaCheck,
  FaClipboard,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";
import { ShortDivider } from "@/utility/Dividers";
import GoToButton from "@/utility/GoToButton";
import { Dispatch, SetStateAction, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

export function ClickToCopyCode({ children }: { children: React.ReactNode }) {
  const [copiedCode, setCopiedCode]: [
    copiedCode: boolean,
    setCopiedCode: Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);

  return (
    <CopyToClipboard
      text={String(children).replace(/\n$/, "")}
      className="my-auto justify-center"
      onCopy={() => {
        setCopiedCode(true);
        setTimeout(() => setCopiedCode(false), 2000);
      }}
    >
      <div>
        {copiedCode ? (
          <p className="flex my-auto gap-2 items-center justify-center text-[#00FF00] font-bold">
            Copied!
            <FaCheck className="text-base" />
          </p>
        ) : (
          <a title="Click to copy!" className="cursor-pointer select-none">
            <FaClipboard />
          </a>
        )}
      </div>
    </CopyToClipboard>
  );
}

// Dropdown TOC Component
function DropdownTOC({
  TOCData,
}: {
  TOCData: { level: number; content: string }[];
}) {
  const [openLevel1, setOpenLevel1] = useState<number>(0);
  const [openLevel2, setOpenLevel2] = useState<Set<string>>(new Set());

  // Get level 1 items
  const level1Items = TOCData.filter((item) => item.level === 1);

  // Get level 2
  const getLevel2Items = (level1Index: number) => {
    const currentLevel1 = level1Items[level1Index];
    const nextLevel1 = level1Items[level1Index + 1];

    const startIndex = TOCData.findIndex((item) => item === currentLevel1);
    const endIndex = nextLevel1
      ? TOCData.findIndex((item) => item === nextLevel1)
      : TOCData.length;

    return TOCData.slice(startIndex + 1, endIndex).filter(
      (item) => item.level === 2,
    );
  };

  // Get direct level 3
  const getDirectLevel3Items = (level1Index: number) => {
    const currentLevel1 = level1Items[level1Index];
    const nextLevel1 = level1Items[level1Index + 1];

    const startIndex = TOCData.findIndex((item) => item === currentLevel1);
    const endIndex = nextLevel1
      ? TOCData.findIndex((item) => item === nextLevel1)
      : TOCData.length;

    return TOCData.slice(startIndex + 1, endIndex).filter(
      (item) => item.level === 3,
    );
  };

  // Get level 3
  const getLevel3Items = (
    level2Item: { level: number; content: string },
    level1Index: number,
  ) => {
    const level2Items = getLevel2Items(level1Index);
    const level2Index = level2Items.findIndex((item) => item === level2Item);
    const nextLevel2 = level2Items[level2Index + 1];

    const startIndex = TOCData.findIndex((item) => item === level2Item);
    const endIndex = nextLevel2
      ? TOCData.findIndex((item) => item === nextLevel2)
      : level1Items[level1Index + 1]
        ? TOCData.findIndex((item) => item === level1Items[level1Index + 1])
        : TOCData.length;

    return TOCData.slice(startIndex + 1, endIndex).filter(
      (item) => item.level === 3,
    );
  };

  // Toggle level 2 section
  const toggleLevel2 = (level2Content: string) => {
    setOpenLevel2((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(level2Content)) {
        newSet.delete(level2Content);
      } else {
        newSet.add(level2Content);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col gap-2">
      {level1Items.map((level1, i) => {
        const level2Items = getLevel2Items(i);
        const directLevel3Items = getDirectLevel3Items(i);
        const hasLevel2 = level2Items.length > 0;
        const hasDirectLevel3 = directLevel3Items.length > 0;

        return (
          <div
            key={i}
            className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3"
          >
            {/* Heading (LVL 1) Item */}
            {/* <div className="cursor-pointer text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors">
              {(hasLevel2 || hasDirectLevel3) &&
                (openLevel1 === i ? (
                  <FaChevronDown
                    className="text-xs"
                    onClick={() => {
                      setOpenLevel1(openLevel1 === i ? -1 : i);
                    }}
                  />
                ) : (
                  <FaChevronRight
                    className="text-xs"
                    onClick={() => {
                      setOpenLevel1(openLevel1 === i ? -1 : i);
                    }}
                  />
                ))}
              <a href={`#`} className="hover:underline">
                {level1.content}
              </a>
            </div> */}

            {openLevel1 === i && (
              <div className="ml-6 mt-1">
                {/* Level 2 Items (if they exist) */}
                {hasLevel2 &&
                  level2Items.map((level2, j) => (
                    <div key={j} className="mb-1">
                      <div className="cursor-pointer text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors">
                        {getLevel3Items(level2, i).length > 0 &&
                          (openLevel2.has(level2.content) ? (
                            <FaChevronDown
                              className="text-xs"
                              onClick={() => toggleLevel2(level2.content)}
                            />
                          ) : (
                            <FaChevronRight
                              className="text-xs"
                              onClick={() => toggleLevel2(level2.content)}
                            />
                          ))}
                        <a
                          href={`#${level2.content}`}
                          className="hover:underline"
                        >
                          {level2.content}
                        </a>
                      </div>

                      {/* Level 3 Items under Level 2 */}
                      {openLevel2.has(level2.content) && (
                        <div className="ml-6 mt-1">
                          {getLevel3Items(level2, i).map((level3, k) => (
                            <div
                              key={k}
                              className="text-gray-400 hover:text-gray-300 transition-colors"
                            >
                              <a
                                href={`#${level3.content}`}
                                className="hover:underline"
                              >
                                {level3.content}
                              </a>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                {/* Direct Level 3 Items (when no Level 2 exists) */}
                {!hasLevel2 && hasDirectLevel3 && (
                  <div className="ml-3">
                    {directLevel3Items.map((level3, k) => (
                      <div
                        key={k}
                        className="text-gray-400 hover:text-gray-300 transition-colors mb-1"
                      >
                        <a
                          href={`#${level3.content}`}
                          className="hover:underline"
                        >
                          {level3.content}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// Main component
export default function UseClientIndex({
  frontmatter,
  MDXRemote,
  TOCData,
}: {
  frontmatter: { [key: string]: any };
  MDXRemote: React.ReactNode;
  TOCData: { level: number; content: string }[];
}) {
  return (
    <div className="flex min-[1531px]:px-20 px-0 scroll-mt-28">
      {/* Main content */}
      <div
        id="blogPost"
        className="px-5 max-w-[70rem] mx-auto overflow-x-auto min-[1531px]:basis-2/3 overflow-y-hidden"
      >
        {/* Header */}
        <div className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3">
          {/* GO Back arrow */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", duration: 0.5 }}
            className="flex w-min"
          >
            <Link
              href="/blogs"
              className="text-[#1793D1] hover:text-[#fdf3f3] transition-colors mb-2"
            >
              <FaArrowLeft />
            </Link>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, type: "spring", duration: 0.5 }}
            className="flex items-center font-bold md:text-3xl text-2xl mb-5"
          >
            ~/ {frontmatter.title}
          </motion.h1>

          {/* Blog Description */}
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring", duration: 0.5 }}
            className="md:text-base text-sm mb-3 text-[#F6F9FC]/75"
          >
            {frontmatter.description}
          </motion.p>

          {/* Blog Metadata */}
          <div className="flex gap-3 text-xs text-[#F6F9FC]/75 mt-4 mb-3">
            {/* Date */}
            <motion.p
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, type: "spring", duration: 0.5 }}
            >
              {new Date(frontmatter.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </motion.p>

            {/* Seprator */}
            <motion.p
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", duration: 0.5 }}
            >
              {" "}
              |{" "}
            </motion.p>

            {/* Minute read */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, type: "spring", duration: 0.5 }}
            >
              {frontmatter.minuteRead} min read
            </motion.p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 items-center">
            {frontmatter.tags.map((tag, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1.1 + (index * 0.3) / 2,
                  type: "spring",
                  duration: 0.5,
                }}
                className="flex justify-center items-center border border-[#1793D1]/70 rounded-full px-4 py-1 select-none font-normal text-sm my-auto"
              >
                <FaTag className="my-auto mr-2" />
                {tag}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Short Divider */}
        <ShortDivider delay={1.3} />

        {/* Inline Table of content */}
        <div className="min-[1531px]:hidden">
          {/* Heading */}
          <h1 className="font-bold text-2xl mx-5 sm:mx-3 mb-2">
            Table of Content
          </h1>

          {/* TOC */}
          <DropdownTOC TOCData={TOCData} />

          {/* Short Divider */}
          <ShortDivider delay={1.3} />
        </div>

        {/* Blog content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="prose prose-invert max-w-none border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3"
        >
          {MDXRemote}
        </motion.div>

        {/* Short Divider */}
        <ShortDivider delay={1.7} />

        {/* Go Back button */}
        <GoToButton
          title={"Back to Blogs"}
          link="/blogs"
          animationDelay={1.9}
        />
      </div>

      {/* Table of content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="h-[80vh] sticky top-24 min-[1531px]:flex hidden px-5 pb-10 select-none basis-1/3 min-[1531px]:flex-col"
      >
        {/* Heading */}
        <h1 className="font-bold text-lg mx-5 sm:mx-3">Table of Content</h1>

        {/* Divider */}
        <ShortDivider delay={0.3} customCSS="my-2 mx-5 sm:mx-3" />

        {/* Scrollable TOC Container */}
        <div className="flex-1 overflow-y-auto">
          <DropdownTOC TOCData={TOCData} />
        </div>
      </motion.div>
    </div>
  );
}
