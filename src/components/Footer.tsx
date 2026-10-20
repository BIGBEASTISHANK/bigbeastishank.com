"use client";

import { useState } from "react";
import { BiTerminal } from "react-icons/bi";
import { FaRust } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export default function FooterComponent() {
	const [showSecret, setShowSecret] = useState(false);

	return (
		<footer className="border-t-2 border-gray-800 bg-[#040E18] px-6 py-8 sm:px-10 lg:px-20 2xl:px-40">
			<div className="mx-auto max-w-[1800px]">
				{/* Terminal Easter egg */}
				<div className="group flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
					<div className="min-w-0 font-mono text-xs leading-6 sm:text-sm">
						<div className="mb-2 flex items-center gap-2 text-gray-400">
							<BiTerminal className="text-lg text-[#019BFB]" />
							<span className="text-[#019BFB]">ishank@bbi</span>
							<span>:~$</span>
							<button
								type="button"
								onClick={() => setShowSecret(!showSecret)}
								className="text-left text-gray-300 transition-colors hover:text-[#019BFB] outline-none cursor-pointer"
								aria-label="Run portfolio Easter egg"
							>
								cargo run --portfolio
							</button>
						</div>

						<p className="text-gray-500">Compiling dreams v1.0.0</p>
						<p className="pl-3 text-gray-500">Finished in 2.84s</p>
						<p className="pl-3 text-gray-500">Running portfolio...</p>

						<p className="text-[#A5D6FF]">
							<span className="text-[#019BFB]">&gt;</span>{" "}
							{showSecret
								? "Fearless concurrency. Zero-cost abstractions. Infinite curiosity."
								: "Hello there! Built with Next.js | Love 💗 and Rust in heart."}
							{!showSecret && (
								<button
									type="button"
									onClick={() => setShowSecret(true)}
									className="ml-2 inline-block transition-transform hover:scale-125"
									aria-label="Reveal the secret message"
								>
									🦀
								</button>
							)}
						</p>

						{showSecret && (
							<p className="text-[#7EE787]">
								[OK] All systems operational. <span className="animate-pulse">▋</span>
							</p>
						)}
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-7 flex flex-col gap-2 border-t border-[#1B2937] pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
					<p>
						© {new Date().getFullYear()} <span className="text-[#019BFB]">BIGBEASTISHANK</span>. All rights reserved.
					</p>

					<p className="flex items-center gap-2">
						<SiNextdotjs className="text-gray-400" />
						<span>Built with Next.js</span>
						<span className="text-gray-700">|</span>
						<span>Love and Rust in heart</span>
						<FaRust className="text-[#FF7849]" />
					</p>
				</div>
			</div>
		</footer>
	);
}
