"use client";

import { FaArrowRight, FaCalendarAlt, FaClock, FaSearch } from "react-icons/fa";
import CodeTerminal from "./inner/CodeTerminal";
import SectionTitleComponent from "./inner/SectionTitle";
import { motion } from "motion/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Post } from "@/app/blogs/page";
import Link from "next/link";

export default function BlogsComponent() {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const [blogPosts, setBlogPosts] = useState<Post[]>([]);
	const [blogPostGetterLoading, setBlogPostGetterLoading] = useState<boolean>(true);
	const [blogPostGetterError, setBlogPostGetterError] = useState<string | null>(null);

	const [initialBlogAnimDelay, setInitialBlogAnimDelay] = useState<number>(0.4);

	// Filter blog posts
	const normalizedQuery = searchQuery.trim().toLowerCase();

	const filteredPosts = normalizedQuery
		? blogPosts.filter((post: Post) => post.title.toLowerCase().includes(normalizedQuery))
		: blogPosts;

	// Fetch blog posts
	useEffect(() => {
		async function fetchBlogPosts() {
			try {
				const response = await fetch("/api/getBlogPosts");

				if (!response.ok) {
					throw new Error("Failed to fetch blog posts.");
				}

				const data = await response.json();
				setBlogPosts(data.posts ?? []);
			} catch (error) {
				console.error("Error fetching blog posts:", error);
				setBlogPostGetterError("Unable to load blog posts. Please try again later.");
			} finally {
				setBlogPostGetterLoading(false);
			}
		}

		fetchBlogPosts();
	}, []);

	// Searchbar shortcut: Ctrl + K / Cmd + K
	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
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

	const [subscriberEmail, setSubscriberEmail] = useState("");
	const [subscriptionLoading, setSubscriptionLoading] = useState(false);
	const [subscriptionMessage, setSubscriptionMessage] = useState("");
	const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);

	async function handleSubscriptionSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (subscriptionLoading) return;

		const email = subscriberEmail.trim();

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setSubscriptionSuccess(false);
			setSubscriptionMessage("[ERROR] Please enter a valid email address.");
			return;
		}

		try {
			setSubscriptionLoading(true);
			setSubscriptionMessage("[INFO] Connecting to subscription server...");

			const response = await fetch("/api/blogSubscriber", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Subscription failed.");
			}

			setSubscriptionSuccess(true);
			setSubscriptionMessage(`[OK] ${data.message || "Successfully subscribed!"}`);
			setSubscriberEmail("");
		} catch (error) {
			setSubscriptionSuccess(false);
			setSubscriptionMessage(
				`[ERROR] ${error instanceof Error ? error.message : "Unable to subscribe. Please try again."}`,
			);
		} finally {
			setSubscriptionLoading(false);
		}
	}

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
					<SectionTitleComponent title="Blogs" />

					<div className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col gap-1">
						<p>
							Thoughts, tutorials & <span className="text-gradient">experiments.</span>
						</p>
					</div>

					<p className="flex flex-col gap-2 text-sm sm:text-base md:text-md text-gray-400 2xl:max-w-180 my-3 lg:text-left text-justify leading-7">
						Explore my journey through software development, Linux, artificial intelligence, cybersecurity,
						and systems engineering. From practical tutorials and backend architecture to Rust experiments,
						self-hosted infrastructure, and hands-on project builds, these articles document the things I
						learn, the problems I solve, and the ideas I explore along the way.
					</p>
				</motion.div>

				{/* Right */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{
						duration: 1,
						delay: 0.2,
						type: "spring",
						stiffness: 350,
						damping: 20,
					}}
					className="flex flex-col 2xl:w-1/2"
				>
					<CodeTerminal
						data={
							<div className="font-mono text-xs leading-6 sm:p-2 sm:text-sm">
								<p>
									<span className="text-[#019BFB]">ishank@bbi</span>
									:~$ cargo run --subscribe
								</p>

								<p className="text-[#7EE787] mt-3">[INFO] Subscribe to blog mail list.</p>

								<form onSubmit={handleSubscriptionSubmit} className="flex flex-col gap-2">
									<div className="flex items-center gap-2 border-b border-[#1B2937] pb-1 focus-within:border-[#019BFB]">
										<span className="text-[#019BFB]">&gt;</span>

										<input
											type="email"
											name="email"
											value={subscriberEmail}
											onChange={(event) => {
												setSubscriberEmail(event.target.value);
												setSubscriptionMessage("");
											}}
											placeholder="Enter your email..."
											autoComplete="email"
											required
											disabled={subscriptionLoading}
											className="min-w-0 flex-1 bg-transparent py-1 text-white outline-none placeholder:text-gray-500 disabled:opacity-50"
										/>
									</div>

									<button
										type="submit"
										disabled={subscriptionLoading}
										className="w-fit cursor-pointer text-gray-400 transition-colors hover:text-[#019BFB] disabled:opacity-50"
									>
										<span className="text-[#019BFB]">&gt;</span>{" "}
										{subscriptionLoading ? "subscribing()" : "subscribe()"}
										<span className="ml-1 animate-pulse text-[#019BFB]">▋</span>
									</button>
								</form>

								{subscriptionMessage && (
									<p
										role="status"
										aria-live="polite"
										className={`mt-2 break-words ${
											subscriptionSuccess ? "text-[#7EE787]" : "text-[#FF7B72]"
										}`}
									>
										{subscriptionMessage}
									</p>
								)}

								<p className="mt-1 text-gray-600">// New posts & latest insights. No spam.</p>
							</div>
						}
						title="blog_subscribe.rs"
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

				{/* Loading, error, empty state, or blog grid */}
				{blogPostGetterLoading ? (
					<div className="flex flex-col items-center justify-center gap-4 py-12">
						<div className="relative flex h-14 w-14 items-center justify-center">
							{/* Background ring */}
							<div className="absolute inset-0 rounded-full border-[3px] border-[#019bfb]/15" />

							{/* Animated loading ring */}
							<div className="absolute inset-0 animate-spin rounded-full border-[3px] border-transparent border-t-[#019bfb] border-r-[#019bfb] shadow-[0_0_12px_#019bfb50]" />

							{/* Center dot */}
							<div className="h-2 w-2 animate-pulse rounded-full bg-[#019bfb] shadow-[0_0_10px_#019bfb]" />
						</div>

						<p className="animate-pulse text-sm font-medium tracking-wider text-[#019bfb]/80">Loading...</p>
					</div>
				) : blogPostGetterError ? (
					<div className="py-12 text-center">
						<p className="text-xl font-bold text-gray-400">{blogPostGetterError}</p>
					</div>
				) : filteredPosts.length > 0 ? (
					<motion.div
						key={normalizedQuery || "all-blogs"}
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0,
								},
							},
						}}
						initial="hidden"
						animate="visible"
						className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3"
					>
						{filteredPosts.map((post, index) => (
							<BlogCardComponent
								key={post.slug}
								post={post}
								index={index}
								initialDelay={initialBlogAnimDelay}
								onFirstAnimationComplete={() => setInitialBlogAnimDelay(0)}
							/>
						))}
					</motion.div>
				) : (
					<div className="flex flex-col gap-7 py-8 text-center">
						<p className="text-xl font-bold text-gray-400">No blogs found</p>
						<p className="text-gray-500">Try searching for something else or clear the search bar.</p>
					</div>
				)}
			</div>
		</section>
	);
}

