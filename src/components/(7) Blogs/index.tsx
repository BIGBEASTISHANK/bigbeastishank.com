"use client";
import { useState, useEffect, Suspense, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import HeadingBasic from "@/utility/HeadingBasic";
import {
  FaSearch,
  FaTag,
  FaChevronLeft,
  FaChevronRight,
  FaCheck,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaRss,
} from "react-icons/fa";
import { motion, HTMLMotionProps } from "framer-motion";
import { ShortDivider } from "@/utility/Dividers";
import { PulseLoader } from "react-spinners";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Post } from "@/app/blogs/page";

interface BlogComponentProps {
  posts: Post[];
}

// Update URL when page changes
function UpdatePageURL({
  currentPage,
  pageChanged,
  currentPageParam,
}: {
  currentPage: number;
  pageChanged: boolean;
  currentPageParam: string;
}) {
  const router: AppRouterInstance = useRouter();

  useEffect(() => {
    pageChanged || parseInt(currentPageParam) === 1
      ? currentPage === 1
        ? router.push(`/blogs`, { scroll: true })
        : router.push(`/blogs?page=${currentPage}`, { scroll: true })
      : null;
  }, [currentPage, router]);
}

// Main component
export default function BlogComponent() {
  // Fetching blog posts
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    fetch("/api/getBlogPost")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  // Reset URL when loading
  UpdatePageURL({ currentPage: 1, pageChanged: false, currentPageParam: "" });

  // Variable
  const [userEmail, setUserEmail]: [
    userEmail: string,
    setUserEmail: Dispatch<SetStateAction<string>>,
  ] = useState<string>("");
  const [isSubmitting, setIsSubmitting]: [
    isSubmitting: boolean,
    setIsSubmitting: Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess]: [
    submitSuccess: boolean,
    setSubmitSuccess: Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);
  const [submitError, setSubmitError]: [
    submitError: string,
    setSubmitError: Dispatch<SetStateAction<string>>,
  ] = useState<string>("");

  // Submit input
  const handleSubmit: (
    event: React.FormEvent<HTMLFormElement>,
  ) => Promise<void> = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response: Response = await fetch("/api/blogSubscriber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: userEmail,
        }),
      } as RequestInit);

      const error: { error: string } = await response.json();

      if (!response.ok) {
        throw new Error(error.error);
      }

      setSubmitSuccess(true);

      setTimeout(() => {
        setUserEmail("");
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      // Setting formdata and error message
      setSubmitError(String(error));
      setUserEmail("");

      // Waiting for error message to disappear
      setTimeout(() => {
        setSubmitError("");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="blogs" className="px-5 scroll-mt-28 min-h-[45vh]">
      {/* Title */}
      <HeadingBasic
        heading="Blogs"
        url="/blogs"
        description={
          <>
            <p>
              Welcome to my technical blog where I share insights from my
              development journey. You'll find articles spanning web
              development, mobile app creation with Flutter, machine learning
              experiments, and the occasional deep dive into game development.
              Each post reflects real-world challenges I've tackled and the
              solutions I've discovered along the way. Looking for content on a
              particular technology or facing a specific development challenge?
              Drop me a line using the contact information on the{" "}
              <Link
                href="/"
                className="text-[#0088CC] font-bold hover:underline underline-offset-2 outline-none"
              >
                home page
              </Link>{" "}
              - I'm always open to exploring new topics that could help fellow
              developers. You can also see my blogs via{" "}
              <Link
                href="/rss.xml"
                className="text-[#0088CC] inline-flex gap-1 items-center"
              >
                RSS <FaRss />
              </Link>
            </p>
          </>
        }
      />

      {/* Short Divider */}
      <ShortDivider delay={0.55} />

      <div className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3">
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5, type: "spring" }}
          className="md:text-base text-sm"
        >
          Subscribe to my get notified when new blogs are published.
        </motion.p>

        <form
          className="flex gap-2 md:gap-5 mt-3 md:text-base text-sm flex-col md:flex-row"
          onSubmit={handleSubmit}
        >
          <motion.input
            initial={{ opacity: 0, width: "0%" }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{
              delay: 0.9,
              duration: 0.5,
              type: "spring",
            }}
            className={`rounded-xl border-2 outline-none border-[#1793D1] px-4 py-2 ${
              submitSuccess ? "w-0" : "w-full"
            } ${
              isSubmitting || submitSuccess
                ? "cursor-not-allowed bg-[#1A1E23] border-[#1793D1]/40 text-[#515860]"
                : ""
            }`}
            name="email"
            value={userEmail}
            disabled={isSubmitting || submitSuccess}
            placeholder="Enter your email..."
            type="email"
            required
            onChange={(e) => setUserEmail(e.target.value)}
          />

          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 1.0,
              duration: 0.5,
              type: "spring",
            }}
            type="submit"
            className={`rounded-xl outline-none ${
              submitSuccess ? "bg-[#1d991d]" : "bg-[#1793D1]"
            } px-4 py-2 md:w-[12rem] w-[8rem] cursor-pointer md:ml-auto flex justify-center items-center`}
          >
            {submitSuccess ? (
              <p className="flex gap-2 items-center justify-center">
                Subscribed <FaCheck />
              </p>
            ) : (
              <>
                {isSubmitting ? (
                  <PulseLoader loading={true} size={15} color="white" />
                ) : (
                  "Subscribe"
                )}
              </>
            )}
          </motion.button>
        </form>

        {/* Error Message Display */}
        {submitError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="mt-3 p-3 bg-red-500/10 border border-red-500/30 rounded-xl"
          >
            <p className="text-red-400 text-sm flex items-center gap-2">
              <span className="text-red-500">⚠️</span>
              {submitError}
            </p>
          </motion.div>
        )}
      </div>

      {/* Short Divider */}
      <ShortDivider delay={1.1} />

      <Suspense>
        <BlogContent posts={posts} />
      </Suspense>
    </div>
  );
}

