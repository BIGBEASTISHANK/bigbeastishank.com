"use client";
import { Section, TechStack } from "@@/data/TechStack";
import SectionTitleComponent from "./inner/SectionTitle";
import { BiDownArrow } from "react-icons/bi";
import { useState } from "react";

export default function AboutComponent() {
	const tabCharacter = "\t";
	const [currentTechStack, setCurrentTechStack] = useState<Section>(Section.System);

	return (
		<div id="about" className="bg-[#040E18] px-70 py-10 border-y-2 border-gray-800 flex">
			{/* Left half */}
			<div className="flex flex-col w-2/3 pr-10">
				{/* Section title */}
				<SectionTitleComponent title="About me" />

				{/* Content */}
				<div className="text-5xl font-bold flex flex-col gap-2">
					<p>I'm a Rust Developer</p>
					<p>who loves building cool systems.</p>
				</div>

				<p className="flex flex-col gap-2 text-2xl text-gray-400 max-w-250 my-7">
					I enjoy building efficient systems with Rust and Linux, working on everything from low-level
					programming and server administration to fullstack development with Next.js, Python, and MongoDB.
					Outside of development, I work on open-source projects, games, explore cybersecurity and penetration
					testing, and learn more about AI/ML and data structures & algorithms. As a multiple-time hackathon
					winner, mentor, and judge, I enjoy sharing knowledge, learning new technologies, and building things
					that solve real-world problems. I use Arch BTW!
				</p>

				<div className="flex justify-between items-center mb-5 max-w-250">
					{/* Sub section title */}
					<SectionTitleComponent title="Tech Stack" />

					<div className="relative w-fit mb-5">
						<select
							onChange={(e) => setCurrentTechStack(e.target.value as Section)}
							className="w-full cursor-pointer appearance-none rounded-2xl border-2 border-[#1B2937] bg-[#040E17] py-3 pl-5 pr-12 text-xl text-white outline-none select-none"
						>
							{Object.values(Section).map((data) => (
								<option key={data} value={data}>
									{data}
								</option>
							))}
						</select>

						<BiDownArrow className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white" />
					</div>
				</div>

				<div className="flex gap-5 flex-wrap select-none">
					{TechStack[currentTechStack].map((data, index) => (
						<div
							key={index}
							className={`flex gap-5 text-2xl items-center px-5 py-2 text-[#019BFB] border-2 border-[#019BFB] rounded-2xl ${index % 2 === 0 ? "rotate-2" : "-rotate-2"}`}
						>
							<data.icon className="text-3xl" />
							<p>{data.name}</p>
						</div>
					))}
				</div>
			</div>

			{/* Right */}
			<div className="flex flex-col w-1/2">
				{/* Code section */}
				<div className="flex flex-col overflow-hidden rounded-xl border-2 border-[#1B2937] bg-[#040E17]">
					{/* Title Bar */}
					<div className="flex items-center justify-between border-b border-[#101D2A] bg-[#0A1420] px-4 py-2.5">
						<div className="flex items-center gap-1.5">
							<div className="h-3.5 w-3.5 rounded-full bg-[#FF5F57]" />
							<div className="h-3.5 w-3.5 rounded-full bg-[#FEBC2E]" />
							<div className="h-3.5 w-3.5 rounded-full bg-[#28C840]" />
						</div>
						<p className="text-sm font-medium text-gray-400 select-none">main.rs</p>
					</div>

					{/* Code */}
					<div className="overflow-x-auto px-4 py-3 font-mono text-[15px] leading-6">
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
								<></>,
								<>
									<span className="text-[#FF7B72]">fn</span>{" "}
									<span className="text-[#D2A8FF]">main</span>() -&gt;{" "}
									<span className="text-[#79C0FF]">std::io::Result</span>&lt;()&gt; {"{"}
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
									<span className="text-[#79C0FF]">std::io::Result</span>&lt;()&gt; {"{"}
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
								<div key={i} className="flex h-6 whitespace-pre">
									<span className="w-9 shrink-0 select-none pr-5 text-right text-[#64748B]">
										{i + 1}
									</span>
									<span className="text-[#D4D4D4]">{line}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
