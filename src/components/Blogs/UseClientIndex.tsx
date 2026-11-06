"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { FaBackward, FaCheck, FaChevronDown, FaChevronRight, FaClipboard } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FaTags } from "react-icons/fa6";

export default function UseClientIndexBlogPost({
	frontmatter,
	MDXRemote,
	TOCData,
}: {
	frontmatter: { [key: string]: any };
	MDXRemote: React.ReactNode;
	TOCData: { level: number; content: string }[];
}) {
	return (
		<div className="blogs mt-20 scroll-mt-20">
			<div className="bg-[#040E18] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24">
				<div className="mx-auto grid max-w-[1800px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_380px] xl:gap-10">
					{/* Blog content */}
					<main className="min-w-0 w-full">
						{/* Intro section */}
						<div className="flex flex-col p-5 bg-[#0A1420] border-3 border-gray-800 rounded-3xl">
							<div className="goBack mb-3 w-fit">
								<Link href="/blogs" className="flex items-center gap-2">
									<FaBackward className="text-[#019BFB]" />

									<motion.p
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										viewport={{ once: true }}
										transition={{ duration: 0.9 }}
										className="select-none text-sm capitalize text-[#019BFB] sm:text-base md:text-lg"
									>
										Go Back
									</motion.p>
								</Link>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 15 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.4 }}
								className="flex flex-col gap-1 text-xl font-bold sm:text-2xl md:text-3xl"
							>
								<p className="scroll-mt-20">{frontmatter.title}</p>
							</motion.div>

							<motion.p
								initial={{ opacity: 0, y: 12 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.3, delay: 0.6 }}
								className="my-3 flex flex-col gap-2 text-justify text-sm text-gray-400 sm:text-base md:text-md lg:text-left"
							>
								{frontmatter.description}
							</motion.p>

							<div className="flex flex-wrap gap-2 2xl:gap-4 md:gap-3">
								{frontmatter.tags.map((tag: string, index: number) => (
									<motion.div
										key={tag}
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										viewport={{ once: true, amount: 0.3 }}
										transition={{
											type: "spring",
											stiffness: 300,
											damping: 15,
											delay: 0.8 + index * 0.2,
										}}
										className="flex select-none items-center gap-2 rounded-xl border-2 border-[#019BFB] px-2 py-1.5 text-xs text-[#019BFB] sm:gap-3 sm:px-3 sm:text-sm"
									>
										<FaTags />
										<p>{tag}</p>
									</motion.div>
								))}
							</div>
						</div>

						{/* Mobile Divider */}
						<div className="flex lg:hidden px-5 my-8">
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
								className="h-1 w-full bg-[#019BFB] rounded-full"
							/>
						</div>

						{/* Mobile and tablet TOC */}
						<div className="mt-8 min-w-0 w-full lg:hidden">
							<DropdownTOC TOCData={TOCData} />
						</div>

						{/* Divider */}
						<div className="flex px-5 my-8">
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 0.5, delay: 1 }}
								className="h-1 w-full bg-[#019BFB] rounded-full"
							/>
						</div>

						{/* Article content */}
						<motion.div
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 1.2 }}
							className="min-w-0 max-w-full px-5"
						>
							{MDXRemote}
						</motion.div>

						{/* Divider */}
						<div className="flex px-5 my-8">
							<motion.div
								initial={{ scaleX: 0 }}
								animate={{ scaleX: 1 }}
								transition={{ duration: 0.5, delay: 1.4 }}
								className="h-1 w-full bg-[#019BFB] rounded-full"
							/>
						</div>

						{/* Go back */}
						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 1.4 }}
							className="flex w-fit ml-5 mt-5"
						>
							<Link
								href="/blogs"
								className="flex items-center gap-2 border-2 border-[#019BFB] rounded-2xl py-2 px-4 hover:scale-[1.1] transition-transform"
							>
								<FaBackward className="text-[#019BFB]" />

								<p className="select-none text-sm capitalize text-[#019BFB] sm:text-base md:text-lg">
									Go Back
								</p>
							</Link>
						</motion.div>
					</main>

					{/* Desktop TOC */}
					<aside className="hidden min-w-0 w-full self-start lg:sticky lg:top-24 lg:block lg:max-h-[calc(100vh-7rem)]">
						<DropdownTOC TOCData={TOCData} />
					</aside>
				</div>
			</div>
		</div>
	);
}

// Dropdown TOC
type TOCItem = {
	level: number;
	content: string;
};

