"use client";
import { Section, TechStack } from "@@/data/TechStack";
import SectionTitleComponent from "@/components/inner/SectionTitle";
import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";
import CodeTerminal from "@/components/inner/CodeTerminal";
import { motion } from "motion/react";

export default function AboutComponent() {
	const drfaultCurrectTechStack = Section.WebDev;
	const [currentTechStack, setCurrentTechStack] = useState<Section>(drfaultCurrectTechStack);
	const tabCharacter = "\t";

	return (
		<section
			id="about"
			className="bg-[#040E18] 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 border-y-2 border-gray-800 flex flex-col 2xl:flex-row 2xl:gap-0 gap-10 scroll-mt-20 overflow-x-hidden"
		>
			{/* Left half */}
			<div className="flex flex-col 2xl:w-1/2 2xl:pr-10">
				{/* Section title */}
				<SectionTitleComponent title="About me" animDelay={0.2} />

				{/* Content */}
				<motion.div
					initial={{ opacity: 0, y: 15 }}
					animate={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.4 }}
					className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col gap-1"
				>
					<p>I'm a Rust Developer</p>
					<p>who loves building cool systems.</p>
				</motion.div>

				<motion.p
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.3, delay: 0.6 }}
					className="flex flex-col gap-2 text-sm sm:text-base md:text-md text-gray-400 2xl:max-w-180 my-3 lg:text-left text-justify"
				>
					I enjoy building efficient systems with Rust and Linux, working on everything from low-level
					programming and server administration to fullstack development with Next.js, Python, and MongoDB.
					Outside of development, I work on open-source projects, games, explore cybersecurity and penetration
					testing, and learn more about AI/ML and data structures & algorithms. As a multiple-time hackathon
					winner, mentor, and judge, I enjoy sharing knowledge, learning new technologies, and building things
					that solve real-world problems. I use Arch BTW!
				</motion.p>

				<div className="flex sm:flex-row flex-col sm:justify-between sm:items-center mb-5 2xl:max-w-180 sm:mt-0 mt-5">
					{/* Sub section title */}
					<SectionTitleComponent title="Tech Stack" animDelay={0.8} />

					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: 0.8, type: "spring", stiffness: 350, damping: 20 }}
						className="relative w-fit sm:mb-5 mb-1"
					>
						<select
							value={currentTechStack}
							onChange={(e) => setCurrentTechStack(e.target.value as Section)}
							className="w-full z-10 cursor-pointer appearance-none rounded-2xl border-2 border-[#1B2937] bg-[#040E17] py-2 pl-4 pr-10 text-sm sm:text-base md:text-md text-white outline-none select-none"
						>
							{Object.values(Section).map((data) => (
								<option key={data} value={data}>
									{data}
								</option>
							))}
						</select>

						<BiDownArrow className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" />
					</motion.div>
				</div>

				<div className="flex gap-x-8 gap-y-5 flex-wrap select-none 2xl:max-w-180 sm:justify-start justify-center">
					{TechStack[currentTechStack].map((data, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								duration: 0.3,
								delay: 1 + index * 0.05,
								type: "spring",
								stiffness: 350,
								damping: 20,
							}}
							className={`flex gap-3 text-sm sm:text-base md:text-lg items-center px-3 py-1.5 text-[#019BFB] border-2 border-[#019BFB] rounded-xl ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
						>
							<data.icon className="text-base sm:text-lg" />
							<p>{data.name}</p>
						</motion.div>
					))}
				</div>
			</div>

			{/* Right */}
			<motion.div
				initial={{ opacity: 0, x: 20, rotate: 2 }}
				whileInView={{ opacity: 1, x: 0, rotate: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 350, damping: 20 }}
				className="flex flex-col 2xl:w-1/2"
			>
				{/* Code section */}
				<CodeTerminal
					data={
						<div className="min-w-max" style={{ tabSize: 4 }}>
							{[
								<>
									<span className="text-[#FF7B72]">use</span>{" "}
									<span className="text-[#79C0FF]">std::bigbeastishank::speciality</span>;
								</>,
								<>
									<span className="text-[#FF7B72]">use</span>{" "}
									<span className="text-[#79C0FF]">std::ishank::load</span>;
								</>,
								<>
									<span className="text-[#FF7B72]">use</span>{" "}
									<span className="text-[#79C0FF]">std::io::Result</span>;
								</>,
								<></>,
								<>
									<span className="text-[#FF7B72]">fn</span>{" "}
									<span className="text-[#D2A8FF]">main</span>() -&gt;{" "}
									<span className="text-[#79C0FF]">Result</span>&lt;()&gt; {"{"}
								</>,
								<>
									{tabCharacter}
									<span className="text-[#D2A8FF]">initializeEnvironment</span>(
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									<span className="text-[#79C0FF]">vec!</span>[
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">FULL_STACK_DEVELOPER</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">GAMES_DEVELOPER</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">SERVER_ADMINISTRATOR</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">NETWORK_ADMINISTRATOR</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">PENTESTER</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}
									{tabCharacter}
									speciality::<span className="text-[#7EE787]">SOFTWARE_ENGINEER</span>,
								</>,
								<>
									{tabCharacter}
									{tabCharacter}]
								</>,
								<>{tabCharacter})?;</>,
								<></>,
								<>
									{tabCharacter}
									<span className="text-[#79C0FF]">println!</span>(
									<span className="text-[#A5D6FF]">"[OK] All systems operational."</span>);
								</>,
								<>
									{tabCharacter}
									<span className="text-[#FF7B72]">Ok</span>(())
								</>,
								<>{"}"}</>,
								<></>,
								<>
									<span className="text-[#FF7B72]">fn</span>{" "}
									<span className="text-[#D2A8FF]">initializeEnvironment</span>(core:{" "}
									<span className="text-[#79C0FF]">Vec</span>&lt;
									<span className="text-[#79C0FF]">speciality</span>&gt;) -&gt;{" "}
									<span className="text-[#79C0FF]">Result</span>&lt;()&gt; {"{"}
								</>,
								<>
									{tabCharacter}
									<span className="text-[#FF7B72]">for</span> module{" "}
									<span className="text-[#FF7B72]">in</span> core {"{"}
								</>,
								<>
									{tabCharacter}
									{tabCharacter}ishank::load(module);
								</>,
								<>
									{tabCharacter}
									{"}"}
								</>,
								<>
									{tabCharacter}
									<span className="text-[#FF7B72]">Ok</span>(())
								</>,
								<>{"}"}</>,
							].map((line, i) => (
								<div key={i} className="flex h-[1.3rem] whitespace-pre">
									<span className="w-9 shrink-0 select-none pr-5 text-right text-[#64748B]">
										{i + 1}
									</span>
									<span className="text-[#D4D4D4]">{line}</span>
								</div>
							))}
						</div>
					}
					title="main.rs"
				/>
			</motion.div>
		</section>
	);
}
