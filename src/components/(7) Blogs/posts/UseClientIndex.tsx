"use client";
import Link from "next/link";
import { FaArrowLeft, FaTag, FaCheck, FaClipboard } from "react-icons/fa";
import { ShortDivider } from "@/utility/Dividers";
import GoToButton from "@/utility/GoToButton";
import { Dispatch, SetStateAction, useState, useEffect } from "react";
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

// Table of content
function TableOfContents({ headings }: { headings: Array<{ id: string; text: string; level: number }> }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-10% 0% -80% 0%" }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [headings]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (headings.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="hidden min-[1145px]:block w-64 flex-shrink-0 sticky top-24 h-fit"
    >
      <div className="space-y-1">
        <h1 className="text-[#AFB3C1] font-bold text-lg mb-4 uppercase tracking-wide">
          Table of Contents
        </h1>
        
        <hr className="border-t border-[#1793D1] mb-4" />
        
        <nav className="space-y-2">
          {headings.map(({ id, text, level }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleClick(e, id)}
              className={`block transition-colors duration-200 hover:text-[#1793D1] ${
                activeId === id 
                  ? "text-[#1793D1] font-medium" 
                  : "text-[#AFB3C1]"
              } ${
                level === 1 ? "text-base font-medium" :
                level === 2 ? "text-sm ml-4" :
                "text-sm ml-8"
              }`}
            >
              {text}
            </a>
          ))}
        </nav>
      </div>
    </motion.div>
  );
}

export default function UseClientIndex({
  frontmatter,
  headings,
  MDXRemote,
}: {
  frontmatter: { [key: string]: any };
  headings: Array<{ id: string; text: string; level: number }>;
  MDXRemote: React.ReactNode;
}) {
  return (
    <div className="max-w-[90rem] mx-auto px-5">
      <div className="flex gap-8">
        <div className="flex-1 min-w-0 max-w-[70rem]">
          <div id="blogPost" className="scroll-mt-24">
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

              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", duration: 0.5 }}
              >
                {" "}
                |{" "}
              </motion.p>

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

            <ShortDivider delay={1.3} />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="prose prose-invert max-w-none"
            >
              {MDXRemote}
            </motion.div>

            <ShortDivider delay={1.7} />

            <GoToButton title={"Back to Blogs"} link="/blogs" animationDelay={1.9} />
          </div>
        </div>

        <TableOfContents headings={headings} />
      </div>
    </div>
  );
}
