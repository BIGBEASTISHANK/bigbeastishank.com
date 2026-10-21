"use client";
import { FaCode, FaGamepad, FaGlobe, FaSearch } from "react-icons/fa";
import CodeTerminal from "@/components/inner/CodeTerminal";
import SectionTitleComponent from "@/components/inner/SectionTitle";
import { useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { ProjectData, gameProjects, otherProjects, websiteProjects } from "@@/data/Projects";
import ProjectCardComponent from "@/components/inner/ProjectCard";
import { motion } from "motion/react";

export default function ProjectsComponent() {
	const searchInputRef = useRef<HTMLInputElement>(null);
	const [searchQuery, setSearchQuery] = useState<string>("");

	const normalizedQuery = searchQuery.trim().toLowerCase();

	// Filter projects
	const filteredGameProjects = gameProjects.filter((project: ProjectData) =>
		project.title.toLowerCase().includes(normalizedQuery),
	);
	const filteredWebsiteProjects = websiteProjects.filter((project: ProjectData) =>
		project.title.toLowerCase().includes(normalizedQuery),
	);
	const filteredOtherProjects = otherProjects.filter((project: ProjectData) =>
		project.title.toLowerCase().includes(normalizedQuery),
	);

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
			<div className="flex flex-col 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 2xl:flex-row 2xl:gap-0 gap-10 bg-[#040E18] border-b-2 border-gray-800">
				{/* Left */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
					className="flex flex-col 2xl:w-1/2 2xl:pr-10"
				>
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
				</motion.div>

				{/* Right */}
				<motion.div
					initial={{ opacity: 0, x: 20 }}
					whileInView={{ opacity: 1, x: 0 }}
					viewport={{ once: true, amount: 0.2 }}
					transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 350, damping: 20 }}
					className="flex flex-col 2xl:w-1/2"
				>
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
				</motion.div>
			</div>

			{/* Projects grid */}
			<div className="bg-[#020D15] 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10">
				{/* Searchbar */}
				<motion.div
					initial={{ opacity: 0, scaleX: 0 }}
					whileInView={{ opacity: 1, scaleX: 1 }}
					viewport={{ once: true, amount: 0.3 }}
					transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
					className="flex w-full max-w-4xl mx-auto items-center gap-2 sm:gap-3 px-3 sm:px-4 h-12 sm:h-13 bg-[#0A1420] rounded-xl sm:rounded-2xl search-bar mb-10"
				>
					<FaSearch className="shrink-0 text-gray-400" />

					<input
						ref={searchInputRef}
						type="text"
						value={searchQuery}
						onChange={(event) => setSearchQuery(event.target.value)}
						placeholder="Search projects..."
						className="min-w-0 flex-1 bg-transparent text-sm text-white placeholder:text-gray-500 outline-none h-full py-3"
					/>

					<kbd className="hidden sm:flex shrink-0 items-center gap-1 px-2 py-0.5 text-xs text-gray-400 bg-[#152231] border border-gray-700 rounded-md select-none">
						<span>Ctrl</span>
						<span className="text-gray-500">+</span>
						<span>K</span>
					</kbd>
				</motion.div>

				{/* Project grid */}
				<div className="flex flex-col gap-15">
					{filteredGameProjects.length > 0 && (
						<ProjectGridSection
							Icon={FaGamepad}
							listNum={1}
							title="Games"
							teaserDesc="Fun experiments and playable projects"
							projectData={filteredGameProjects}
						/>
					)}

					{filteredWebsiteProjects.length > 0 && (
						<ProjectGridSection
							Icon={FaGlobe}
							listNum={2}
							title="Websites"
							teaserDesc="Fullstack web apps and platforms"
							projectData={filteredWebsiteProjects}
						/>
					)}

					{filteredOtherProjects.length > 0 && (
						<ProjectGridSection
							Icon={FaCode}
							listNum={3}
							title="Other"
							teaserDesc="Tools, scripts and random stuff"
							projectData={filteredOtherProjects}
						/>
					)}
				</div>

				{/* No projects */}
				{filteredGameProjects.length === 0 &&
					filteredWebsiteProjects.length === 0 &&
					filteredOtherProjects.length === 0 && (
						<div className="flex flex-col gap-7 text-center">
							<p className="text-gray-400 text-xl font-bold">No projects found</p>
							<p className="text-gray-500">Try searching for something else or clear the search bar.</p>
						</div>
					)}
			</div>
		</section>
	);
}

function ProjectGridSection({
	Icon,
	listNum,
	title,
	teaserDesc,
	projectData,
}: {
	Icon: IconType;
	listNum: number;
	title: string;
	teaserDesc: string;
	projectData: ProjectData[];
}) {
	return (
		<div id={`${title}-projects`} className="project-grid">
			{/* Header */}
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, ease: "easeOut" }}
				className="flex lg:flex-row flex-col gap-3 lg:items-center mb-5"
			>
				<div className="flex items-center gap-3">
					<Icon className="md:text-3xl text-2xl text-[#019BFB]" />
					<p className="shrink-0 md:text-xl text-lg font-bold text-[#019BFB]">
						{listNum.toString().padStart(2, "0")}
					</p>
					<p className="shrink-0 md:text-xl text-lg font-bold text-gray-500">/</p>
					<p className="shrink-0 md:text-xl text-lg font-bold">{title}</p>
				</div>

				{/* Divider */}
				<div className="flex items-center gap-2 flex-1">
					<div className="w-10 sm:w-14 md:w-20 h-0.5 bg-[#019BFB] rounded-full" />
					<div className="w-full h-0.5 bg-gray-600 rounded-full" />
				</div>

				<div className="flex items-center gap-3">
					<p className="shrink-0 text-sm text-gray-300">{teaserDesc}</p>
					<p className="shrink-0 px-2 bg-[#152231] rounded-md border-2 border-gray-700">
						{projectData.length}
					</p>
				</div>
			</motion.div>

			{/* Project cards */}
			<div className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
				{projectData.map((data, index) => {
					return (
						<ProjectCardComponent key={index} data={data} index={index} initialDelay={0.2 + index * 0.12} />
					);
				})}
			</div>
		</div>
	);
}
