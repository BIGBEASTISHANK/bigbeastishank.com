"use client";
import { FaArrowRight, FaCalendarAlt, FaClock, FaGithub, FaSearch } from "react-icons/fa";
import CodeTerminal from "./inner/CodeTerminal";
import SectionTitleComponent from "./inner/SectionTitle";
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Post } from "@/app/blogs/page";
import { TbTerminal } from "react-icons/tb";
import Link from "next/link";

export default function BlogsComponent() {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [blogPosts, setBlogPosts] = useState<Post[]>([]);
	const [blogPostGetterLoading, setBlogPostGetterLoading] = useState<boolean>(true);

	// Blog post getter
	useEffect(() => {
		async function fetchBlogPosts() {
			const response = await fetch("/api/getBlogPosts");
			const data = await response.json();

			setBlogPosts(data.posts);
			setBlogPostGetterLoading(false);
		}

		fetchBlogPosts();
	}, []);

	// Searchbar shortcut
	useEffect(() => {
		const handleKeyDown = (event: any) => {
			if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				searchInputRef.current?.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<section id="blogs" className="blogs scroll-mt-20">
			{/* Intro section */}
			<div className="flex flex-col 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 2xl:flex-row 2xl:gap-0 gap-10 bg-[#040E18] border-b-2 border-gray-800">
				{/* Left */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col 2xl:w-1/2 2xl:pr-10"
				>
					{/* Subtitle */}
					<SectionTitleComponent title="Blogs" />

					{/* Content */}
					<div className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col gap-1">
						<p>
							Thoughts, tutorials & <span className="text-gradient">experiments.</span>
						</p>
					</div>

					<p className="flex flex-col gap-2 text-sm sm:text-base md:text-md text-gray-400 2xl:max-w-180 my-3 lg:text-left text-justify">
						Articles about Linux, development, AI, security, Rust, and the things I've learned while
						building real projects.
					</p>
				</motion.div>

				{/* Right */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 350, damping: 20 }}
					className="flex flex-col 2xl:w-1/2"
				>
					<CodeTerminal
						data={
							<div className="font-mono text-sm leading-6">
								<p>
									<span className="text-[#019BFB]">ishank@bbi</span>
									<span className="text-gray-400">:~$</span>
									<span className="text-white">ls ./blogs</span>
								</p>

								<p className="mt-1 animate-pulse text-[#A5D6FF]">▋</p>
							</div>
						}
						title="blogs.sh"
					/>
				</motion.div>
			</div>

			{/* Blogs grid */}
			<div className="bg-[#020D15] 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10">
				{/* Searchbar */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					whileInView={{ opacity: 1, scaleX: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					className="flex w-full max-w-4xl mx-auto items-center gap-2 sm:gap-3 px-3 sm:px-4 h-12 sm:h-13 bg-[#0A1420] rounded-xl sm:rounded-2xl search-bar mb-10"
				>
					<FaSearch className="shrink-0 text-gray-400" />

					<input
						ref={searchInputRef}
						type="text"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder="Search blogs..."
						className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none h-full py-3"
					/>

					<kbd className="hidden sm:flex shrink-0 items-center gap-1 px-2 py-0.5 text-xs text-gray-400 bg-[#152231] border border-gray-700 rounded-md select-none">
						<span>Ctrl</span>
						<span className="text-gray-500">+</span>
						<span>K</span>
					</kbd>
				</motion.div>

				{/* Blogs grid */}
				{blogPostGetterLoading ? (
					<div className="flex flex-col items-center justify-center gap-4 py-12">
						<div className="relative flex h-14 w-14 items-center justify-center">
							{/* Subtle background ring */}
							<div className="absolute inset-0 rounded-full border-[3px] border-[#019bfb]/15" />

							{/* Animated loading ring */}
							<div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#019bfb] border-r-[#019bfb] shadow-[0_0_12px_#019bfb50]" />

							{/* Center dot */}
							<div className="h-2 w-2 animate-pulse rounded-full bg-[#019bfb] shadow-[0_0_10px_#019bfb]" />
						</div>

						<p className="animate-pulse text-sm font-medium tracking-wider text-[#019bfb]/80">Loading...</p>
					</div>
				) : (
					<motion.div
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0,
								},
							},
						}}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.05 }}
						className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
					>
						{blogPosts.map((post, index) => {
							return <BlogCardComponent key={index} post={post} index={index} initialDelay={0.4} />;
						})}
					</motion.div>
				)}
			</div>
		</section>
	);
}

function BlogCardComponent({ post, index, initialDelay }: { post: Post; initialDelay: number; index: number }) {
	return (
		<motion.div
			variants={{
				hidden: { opacity: 0, y: 25 },
				visible: { opacity: 1, y: 0 },
			}}
			transition={{
				duration: 0.3,
				delay: initialDelay + index * 0.2,
				ease: "easeOut",
			}}
			className="project-card-glow flex min-w-0 flex-col rounded-xl border-3 border-gray-800 text-sm transition-all hover:scale-[1.025]"
		>
			{/* Title bar */}
			<div className="flex items-center gap-2 rounded-t-xl border-b-3 border-gray-800 bg-[#0A1420] px-3 py-3 sm:px-5">
				<FaCalendarAlt className="shrink-0 text-md text-[#019BFB]" />

				{/* Date */}
				<p className="shrink-0 font-bold text-gray-400">
					{new Date(post.date).toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
					})}
				</p>

				<div className="dot-glow h-1 w-1 shrink-0 rounded-full" />

				{/* Project category */}
				<FaClock className="shrink-0 text-md text-[#019BFB]" />
				<p className="min-w-0 truncate text-xs text-gray-400 sm:text-sm">{post.minuteRead} min read</p>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col gap-1 rounded-b-xl bg-[#000C15] py-5">
				{/* Main content */}
				<div className="px-3 sm:px-5 h-full flex flex-col">
					{/* Title */}
					<p className="text-lg font-bold sm:text-xl mb-3">{post.title}</p>

					{/* Description */}
					<p className="text-sm text-gray-400 sm:text-base">
						{post.description.split(" ").length > 15
							? post.description.split(" ").slice(0, 15).join(" ") + "..."
							: post.description}
					</p>

					{/* Tags */}
					<div className="flex flex-wrap gap-2 pt-4 pb-6 text-gray-400 mt-auto">
						{post.tags.slice(0, 3).map((tag, index) => (
							<div
								key={index}
								className="flex items-center gap-2 rounded-xl border-2 border-[#019BFB] px-2 py-1.5 text-xs text-[#019BFB] sm:gap-3 sm:px-3 sm:text-sm select-none"
							>
								<p>{tag}</p>
							</div>
						))}

						{post.tags.length > 3 && (
							<div className="flex items-center text-xl px-2 text-gray-400 select-none">
								<p>+{post.tags.length - 3}</p>
							</div>
						)}
					</div>
				</div>

				{/* GitHub button */}
				<div className="mx-3 mt-auto min-h-18 border-t-3 border-gray-800 pt-5 sm:mx-5">
					<Link
						href={`/blogs/${post.slug}`}
						rel="noopener noreferrer"
						className="github-button flex h-full items-center gap-2 rounded-lg px-3 transition-all hover:scale-[1.025]"
					>
						<p className="text-sm font-semibold sm:text-base select-none">Read this article</p>

						<FaArrowRight className="ml-auto shrink-0 font-thin" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
