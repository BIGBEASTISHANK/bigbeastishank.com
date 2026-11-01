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
		<div className="blogs mt-20 scroll-mt-20">
			<div className="bg-[#040E18] px-4 py-10 sm:px-6 md:px-8 lg:px-10 xl:px-16 2xl:px-24">
				<div className="mx-auto grid max-w-[1600px] grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_300px] xl:grid-cols-[minmax(0,1fr)_340px] xl:gap-10">
					{/* Blog content */}
					<main className="min-w-0 w-full">
						{/* Intro section */}
						<div className="flex flex-col p-5 bg-[#019bfb]/10 border-2 border-[#006bc2] rounded-3xl">
							<Link href="/blogs" className="w-fit">
								<div className="goBack mb-3 flex w-fit items-center gap-2">
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
								</div>
							</Link>

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
								className="my-3 flex flex-col gap-2 text-justify text-sm text-gray-400 sm:text-base md:text-md lg:text-left 2xl:max-w-180"
							>
								{frontmatter.description}
							</motion.p>
						</div>

						{/* Mobile and tablet TOC */}
						<div className="mt-8 min-w-0 w-full lg:hidden">
							<DropdownTOC TOCData={TOCData} />
						</div>

						{/* Article content */}
						<div className="min-w-0 max-w-full px-5 mt-8">{MDXRemote}</div>
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
					<p className="my-auto flex items-center justify-center gap-2 font-bold text-[#00FF00]">
						Copied!
						<FaCheck className="text-base" />
					</p>
				) : (
					<button
						type="button"
						title="Click to copy!"
						aria-label="Copy code to clipboard"
						className="cursor-pointer select-none"
					>
						<FaClipboard />
					</button>
				)}
			</div>
		</CopyToClipboard>
	);
}

// Dropdown TOC

function DropdownTOC({ TOCData }: { TOCData: { level: number; content: string }[] }) {
	const [activeItem, setActiveItem] = useState("");

	const slugify = (content: string) =>
		content
			.toLowerCase()
			.replace(/[^\w\s-]/g, "")
			.trim()
			.replace(/\s+/g, "-");

	const linkClass = (content: string) =>
		`flex min-h-8 items-center rounded-lg border-l-[3px] px-2 py-1.5
		transition-all duration-200 ${
			activeItem === content
				? "border-[#00BFFF] bg-[#05253A] text-[#00BFFF]"
				: "border-transparent text-[#C3CFDE] hover:bg-[#041D2D] hover:text-[#00BFFF]"
		}`;

	return (
		<div
			className="w-full min-w-0 max-w-full overflow-hidden rounded-xl
			border border-[#075078] bg-[#00101B] p-4 text-sm
			shadow-[0_0_20px_rgba(0,0,0,0.15)] sm:p-5"
		>
			{/* Title */}
			<div className="mb-3">
				<h2 className="text-base font-bold tracking-tight text-[#F1F5F9]">Table of Contents</h2>
				<div className="mt-2 h-[2px] w-48 max-w-full bg-[#00BFFF]" />
			</div>

			{/* TOC */}
			<nav
				aria-label="Table of Contents"
				className="max-h-[calc(100vh-12rem)] overflow-y-auto
				overscroll-contain rounded-xl border border-[#10425E]
				bg-[#000C15]/80 p-2"
			>
				<div className="flex flex-col gap-0.5">
					{TOCData.map((item, index) => (
						<a
							key={`${item.content}-${index}`}
							href={`#${item.content}`}
							onClick={() => setActiveItem(item.content)}
							className={`${linkClass(item.content)} ${
								item.level === 1
									? "text-sm font-semibold"
									: item.level === 2
										? "ml-4 text-[13px] sm:text-sm"
										: "ml-8 text-[12px] sm:text-[13px]"
							}`}
						>
							{item.content}
						</a>
					))}
				</div>
			</nav>
		</div>
	);
}
