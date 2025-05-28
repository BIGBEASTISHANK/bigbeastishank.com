"use client";
import Link from "next/link";
import { FaArrowLeft, FaTag, FaCheck, FaClipboard } from "react-icons/fa";
import { ShortDivider } from "@/utility/Dividers";
import GoToButton from "@/utility/GoToButton";
import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { motion } from "framer-motion";

export function ClickToCopyCode({ children }: { children: React.ReactNode }) {
  const [copiedCode, setCopiedCode] = useState(false);

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

export default function UseClientIndex({
  frontmatter,
  MDXRemote,
}: {
  frontmatter: { [key: string]: any };
  MDXRemote: React.ReactNode;
}) {
  return (
    <div id="blogPost" className="px-5 scroll-mt-24 max-w-[70rem] mx-auto">
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
        className="md:text-base text-sm mb-3 text-[#AFB3C1]"
      >
        {frontmatter.description}
      </motion.p>

      {/* Blog Metadata */}
      <div className="flex gap-3 text-xs text-[#AFB3C1] mt-4 mb-3">
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
      <ShortDivider delay={1.3}/>

      {/* Blog content */}
      <motion.div
      initial={{ opacity: 0, y: 500 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, type: "spring", duration: 0.5 }}
      className="prose prose-invert max-w-none">{MDXRemote}</motion.div>

      {/* Short Divider */}
      <ShortDivider delay={1.7} />

      {/* Go Back button */}
      <GoToButton title={"Back to Blogs"} link="/blogs" animationDelay={1.9}/>
    </div>
  );
}
