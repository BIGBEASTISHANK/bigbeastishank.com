"use client";
import { FaSearch } from "react-icons/fa";
import CodeTerminal from "./inner/CodeTerminal";
import SectionTitleComponent from "./inner/SectionTitle";
import { useEffect, useRef } from "react";

export default function ProjectsComponent() {
	const searchInputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		const handleKeyDown = (event: any) => {
			if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
				event.preventDefault();
				searchInputRef.current?.focus();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<section id="projects" className="projects">
			{/* Intro section */}
			<div className="flex flex-col 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 2xl:flex-row 2xl:gap-0 gap-10 bg-[#040E18] border-2 border-gray-800">
				{/* Left */}
				<div className="flex flex-col 2xl:w-1/2 2xl:pr-10">
					{/* Subtitle */}
					<SectionTitleComponent title="Projects" />

					{/* Content */}
					<div className="text-xl sm:text-2xl md:text-3xl font-bold flex flex-col gap-1">
						<p>
							Things I've <span className="text-gradient">Built</span>
						</p>
					</div>

					<p className="flex flex-col gap-2 text-sm sm:text-base md:text-md text-gray-400 2xl:max-w-180 my-3 lg:text-left text-justify">
						A collection of projects, experiments, and open source work that I've built over time. From
						games to web apps and random tools, each project represents a unique learning experience.
					</p>
				</div>

				{/* Right */}
				<div className="flex flex-col 2xl:w-1/2">
					<CodeTerminal
						data={
							<div className="font-mono text-sm leading-6">
								<p>
									<span className="text-[#019BFB]">ishank@bbi</span>
									<span className="text-gray-400">:~$</span>
									<span className="text-white">ls ./projects</span>
								</p>

								<div className="mt-3 grid grid-cols-[100px_1fr] gap-x-4">
									<span className="text-[#79C0FF]">games/</span>
									<span className="text-gray-500"># Fun experiments and playable projects</span>

									<span className="text-[#79C0FF]">websites/</span>
									<span className="text-gray-500"># Fullstack web apps and platforms</span>

									<span className="text-[#79C0FF]">others/</span>
									<span className="text-gray-500"># Tools, scripts and random stuff</span>
								</div>

								<p className="mt-1 animate-pulse text-[#A5D6FF]">▋</p>
							</div>
						}
						title="projects.sh"
					/>
				</div>
			</div>

			{/* Projects grid */}
			<div className="bg-[#020D15] 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10">
				{/* Searchbar */}
				<div className="flex gap-3 items-center px-3 search-bar mx-30 h-10 bg-[#0A1420] rounded-lg">
					<FaSearch />
					<input
						ref={searchInputRef}
						type="text"
						placeholder="Search projects..."
						className="text-sm text-white outline-none w-full h-full py-3"
					/>
					<kbd className="shrink-0 flex items-center gap-1 px-2 py-0.5 text-xs text-gray-400 bg-[#152231] border border-gray-700 rounded-md select-none">
						<span>Ctrl</span>
						<span className="text-gray-500">+</span>
						<span>K</span>
					</kbd>
				</div>
			</div>
		</section>
	);
}
