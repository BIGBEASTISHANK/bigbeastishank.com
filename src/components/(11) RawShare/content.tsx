"use client";

import { useEffect, useState } from "react";

import { FullDivider, ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import Link from "next/link";
import { ClickToCopyCode } from "@/components/(7) Blogs/posts/UseClientIndex";

interface RawShareContentComponentProps {
	slug: string;
}

// Expire at formatter
const formatExpireAt = (dateString: string) => {
	return new Date(dateString).toLocaleString(undefined, {
		day: "2-digit",
		month: "short",
		hour: "2-digit",
		minute: "2-digit",
	});
};

// Component function
export default function RawShareContentComponent({ slug }: RawShareContentComponentProps) {
	const [text, setText] = useState("");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");
    const [expireAt, setExpireAt] = useState("");

	// Get RawShare
	useEffect(() => {
		const getRawShare = async () => {
			try {
				setLoading(true);
				setError("");

				const response = await fetch(`/api/rawshare?slug=${encodeURIComponent(slug)}`);

				const result = await response.json();

				if (!response.ok || !result.success) {
					setError(result.message || "Unable to load RawShare.");

					return;
				}

				setText(result.data.text);
                setExpireAt(result.data.expireAt);
			} catch (error) {
				console.error("RawShare content error:", error);

				setError("Something went wrong while loading RawShare.");
			} finally {
				setLoading(false);
			}
		};

		getRawShare();
	}, [slug]);

	return (
		<div id="rawsharecontent" className="px-5 scroll-mt-28 min-h-[45vh]">
			{/* Heading */}
			<HeadingBasic
				heading="RawShare"
				url="/pastebin"
				description={
					<>
						RawShare is a free and opensource online platform where you can upload text or code data. It's a
						great way to share code snippets, error messages, and other text-based content with others.
					</>
				}
			/>

			{/* Short Divider */}
			<ShortDivider delay={0.55} />

			{/* Loading */}
			{loading && <p className="text-gray-400">Loading RawShare...</p>}

			{/* Error */}
			{!loading && error && (
				<div className="border border-red-500 rounded-2xl backdrop-blur-md px-4 py-3 text-red-500">{error}</div>
			)}

			{/* Content */}
			{!loading && !error && (
				<div className="border border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3">
					{/* Header */}
					<div className="flex gap-2 justify-between items-center">
						<p className="md:text-sm text-base font-bold">Expire at: {formatExpireAt(expireAt)}</p>
						<ClickToCopyCode children={text} />
					</div>

					{/* Full Divider */}
					<FullDivider customCSS="mt-3 mb-5" />

					{/* Text */}
					<pre className="whitespace-pre-wrap break-words font-mono">{text}</pre>
				</div>
			)}

			{/* Short Divider */}
			<ShortDivider delay={0.55} />

			{/* Go back button */}
			<Link
				href="/rawshare"
				className="rounded-xl outline-none bg-[#1793D1] px-4 py-2 cursor-pointer flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed w-fit"
			>
				Go to RawShare
			</Link>
		</div>
	);
}
