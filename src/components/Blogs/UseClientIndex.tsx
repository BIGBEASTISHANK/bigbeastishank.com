"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { FaBackward, FaCheck, FaChevronDown, FaChevronRight, FaClipboard } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";

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
		<div className="blogs scroll-mt-20 mt-20">
			<div className="2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 bg-[#040E18] flex gap-5">
				<div className="flex-1">
					{/* Intro section */}
					<div className="flex flex-col">
						<Link href="/blogs" className="w-fit">
							<div className="flex items-center mb-3 w-fit goBack">
								<FaBackward className="text-[#019BFB]" />
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									viewport={{ once: true }}
									transition={{ duration: 0.9 }}
									className="capitalize text-sm sm:text-base md:text-lg text-[#019BFB] select-none"
								>
									Go Back
								</motion.p>
							</div>
						</Link>

						<motion.div
							initial={{ opacity: 0, y: 15 }}
							animate={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.4 }}
							className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col gap-1"
						>
							<p>{frontmatter.title}</p>
						</motion.div>

						<motion.p
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.3, delay: 0.6 }}
							className="flex flex-col gap-2 text-sm sm:text-base md:text-md text-gray-400 2xl:max-w-180 my-3 lg:text-left text-justify"
						>
							{frontmatter.description}
						</motion.p>
					</div>
					{/* Content */}
					<div>{MDXRemote}</div>
				</div>

				<div className="shrink-0">
					<DropdownTOC TOCData={TOCData} />
				</div>
			</div>
		</div>
	);
}

