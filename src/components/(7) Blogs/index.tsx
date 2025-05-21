"use client";
import { useState } from "react";
import Link from "next/link";
import HeadingBasic from "@/utility/HeadingBasic";
import { FaEye, FaSearch, FaTag } from "react-icons/fa";
import { motion, HTMLMotionProps } from "framer-motion";
import { ShortDivider } from "@/utility/Dividers";

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  minuteRead: number;
  tags: string[];
}

interface BlogComponentProps {
  posts: Post[];
}

export default function BlogComponent({ posts }: BlogComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div id="blogs" className="px-5 scroll-mt-24 min-h-[45vh]">
      {/* Title */}
      <HeadingBasic
        heading="Blogs"
        url="/blogs"
        description={
          <>
            <p>
              Explore a collection of my blogs covering a variety of topics,
              including web development, game development, and much more. Dive
              in to discover practical tips, insightful experiences, and helpful
              tricks that I've gathered along my journey.
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider delay={0.55} />

      {/* Search bar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.7 }}
        className="flex bg-[#050607] border border-[#1793D1] rounded-full px-4 md:mr-7 select-none font-normal md:text-base text-sm my-auto mb-5"
      >
        <FaSearch className="my-auto mr-2" />
        <input
          className="bg-transparent outline-none w-full h-10"
          placeholder="Search by title or tags..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
      </motion.div>

      {/* Blog Posts */}
      <ul className="px-2 my-10">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + (index * 0.3) / 2 }}
              {...({ className: "scroll-mt-24" } as HTMLMotionProps<"li">)}
            >
              <div className="group mb-5 flex flex-col bg-[#0A0C0E] border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50">
                {/* Blog title */}
                <div className="flex">
                  <Link href={`/blogs/${post.slug}`} className="outline-none">
                    <h2 className="md:text-lg text-base font-semibold">
                      {post.title}
                    </h2>
                  </Link>
                </div>

                {/* Blog Description */}
                <p className="md:text-base text-sm mb-3 text-[#AFB3C1]">
                  {post.description}
                </p>

                {/* Blog Metadata */}
                <div className="flex justify-between text-xs text-[#AFB3C1] mt-4 mb-3">
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span>{post.minuteRead} min read</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 items-center">
                  {post.tags.map((tag, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center border border-[#1793D1]/70 rounded-full px-4 py-1 select-none font-normal text-sm my-auto"
                    >
                      <FaTag className="my-auto mr-2" />
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Short Divider */}
                <ShortDivider />

                {/* Read more link */}
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-semibold hover:scale-[1.1] transition-all md:text-base text-sm mr-auto outline-none"
                >
                  <span className="flex group/readMore py-[0.15rem] px-[1rem] border border-[#1793D1]/50 group-hover:border-[#1793D1]/70 rounded-full bg-[#050607] hover:shadow-md shadow-sm hover:shadow-[#1793D1]/30 group-hover:shadow-[#1793D1]/50 transition-all shadow-[#1793D1]/30">
                    Read More
                    <FaEye className="my-auto ml-2 group-hover/readMore:scale-[1.1] transition-all" />
                  </span>
                </Link>
              </div>
            </motion.li>
          ))
        ) : (
          <div className="flex">
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              {...({
                className:
                  "px-5 py-2 bg-[#0A0C0E] border border-[#1793D1]/20 rounded-full text-red-500 md:text-base text-sm mx-auto text-center",
              } as HTMLMotionProps<"li">)}
            >
              Oops! No blogs found with that title or tag.
            </motion.li>
          </div>
        )}
      </ul>
    </div>
  );
}