function DropdownTOC({ TOCData }: { TOCData: TOCItem[] }) {
	const level1Items = TOCData.filter((item) => item.level === 1);

	const [activeItem, setActiveItem] = useState(level1Items[0]?.content ?? "");
	const [expandedItems, setExpandedItems] = useState<string[]>([]);

	// Sync active TOC item with URL hash
	useEffect(() => {
		const syncActiveFromHash = () => {
			const hash = decodeURIComponent(window.location.hash.slice(1));

			if (!hash) return;

			// Find matching heading using generated IDs
			const index = TOCData.findIndex((item, i) => {
				return getHeadingId(i) === hash;
			});

			if (index !== -1) {
				const item = TOCData[index];
				setActiveItem(getHeadingId(index));

				// Automatically expand the parent Level 2 for Level 3
				if (item.level === 3) {
					for (let i = index - 1; i >= 0; i--) {
						if (TOCData[i].level === 2) {
							setExpandedItems((prev) =>
								prev.includes(TOCData[i].content) ? prev : [...prev, TOCData[i].content],
							);
							break;
						}
					}
				}
			}
		};

		// Initial URL hash
		syncActiveFromHash();

		// Listen for hash changes
		window.addEventListener("hashchange", syncActiveFromHash);

		return () => {
			window.removeEventListener("hashchange", syncActiveFromHash);
		};
	}, [TOCData]);

	// Generate matching heading IDs
	const slugify = (content: string) =>
		content
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.trim()
			.replace(/\s+/g, "-");

	// Generate hierarchical IDs for headings
	const getHeadingId = (index: number) => {
		const item = TOCData[index];

		if (item.level === 3) {
			let parentH2 = "";

			for (let i = index - 1; i >= 0; i--) {
				if (TOCData[i].level === 2) {
					parentH2 = slugify(TOCData[i].content);
					break;
				}
			}

			return `${parentH2}_${slugify(item.content)}`;
		}

		return slugify(item.content);
	};

	// Toggle Level 3 visibility
	const toggleExpand = (content: string) => {
		setExpandedItems((prev) =>
			prev.includes(content) ? prev.filter((item) => item !== content) : [...prev, content],
		);
	};

	// Active link styling
	const linkClass = (id: string) =>
		`flex min-h-8 items-center rounded-lg border-l-[3px] px-2 py-1.5
	transition-all duration-200 ${
		activeItem === id
			? "border-[#006bc2] bg-[#019bfb]/10 text-[#019bfb]"
			: "border-transparent text-[#C3CFDE] hover:bg-[#041D2D] hover:text-[#019bfb]"
	}`;

	// Level 1 navigation
	const handleLevel1Click = (content: string) => {
		setActiveItem(content);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Level 2 and Level 3 navigation
	const handleSectionClick = (id: string) => {
		setActiveItem(id);

		document.getElementById(id)?.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	};

	// Get Level 3 children belonging to a Level 2 item
	const getChildren = (index: number) => {
		const children: { item: TOCItem; index: number }[] = [];

		for (let i = index + 1; i < TOCData.length; i++) {
			if (TOCData[i].level <= 2) break;

			if (TOCData[i].level === 3) {
				children.push({
					item: TOCData[i],
					index: i,
				});
			}
		}

		return children;
	};

	return (
		<div className="w-full min-w-0 max-w-full overflow-hidden rounded-xl border-3 border-gray-800 bg-[#0A1420] p-4 text-sm sm:p-5">
			{/* Title */}
			<div className="mb-3">
				<h2 className="text-base font-bold tracking-tight text-[#F1F5F9]">Table of Contents</h2>

				<div className="mt-2 h-[2px] w-48 max-w-full bg-[#019bfb]" />
			</div>

			<nav
				aria-label="Table of Contents"
				className="max-h-[calc(100vh-12rem)] overflow-y-auto overscroll-contain rounded-xl border-2 border-gray-800 bg-[#040E18] p-2"
			>
				{/* Level 1 */}
				<div className="mb-3 border-b border-[#006bc2] pb-3">
					<div className="flex flex-col gap-0.5">
						{level1Items.map((item, index) => (
							<button
								key={`${item.content}-${index}`}
								onClick={() => {
									setActiveItem(item.content);
									handleLevel1Click(item.content);
								}}
								className={`${linkClass(item.content)} w-full text-left text-sm font-semibold select-none cursor-pointer`}
							>
								{item.content}
							</button>
						))}
					</div>
				</div>

				{/* Inner levels */}
				<div className="flex flex-col gap-0.5">
					{TOCData.map((item, index) => {
						if (item.level !== 2) return null;

						const children = getChildren(index);
						const isExpanded = expandedItems.includes(item.content);
						const headingId = getHeadingId(index);

						return (
							<div key={`${item.content}-${index}`}>
								{/* Level 2 */}
								<div className="flex items-center select-none">
									<a
										href={`#${headingId}`}
										onClick={() => {
											handleSectionClick(headingId);

											if (children.length > 0 && !isExpanded) {
												toggleExpand(item.content);
											}
										}}
										className={`${linkClass(headingId)} ml-2 flex-1 text-left text-[13px] font-medium sm:text-sm cursor-pointer`}
									>
										{item.content}
									</a>

									{/* Expand toggle */}
									{children.length > 0 && (
										<button
											type="button"
											aria-label={
												isExpanded ? `Collapse ${item.content}` : `Expand ${item.content}`
											}
											aria-expanded={isExpanded}
											onClick={() => toggleExpand(item.content)}
											className="rounded-md p-2 text-[#C3CFDE] transition hover:bg-[#041D2D] hover:text-[#019bfb] outline-none cursor-pointer"
										>
											<FiChevronDown
												className={`h-4 w-4 transition-transform duration-200 ${
													isExpanded ? "rotate-180" : ""
												}`}
											/>
										</button>
									)}
								</div>

								{/* Level 3 */}
								{isExpanded && children.length > 0 && (
									<div className="ml-6 mt-1 flex flex-col gap-0.5 border-l border-[#006bc2] pl-2 select-none">
										{children.map(({ item: child, index: childIndex }) => {
											const childId = getHeadingId(childIndex);

											return (
												<a
													href={`#${childId}`}
													key={`${child.content}-${childIndex}`}
													onClick={() => handleSectionClick(childId)}
													className={`${linkClass(childId)} text-left text-[12px] sm:text-[13px] cursor-pointer`}
												>
													{child.content}
												</a>
											);
										})}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</nav>
		</div>
	);
}
