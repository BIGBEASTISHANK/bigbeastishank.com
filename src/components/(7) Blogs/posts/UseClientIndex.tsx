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
    setCopiedCode: Dispatch<SetStateAction<boolean>>
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
  const [openLevel2, setOpenLevel2] = useState<number | null>(null);

  // Get level 1 items
  const level1Items = TOCData.filter((item) => item.level === 1);

  // Get level 2 items for a specific level 1 item
  const getLevel2Items = (level1Index: number) => {
    const currentLevel1 = level1Items[level1Index];
    const nextLevel1 = level1Items[level1Index + 1];

    const startIndex = TOCData.findIndex((item) => item === currentLevel1);
    const endIndex = nextLevel1
      ? TOCData.findIndex((item) => item === nextLevel1)
      : TOCData.length;

    return TOCData.slice(startIndex + 1, endIndex).filter(
      (item) => item.level === 2
    );
  };

  // Get level 3 items for a specific level 2 item
  const getLevel3Items = (
    level2Item: { level: number; content: string },
    level1Index: number
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
      (item) => item.level === 3
    );
  };

  return (
    <div className="flex flex-col gap-2">
      {level1Items.map((level1, i) => (
        <div key={i}>
          {/* Level 1 Item */}
          <div className="cursor-pointer text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors">
            {getLevel2Items(i).length > 0 &&
              (openLevel1 === i ? (
                <FaChevronDown
                  className="text-xs"
                  onClick={() => {
                    setOpenLevel1(openLevel1 === i ? -1 : i);
                    setOpenLevel2(null);
                  }}
                />
              ) : (
                <FaChevronRight
                  className="text-xs"
                  onClick={() => {
                    setOpenLevel1(openLevel1 === i ? -1 : i);
                    setOpenLevel2(null);
                  }}
                />
              ))}
            <a href={`#`} className="hover:underline">
              {level1.content}
            </a>
          </div>

          {/* Level 2 Items */}
          {openLevel1 === i && (
            <div className="ml-6 mt-1">
              {getLevel2Items(i).map((level2, j) => (
                <div key={j} className="mb-1">
                  <div className="cursor-pointer text-gray-400 flex items-center gap-2 hover:text-gray-300 transition-colors">
                    {getLevel3Items(level2, i).length > 0 &&
                      (openLevel2 === j ? (
                        <FaChevronDown
                          className="text-xs"
                          onClick={() =>
                            setOpenLevel2(openLevel2 === j ? null : j)
                          }
                        />
                      ) : (
                        <FaChevronRight
                          className="text-xs"
                          onClick={() =>
                            setOpenLevel2(openLevel2 === j ? null : j)
                          }
                        />
                      ))}
                    <a href={`#${level2.content}`} className="hover:underline">
                      {level2.content}
                    </a>
                  </div>

                  {/* Level 3 Items */}
                  {openLevel2 === j && (
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
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

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
    <div className="flex flex-row-reverse px-5">
      {/* Table of content */}
      <div className="h-full sticky top-24 min-[1531px]:block hidden px-5 select-none mx-auto">
        {/* Heading */}
        <h1 className="font-bold text-lg">Table of Content</h1>

        {/* Divider */}
        <ShortDivider delay={0.3} customCSS="my-2" />

        {/* Dropdown TOC */}
        <DropdownTOC TOCData={TOCData} />
      </div>

      {/* Main content */}
      <div
        id="blogPost"
        className="px-5 scroll-mt-24 max-w-[70rem] mx-auto overflow-x-zauto"
      >
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

        {/* Short Divider */}
        <ShortDivider delay={1.3} />

        {/* Blog content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
          className="prose prose-invert max-w-none"
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
    </div>
  );
}
