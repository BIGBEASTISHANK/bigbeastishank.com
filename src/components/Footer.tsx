"use client";
import { useEffect, useState } from "react";
import { BiTerminal } from "react-icons/bi";
import { FaRust } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion, AnimatePresence } from "motion/react";

export default function FooterComponent() {
	const [showSecret, setShowSecret] = useState(false);
	const [displayedText, setDisplayedText] = useState("");

	const terminalText = showSecret
		? "Fearless concurrency. Zero-cost abstractions. Infinite curiosity."
		: "Hello there! Built with Next.js | Love 💗 and Rust in heart.";

	useEffect(() => {
		setDisplayedText("");
		let index = 0;

		const interval = setInterval(() => {
			index++;
			setDisplayedText(terminalText.slice(0, index));

			if (index >= terminalText.length) {
				clearInterval(interval);
			}
		}, 35);

		return () => clearInterval(interval);
	}, [terminalText]);

	return (
		<footer className="border-t-2 border-gray-800 bg-[#030A12] px-6 py-8 sm:px-10 lg:px-20 2xl:px-40">
			<div className="mx-auto max-w-[1800px]">
				{/* Terminal Easter egg */}
				<motion.div
					initial={{ opacity: 0, y: 25 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.7, ease: "easeOut" }}
					className="group flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between"
				>
					<div className="min-w-0 font-mono text-xs leading-6 sm:text-sm">
						{/* Terminal prompt */}
						<motion.div
							initial={{ opacity: 0, x: -15 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="mb-2 flex items-center gap-2 text-gray-400"
						>
							<motion.span
								whileInView={{ rotate: [0, -8, 8, 0] }}
								transition={{
									duration: 1.2,
									repeat: Infinity,
									repeatDelay: 3,
								}}
								className="flex"
							>
								<BiTerminal className="text-lg text-[#019BFB]" />
							</motion.span>

							<span className="text-[#019BFB]">ishank@bbi</span>
							<span>:~$</span>

							<motion.button
								type="button"
								onClick={() => setShowSecret((prev) => !prev)}
								whileHover={{ color: "#019BFB", x: 3 }}
								whileTap={{ scale: 0.96 }}
								className="cursor-pointer text-left text-gray-300 outline-none"
								aria-label="Run portfolio Easter egg"
							>
								cargo run --portfolio
							</motion.button>
						</motion.div>

						{/* Compilation logs */}
						{["Compiling dreams v1.0.0", "Finished in 2.84s", "Running portfolio..."].map((line, index) => (
							<motion.p
								key={line}
								initial={{ opacity: 0, x: -10 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.4,
									delay: 0.35 + index * 0.18,
								}}
								className={`text-gray-500 ${index > 0 ? "pl-3" : ""}`}
							>
								{line}
							</motion.p>
						))}

						{/* Typewriter output */}
						<p className="text-[#A5D6FF]">
							<span className="text-[#019BFB]">&gt;</span> {displayedText}
							<motion.span
								whileInView={{ opacity: [1, 0, 1] }}
								transition={{
									duration: 0.8,
									repeat: Infinity,
									ease: "linear",
								}}
								className="text-[#019BFB]"
							>
								▋
							</motion.span>
							<AnimatePresence>
								{!showSecret && displayedText === terminalText && (
									<motion.button
										key="crab"
										type="button"
										initial={{ opacity: 0, scale: 0.3, rotate: -30 }}
										whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
										exit={{ opacity: 0, scale: 0.3 }}
										whileHover={{ scale: 1.3, rotate: 12 }}
										whileTap={{ scale: 0.9 }}
										transition={{ type: "spring", stiffness: 300, damping: 15 }}
										onClick={() => setShowSecret(true)}
										className="ml-2 inline-block"
										aria-label="Reveal the secret message"
									>
										🦀
									</motion.button>
								)}
							</AnimatePresence>
						</p>

						{/* Secret success message */}
						<AnimatePresence>
							{showSecret && displayedText === terminalText && (
								<motion.p
									key="success"
									initial={{ opacity: 0, y: 10, height: 0 }}
									whileInView={{ opacity: 1, y: 0, height: "auto" }}
									exit={{ opacity: 0, y: 5, height: 0 }}
									transition={{ duration: 0.4, ease: "easeOut" }}
									className="overflow-hidden text-[#7EE787]"
								>
									<motion.span
										initial={{ opacity: 0 }}
										whileInView={{ opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										[OK] All systems operational.
									</motion.span>{" "}
									<motion.span
										whileInView={{ opacity: [1, 0, 1] }}
										transition={{ duration: 0.8, repeat: Infinity }}
									>
										▋
									</motion.span>
								</motion.p>
							)}
						</AnimatePresence>
					</div>
				</motion.div>

				{/* Copyright */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, delay: 0.25 }}
					className="mt-7 flex flex-col gap-2 border-t border-[#1B2937] pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:text-sm"
				>
					<p>
						© {new Date().getFullYear()} <span className="text-[#019BFB]">BIGBEASTISHANK</span>. All rights
						reserved.
					</p>

					<motion.p
						whileHover={{ color: "#A5D6FF" }}
						transition={{ duration: 0.2 }}
						className="flex items-center gap-2"
					>
						<SiNextdotjs className="text-gray-400" />
						<span>Built with Next.js</span>
						<span className="text-gray-700">|</span>
						<span>Love and Rust in heart</span>
						<motion.span
							whileInView={{ rotate: [0, -8, 8, 0] }}
							transition={{
								duration: 1,
								repeat: Infinity,
								repeatDelay: 4,
							}}
							className="flex"
						>
							<FaRust className="text-[#FF7849]" />
						</motion.span>
					</motion.p>
				</motion.div>
			</div>
		</footer>
	);
}