function BlogCardComponent({
	post,
	index,
	initialDelay,
	onFirstAnimationComplete,
}: {
	post: Post;
	initialDelay: number;
	index: number;
	onFirstAnimationComplete: () => void;
}) {
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
			onAnimationComplete={onFirstAnimationComplete}
			className="project-card-glow flex min-w-0 flex-col rounded-xl border-3 border-gray-800 text-sm transition-all hover:scale-[1.025]"
		>
			{/* Title bar */}
			<div className="flex items-center gap-2 rounded-t-xl border-b-3 border-gray-800 bg-[#0A1420] px-3 py-3 sm:px-5">
				<FaCalendarAlt className="shrink-0 text-md text-[#019BFB]" />

				<p className="shrink-0 font-bold text-gray-400">
					{new Date(post.date).toLocaleDateString("en-US", {
						month: "long",
						day: "numeric",
						year: "numeric",
					})}
				</p>

				<div className="dot-glow h-1 w-1 shrink-0 rounded-full" />

				<FaClock className="shrink-0 text-md text-[#019BFB]" />

				<p className="min-w-0 truncate text-xs text-gray-400 sm:text-sm">{post.minuteRead} min read</p>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col gap-1 rounded-b-xl bg-[#000C15] py-5">
				<div className="px-3 sm:px-5 flex h-full flex-col">
					<p className="mb-3 text-lg font-bold sm:text-xl">{post.title}</p>

					<p className="text-sm text-gray-400 sm:text-base">
						{post.description.split(" ").length > 15
							? post.description.split(" ").slice(0, 15).join(" ") + "..."
							: post.description}
					</p>

					{/* Tags */}
					<div className="mt-auto flex flex-wrap gap-2 pt-4 pb-6 text-gray-400">
						{post.tags.slice(0, 3).map((tag, index) => (
							<div
								key={tag}
								className="flex select-none items-center gap-2 rounded-xl border-2 border-[#019BFB] px-2 py-1.5 text-xs text-[#019BFB] sm:gap-3 sm:px-3 sm:text-sm"
							>
								<p>{tag}</p>
							</div>
						))}

						{post.tags.length > 3 && (
							<div className="flex select-none items-center px-2 text-xl text-gray-400">
								<p>+{post.tags.length - 3}</p>
							</div>
						)}
					</div>
				</div>

				{/* Read article button */}
				<div className="mx-3 mt-auto min-h-18 border-t-3 border-gray-800 pt-5 sm:mx-5">
					<Link
						href={`/blogs/${post.slug}`}
						className="github-button flex h-full items-center gap-2 rounded-lg px-3 transition-all hover:scale-[1.025]"
					>
						<p className="select-none text-sm font-semibold sm:text-base">Read this article</p>

						<FaArrowRight className="ml-auto shrink-0 font-thin" />
					</Link>
				</div>
			</div>
		</motion.div>
	);
}
