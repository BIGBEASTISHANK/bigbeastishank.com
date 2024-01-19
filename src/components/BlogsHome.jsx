"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaSearch } from "react-icons/fa";
import HeadingBasic from "@/utility/HeadingBasic";

export default function BlogsHome({ blogData = [] }) {
  // Searchbar variables
  const [sortedData, setSortedData] = useState("");
  // List variable
  const [listAnimationDelay, setListAnimationDelay] = useState(0.9);

  // Converting blog date string to js date
  const parseDate = (dateString) => {
    const [day, month, year] = dateString.split("/");
    return new Date(`${year}-${month}-${day}`);
  };

  // Comparing 2 date and sorting data accordingly
  const compareDates = (a, b) => {
    const dateA = parseDate(a.dateOfBlog);
    const dateB = parseDate(b.dateOfBlog);

    return dateB - dateA;
  };

  return (
    <div className="px-5 flex flex-col min-h-[60vh]">
      {/* Heading */}
      <HeadingBasic
        heading="Blogs"
        url="/blogs"
        description={
          <>
            ✨ Dive into the realm of insights and knowledge on my blogs.
            Whether you&apos;re into tech, development, or just the curious
            mind, there&apos;s something for everyone.
          </>
        }
      />

      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#4e4e4e] z-10" />

      {/* Search bar  */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex bg-black/10 border border-white/20 rounded-full px-4 select-none"
      >
        <FaSearch className="my-auto mr-2" />
        {/* Input area */}
        <input
          className="w-full h-11 bg-transparent outline-none"
          placeholder="Search..."
          onChange={(event) => {
            setListAnimationDelay(0);
            setSortedData(event.target.value);
          }}
        />
      </motion.div>

      {/* Short Divider */}
      <div className="w-[20%] h-[.125rem] my-5 mx-auto bg-[#4e4e4e] z-10" />

      {/* Blog loading */}
      <ul>
        {blogData
          .filter((data) => {
            if (sortedData === "") {
              return data;
            } else if (
              data.title.toLowerCase().includes(sortedData.toLowerCase())
            ) {
              return data;
            }
          })
          .sort(compareDates)
          .map((data, index) => (
            <motion.li
              key={index}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: listAnimationDelay + (index * 0.3) / 2 }}
              className="px-5 py-3 bg-black/50 rounded-3xl mb-5"
            >
              {/* Title of the blog */}
              <Link href={"#"} className="md:text-base text-sm">
                {data.title}
              </Link>

              {/* Date */}
              <p className="text-[#adadad] md:text-sm text-xs mt-1 flex">
                <span className="mr-auto">Author: {data.author}</span>
                {data.dateOfBlog}
              </p>
            </motion.li>
          ))}

        {/* Not found data */}
        {blogData.filter((data) =>
          data.title.toLowerCase().includes(sortedData.toLowerCase())
        ).length === 0 && (
          <div className="flex">
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="px-5 py-2 bg-black/50 rounded-full text-red-500 md:text-base text-sm mx-auto text-center"
            >
              Oops! No blogs with that name. Check for a mistake in your input.
            </motion.li>
          </div>
        )}
      </ul>
    </div>
  );
}
