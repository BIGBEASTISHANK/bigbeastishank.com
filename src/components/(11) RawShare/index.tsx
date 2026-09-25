"use client";

import { FormEvent, useEffect, useState } from "react";
import { ShortDivider } from "@/utility/Dividers";
import HeadingBasic from "@/utility/HeadingBasic";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RawShareComponent() {
	const [currentUrl, setCurrentUrl] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [sharedUrl, setSharedUrl] = useState("");

	// Set current URL
	useEffect(() => {
		setCurrentUrl(window.location.origin);
	}, []);

	// Share Handler
	const handleShare = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const form = event.currentTarget;

		try {
			setError("");
			setSharedUrl("");
			setLoading(true);

			const formData = new FormData(event.currentTarget);

			const text = formData.get("text");
			const expireAt = formData.get("expireAt");

			if (typeof text !== "string" || !text.trim()) {
				setError("Please enter some text or code.");
				return;
			}

			const response = await fetch("/api/rawshare", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					text,
					expireAt,
				}),
			});

			const result = await response.json();

			if (!response.ok || !result.success) {
				setError(result.message || "Something went wrong. Please try again.");

				return;
			}

			// Store generated URL
			setSharedUrl(`/rawshare/${result.data.urlString}`);
			form.reset();
		} catch (error) {
			console.error("RawShare frontend error:", error);

			setError("Something went wrong. Please try again.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div id="rawshare" className="px-5 scroll-mt-28 min-h-[45vh]">
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

			<form onSubmit={handleShare}>
				{/* Expire time */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
					className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 flex gap-3"
				>
					<p className="md:text-xl text-lg font-bold">Expire time:</p>

					<select
						name="expireAt"
						defaultValue="60"
						className="flex md:text-xl text-lg bg-transparent backdrop-blur-md border-2 border-[#1793D1] rounded-full px-4 select-none outline-none cursor-pointer"
					>
						<option className="bg-black/95 text-white" value="5">
							5 minutes
						</option>

						<option className="bg-black/95 text-white" value="10">
							10 minutes
						</option>

						<option className="bg-black/95 text-white" value="30">
							30 minutes
						</option>

						<option className="bg-black/95 text-white" value="60">
							1 hour
						</option>

						<option className="bg-black/95 text-white" value="180">
							3 hours
						</option>

						<option className="bg-black/95 text-white" value="360">
							6 hours
						</option>

						<option className="bg-black/95 text-white" value="720">
							12 hours
						</option>

						<option className="bg-black/95 text-white" value="1440">
							1 day
						</option>

						<option className="bg-black/95 text-white" value="4320">
							3 days
						</option>
					</select>
				</motion.div>

				{/* Text area */}
				<motion.div
					initial={{ opacity: 0, height: 0 }}
					animate={{ opacity: 1, height: "auto" }}
					transition={{ delay: 1.0, duration: 0.5, type: "spring" }}
					className="border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3 mt-5"
				>
					<textarea
						name="text"
						placeholder="Paste your text/code here..."
						className="outline-none w-full h-[32rem] resize-none"
					/>
				</motion.div>

				{/* Error */}
				{error && <p className="text-red-500 mt-3 ml-6">{error}</p>}

				{/* Short Divider */}
				<ShortDivider delay={0.55} />

				{/* Generated RawShare URL */}
				{sharedUrl && (
					<div className="block mb-4 border font-bold border-[#1793D1] rounded-2xl backdrop-blur-md bg-transparent px-4 py-3 transition-colors">
						<p>Link Uploaded successfully</p>
						<Link href={sharedUrl} className="text-[#1793D1] ml-1">
							{currentUrl + sharedUrl}
						</Link>
					</div>
				)}

				{/* Share button */}
				<motion.button
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1.2, duration: 0.5, type: "spring" }}
					type="submit"
					disabled={loading}
					className="rounded-xl outline-none bg-[#1793D1] px-4 py-2 cursor-pointer flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
				>
					{loading ? "Sharing..." : "Share"}
				</motion.button>
			</form>
		</div>
	);
}
