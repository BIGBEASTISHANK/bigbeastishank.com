"use client";
import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import HeadingBasic from "@/utility/HeadingBasic";
import {
  FaEye,
  FaSearch,
  FaTag,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
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

// BlogContent
function BlogContent({ posts }: BlogComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const postsPerPage = 5;

  const [cardAnimationDelay, setCardAnimationDelay] = useState(0.9);
  const [pageBtnAnimationDelay, setPageBtnAnimationDelay] = useState(1 + (postsPerPage * 0.3) / 2);

  // Get current page
  const currentPageParam = searchParams.get("page");
  const [currentPage, setCurrentPage] = useState(
    currentPageParam ? parseInt(currentPageParam) : 1
  );

  // Update URL when page changes
  useEffect(() => {
    router.push(`/blogs?page=${currentPage}`, { scroll: false });
  }, [currentPage, router]);

  // Filter posts based on search term
  const filteredPosts = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber: number) => {
    setCardAnimationDelay(0.15);
    setPageBtnAnimationDelay(0.3 + (postsPerPage * 0.3) / 2);

    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
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
            setCardAnimationDelay(0.15);
            setPageBtnAnimationDelay(0.3 + (postsPerPage * 0.3) / 2);
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </motion.div>

      {/* Blog Posts */}
      <ul className="px-2 my-10">
        {currentPosts.length > 0 ? (
          currentPosts.map((post, index) => (
            <motion.li
              key={post.slug}
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: cardAnimationDelay + (index * 0.3) / 2 }}
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
                <div className="flex gap-3 text-xs text-[#AFB3C1] mt-4 mb-3">
                  {/* Date */}
                  <p>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>

                  {/* Separator */}
                  <p> | </p>

                  {/* Minute Read */}
                  <p>{post.minuteRead} min read</p>
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

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: pageBtnAnimationDelay }}
          className="flex justify-center items-center gap-2 my-8"
        >
          {/* Previous button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full border ${
              currentPage === 1
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Page numbers */}
          {(() => {
            let startPage = Math.max(1, currentPage - 1);
            let endPage = Math.min(totalPages, startPage + 2);

            if (endPage === totalPages) {
              startPage = Math.max(1, endPage - 2);
            }

            const visiblePages = [];
            for (let i = startPage; i <= endPage; i++) {
              visiblePages.push(
                <button
                  key={i}
                  onClick={() => paginate(i)}
                  className={`w-10 h-10 rounded-full border ${
                    currentPage === i
                      ? "bg-[#1793D1] text-white border-[#1793D1]"
                      : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all"
                  }`}
                >
                  {i}
                </button>
              );
            }
            return visiblePages;
          })()}

          {/* Next button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full border ${
              currentPage === totalPages
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all"
            }`}
          >
            <FaChevronRight />
          </button>
        </motion.div>
      )}
    </>
  );
}

// Loading fallback component
function BlogLoadingFallback() {
  return (
    <div className="px-2 my-10">
      <div className="flex bg-[#050607] border border-[#1793D1] rounded-full px-4 md:mr-7 select-none font-normal md:text-base text-sm my-auto mb-5">
        <FaSearch className="my-auto mr-2" />
        <div className="bg-gray-700 h-6 w-full rounded animate-pulse"></div>
      </div>
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="mb-5 bg-[#0A0C0E] border border-[#1793D1]/50 p-5 rounded-3xl"
        >
          <div className="h-6 bg-gray-700 rounded mb-3 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded mb-3 animate-pulse"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4 animate-pulse"></div>
        </div>
      ))}
    </div>
  );
}

// Main component
export default function BlogComponent({ posts }: BlogComponentProps) {
  return (
    <div id="blogs" className="px-5 scroll-mt-24 min-h-[45vh]">
      {/* Title */}
      <HeadingBasic
        heading="Blogs"
        url="/blogs"
        description={
          <>
            <p className="text-justify">
              Explore a collection of my blogs covering a variety of topics,
              including web development, game development, and much more. Dive
              in to discover practical tips, insightful experiences, and helpful
              tricks that I've gathered along my journey. If there's a specific
              topic you'd like me to cover, feel free to contact me via the
              email provided on the{" "}
              <Link
                href="/"
                className="text-[#0088CC] font-bold hover:underline underline-offset-2 outline-none"
              >
                home page
              </Link>
              .
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider delay={0.55} />

      <Suspense fallback={<BlogLoadingFallback />}>
        <BlogContent posts={posts} />
      </Suspense>
    </div>
  );
}