// Copy to clipboard
export function ClickToCopyCode({ children }: { children: React.ReactNode }) {
	const [copiedCode, setCopiedCode] = useState<boolean>(false);

	return (
		<CopyToClipboard
			text={String(children).replace(/\n$/, "")}
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

// Dropdown TOC
function DropdownTOC({ TOCData }: { TOCData: { level: number; content: string }[] }) {
	const [openLevel1, setOpenLevel1] = useState<number>(0);
	const [openLevel2, setOpenLevel2] = useState<Set<string>>(new Set());
	const [activeItem, setActiveItem] = useState("What is a Token?");

	const level1Items = TOCData.filter((item) => item.level === 1);

	const getSectionItems = (level1Index: number) => {
		const current = level1Items[level1Index];
		const next = level1Items[level1Index + 1];

		const start = TOCData.indexOf(current);
		const end = next ? TOCData.indexOf(next) : TOCData.length;

		return TOCData.slice(start + 1, end);
	};

	const getLevel3Items = (level2Item: { level: number; content: string }, level1Index: number) => {
		const sectionItems = getSectionItems(level1Index);
		const start = sectionItems.indexOf(level2Item);

		const nextLevel2Index = sectionItems.findIndex((item, index) => index > start && item.level === 2);

		const end = nextLevel2Index === -1 ? sectionItems.length : nextLevel2Index;

		return sectionItems.slice(start + 1, end).filter((item) => item.level === 3);
	};

	const toggleLevel2 = (content: string) => {
		setOpenLevel2((previous) => {
			const updated = new Set(previous);

			if (updated.has(content)) {
				updated.delete(content);
			} else {
				updated.add(content);
			}

			return updated;
		});
	};

	const slugify = (content: string) =>
		content
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.trim()
			.replace(/\s+/g, "-");

	const linkClass = (content: string) =>
		`transition-colors duration-200 hover:text-[#00BFFF] ${
			activeItem === content ? "text-[#00BFFF] font-medium" : "text-[#C3CFDE]"
		}`;

	return (
		<div
			className="w-full min-w-0 rounded-xl border border-[#075078]
			bg-[#00101B] p-4 text-sm shadow-[0_0_20px_rgba(0,0,0,0.15)]
			sm:p-5"
		>
			{/* Title */}
			<div className="mb-3">
				<h2 className="text-base font-bold tracking-tight text-[#F1F5F9]">Table of Contents</h2>

				<div className="mt-2 h-[2px] w-48 max-w-full bg-[#00BFFF]" />
			</div>

			{/* Inner TOC panel */}
			<nav
				aria-label="Table of Contents"
				className="rounded-xl border border-[#10425E] bg-[#000C15]/80 p-2 sm:p-2"
			>
				<div className="flex flex-col gap-0.5">
					{level1Items.map((level1, i) => {
						const sectionItems = getSectionItems(i);
						const level2Items = sectionItems.filter((item) => item.level === 2);
						const directLevel3Items = sectionItems.filter((item) => item.level === 3);

						const hasChildren = sectionItems.length > 0;
						const isOpen = openLevel1 === i;

						return (
							<div key={level1.content}>
								{/* Level 1 */}
								<div
									className={`flex min-h-8 items-center gap-2 rounded-lg
										border-l-[3px] transition-all duration-200 ${
											activeItem === level1.content
												? "border-[#00BFFF] bg-[#05253A] text-[#00BFFF]"
												: "border-transparent hover:bg-[#041D2D]"
										}`}
								>
									{hasChildren ? (
										<button
											type="button"
											aria-label={`${isOpen ? "Collapse" : "Expand"} ${level1.content}`}
											aria-expanded={isOpen}
											onClick={() => setOpenLevel1(isOpen ? -1 : i)}
											className="flex h-8 w-7 shrink-0 items-center cursor-pointer
												justify-center text-[#C3CFDE]
												transition-colors hover:text-[#00BFFF]"
										>
											{isOpen ? (
												<FaChevronDown className="text-[11px]" />
											) : (
												<FaChevronRight className="text-[11px]" />
											)}
										</button>
									) : (
										<span className="w-2 shrink-0" />
									)}

									<a
										href={`#${slugify(level1.content)}`}
										onClick={() => {
											setActiveItem(level1.content);
											if (hasChildren) {
												setOpenLevel1(i);
											}
										}}
										className={`flex-1 py-1.5 pr-2 text-[13px]
											sm:text-sm ${linkClass(level1.content)}`}
									>
										{level1.content}
									</a>
								</div>

								{/* Nested section */}
								{isOpen && (
									<div className="ml-4 mt-1 border-l border-[#12364B] pl-3">
										{/* Level 2 items */}
										{level2Items.map((level2) => {
											const children = getLevel3Items(level2, i);
											const hasLevel3 = children.length > 0;
											const expanded = openLevel2.has(level2.content);

											return (
												<div key={level2.content} className="mb-0.5">
													<div className="flex min-h-7 items-center gap-2">
														{hasLevel3 ? (
															<button
																type="button"
																aria-label={`${
																	expanded ? "Collapse" : "Expand"
																} ${level2.content}`}
																aria-expanded={expanded}
																onClick={() => toggleLevel2(level2.content)}
																className="flex h-7 w-3 shrink-0
																	items-center justify-center
																	text-[#C3CFDE] hover:text-[#00BFFF]"
															>
																{expanded ? (
																	<FaChevronDown className="text-[10px]" />
																) : (
																	<FaChevronRight className="text-[10px]" />
																)}
															</button>
														) : (
															<FaChevronRight className="shrink-0 text-[10px] text-[#C3CFDE]" />
														)}

														<a
															href={`#${slugify(level2.content)}`}
															onClick={() => setActiveItem(level2.content)}
															className={`py-1 text-[13px]
																sm:text-sm ${linkClass(level2.content)}`}
														>
															{level2.content}
														</a>
													</div>

													{/* Level 3 items */}
													{expanded && hasLevel3 && (
														<div className="ml-4 mt-0.5 border-l border-[#12364B] pl-3">
															{children.map((level3) => (
																<a
																	key={level3.content}
																	href={`#${slugify(level3.content)}`}
																	onClick={() => setActiveItem(level3.content)}
																	className={`block py-1 text-[12px]
																		sm:text-[13px] ${linkClass(level3.content)}`}
																>
																	{level3.content}
																</a>
															))}
														</div>
													)}
												</div>
											);
										})}

										{/* Direct Level 3 items */}
										{level2Items.length === 0 &&
											directLevel3Items.map((level3) => (
												<a
													key={level3.content}
													href={`#${slugify(level3.content)}`}
													onClick={() => setActiveItem(level3.content)}
													className={`block py-1 text-[13px]
														sm:text-sm ${linkClass(level3.content)}`}
												>
													{level3.content}
												</a>
											))}
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
