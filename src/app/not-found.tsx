"use client";
import CodeTerminal from "@/components/inner/CodeTerminal";
import Link from "next/link";
import { useState } from "react";
import { BiArrowBack, BiHomeAlt2 } from "react-icons/bi";
import { FaRust } from "react-icons/fa";

export default function notfound() {
	const [showSecret, setShowSecret] = useState(false);

	return (
		<main className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#040E18] px-6 py-30 text-white sm:px-10">
			{/* Subtle background glow */}
			<div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#019BFB]/5 blur-[100px]" />

			<div className="relative w-full max-w-2xl">
				{/* Terminal window */}
				<CodeTerminal
					data={
						<div className="font-mono text-xs leading-7 sm:p-3 sm:text-sm">
							<p>
								<span className="text-[#019BFB]">ishank@bbi</span>
								:~$ ./find_page.sh
							</p>

							<p className="mt-3 text-gray-400">Searching requested route...</p>

							<p className="text-[#FF7B72]">[ERROR] Page not found (exit code 404)</p>

							<p className="text-gray-400">[INFO] Checking available routes...</p>

							<p className="text-[#7EE787]">[OK] Your next destination is available.</p>

							{showSecret && <p className="mt-2 text-[#D2A8FF]">// Even Rust can't unwrap this route.</p>}

							<button
								type="button"
								onClick={() => setShowSecret(!showSecret)}
								className="mt-2 text-gray-400 transition-colors hover:text-[#019BFB] cursor-pointer"
								aria-label="Reveal a developer joke"
							>
								<span className="text-[#019BFB]">&gt;</span>{" "}
								{showSecret ? "hide_secret()" : "reveal_secret()"}
								<span className="ml-1 animate-pulse text-[#019BFB]">▋</span>
							</button>
						</div>
					}
					title="404.rs"
				/>

				{/* 404 message */}
				<div className="mt-8 text-center">
					<div className="flex items-center justify-center gap-3">
						<h1 className="text-7xl font-extrabold tracking-tighter text-[#019BFB] sm:text-8xl select-none">
							404
						</h1>

						<FaRust className="text-3xl text-[#FF7849] sm:text-4xl" />
					</div>

					<h2 className="mt-4 text-xl font-bold sm:text-2xl">Looks like you&apos;re off the beaten path.</h2>

					<p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
						This page wandered off into undefined territory. Let&apos;s get you back to something that
						compiles.
					</p>

					<div className="mt-7 flex flex-wrap items-center justify-center gap-3 select-none">
						<Link
							href="/"
							className="inline-flex button-glow items-center gap-2 rounded-xl bg-[#019BFB] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[#019BFB]/20 transition hover:bg-sky-500"
						>
							<BiHomeAlt2 className="text-lg" />
							Back to Home
						</Link>

						<button
							type="button"
							onClick={() => window.history.back()}
							className="inline-flex items-center gap-2 rounded-xl border-2 border-[#1B2937] px-5 py-3 text-sm font-semibold text-gray-300 transition hover:border-[#019BFB] hover:text-white cursor-pointer"
						>
							<BiArrowBack className="text-lg" />
							Go Back
						</button>
					</div>
				</div>

				{/* Minimal footer note */}
				<p className="mt-12 text-center font-mono text-xs text-gray-600">
					// Don't wander off into undefined territory. 🦀
				</p>
			</div>
		</main>
	);
}