// BlogContent
function BlogContent({ posts }: BlogComponentProps) {
  const [searchTerm, setSearchTerm]: [
    searchTerm: string,
    setSearchTerm: Dispatch<SetStateAction<string>>,
  ] = useState<string>("");
  const searchParams: URLSearchParams = useSearchParams();
  const postsPerPage: number = 5;
  const [pageChanged, setPageChanged]: [
    pageChanged: boolean,
    setPageChanged: Dispatch<SetStateAction<boolean>>,
  ] = useState<boolean>(false);

  const [cardAnimationDelay, setCardAnimationDelay]: [
    cardAnimationDelay: GLfloat,
    setCardAnimationDelay: Dispatch<SetStateAction<GLfloat>>,
  ] = useState<GLfloat>(0.15);

  // Get current page
  const currentPageParam: string = searchParams.get("page");
  const [currentPage, setCurrentPage]: [
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>,
  ] = useState<number>(currentPageParam ? parseInt(currentPageParam) : 1);

  // Update URL to display page
  UpdatePageURL({ currentPage, pageChanged, currentPageParam });

  // Filter posts based on search term
  const filteredPosts: Post[] = posts
    .filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        ),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // Calculate pagination
  const totalPages: number = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost: number = currentPage * postsPerPage;
  const indexOfFirstPost: number = indexOfLastPost - postsPerPage;
  const currentPosts: Post[] = filteredPosts.slice(
    indexOfFirstPost,
    indexOfLastPost,
  );

  // Blog loading state
  const [initiallyLoaded, setInitiallyLoaded] = useState<boolean>(false);
  useEffect(() => {
    if (currentPosts.length > 0) setInitiallyLoaded(true);
  }, [currentPosts]);

  // Calculate delays for page button
  const [pageBtnAnimationDelay, setPageBtnAnimationDelay]: [
    pageBtnAnimationDelay: GLfloat,
    setPageBtnAnimationDelay: Dispatch<SetStateAction<GLfloat>>,
  ] = useState<GLfloat>(1.5 + (currentPosts.length * 0.3) / 2);

  // Change page
  const paginate: (pageNumber: number) => void = (pageNumber: number) => {
    setPageBtnAnimationDelay(0.3 + (postsPerPage * 0.3) / 2);

    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setPageChanged(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Generate page numbers
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      {/* Search bar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
        className="flex bg-[#050607]/10 backdrop-blur-md border border-[#1793D1] rounded-full px-4 md:mr-7 select-none font-normal md:text-base text-sm my-auto mb-5"
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
              transition={{
                delay: cardAnimationDelay + (index * 0.3) / 2,
                duration: 0.5,
                type: "spring",
              }}
              {...({
                className: "scroll-mt-28",
              } as HTMLMotionProps<"li">)}
            >
              <div className="group mb-5 flex flex-col bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#1793D1]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#1793D1]/80 shadow-[#1793D1]/50">
                {/* Blog title */}
                <div className="flex">
                  <Link href={`/blogs/${post.slug}`} className="outline-none">
                    <h2 className="md:text-lg text-base font-semibold">
                      {post.title}
                    </h2>
                  </Link>
                </div>

                {/* Blog Description */}
                <p className="md:text-base text-sm mb-3 text-[#F6F9FC]/75">
                  {post.description}
                </p>

                {/* Blog Metadata */}
                <div className="flex gap-3 text-xs text-[#F6F9FC]/75 mt-4 mb-3">
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
              </div>
            </motion.li>
          ))
        ) : (
          <div className="flex">
            <motion.li
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              style={{
                color:
                  initiallyLoaded && currentPosts.length < 1 ? "#fb2c36" : "",
              }}
              {...({
                className:
                  "px-5 py-2 bg-[#0A0C0E] border border-[#1793D1]/20 rounded-full md:text-base text-sm mx-auto text-center",
              } as HTMLMotionProps<"li">)}
            >
              {initiallyLoaded && currentPosts.length < 1
                ? "Oops! No blogs found with that title or tag."
                : "Please wait loading blogs..."}
            </motion.li>
          </div>
        )}
      </ul>

      {/* Pagination */}
      {filteredPosts.length > postsPerPage && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: pageBtnAnimationDelay,
            duration: 0.5,
            type: "spring",
          }}
          className="flex justify-center items-center gap-2 my-8"
        >
          {/* Complete Left button */}
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md ${
              currentPage === 1
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all cursor-pointer"
            }`}
          >
            <FaAngleDoubleLeft />
          </button>

          {/* Previous button */}
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className={`flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md ${
              currentPage === 1
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all cursor-pointer"
            }`}
          >
            <FaChevronLeft />
          </button>

          {/* Small Vertical divider  */}
          <div className="h-[2rem] w-[0.1rem] bg-[#515860]" />

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
                  className={`w-10 h-10 rounded-full border backdrop-blur-md ${
                    currentPage === i
                      ? "bg-[#1793D1] text-white border-[#1793D1]"
                      : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all cursor-pointer"
                  }`}
                >
                  {i}
                </button>,
              );
            }
            return visiblePages;
          })()}

          {/* Small Vertical divider  */}
          <div className="h-[2rem] w-[0.1rem] bg-[#515860]" />

          {/* Next button */}
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md ${
              currentPage === totalPages
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all cursor-pointer"
            }`}
          >
            <FaChevronRight />
          </button>

          {/* Complete Right button */}
          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className={`flex items-center justify-center w-10 h-10 rounded-full border backdrop-blur-md ${
              currentPage === totalPages
                ? "border-[#1793D1]/30 text-gray-500 cursor-not-allowed"
                : "border-[#1793D1] hover:bg-[#1793D1]/10 hover:scale-110 transition-all cursor-pointer"
            }`}
          >
            <FaAngleDoubleRight />
          </button>
        </motion.div>
      )}
    </>
  );
}
