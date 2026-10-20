import SectionTitleComponent from "@/components/inner/SectionTitle";
import { gameProjects, otherProjects, websiteProjects } from "@@/data/Projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { TbTerminal } from "react-icons/tb";

export default function FeaturedProjects() {
	const featuredProjects = [...gameProjects, ...websiteProjects, ...otherProjects].filter(
		(project) => project.featured,
	);

	return (
		<section
			id="featured-projects"
			className="featuredProjects bg-[#020D15] py-10 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 scroll-mt-20"
		>
			<SectionTitleComponent title="Featured Projects" />

			{/* Subtitle */}
			<div className="flex flex-col gap-1 text-xl font-bold sm:text-2xl md:text-3xl">
				<p>Some work that deserves a second look.</p>
			</div>

			{/* Responsive project grid */}
			<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
				{featuredProjects.map((data, index) => {
					return (
						<div
							key={index}
							className="card-glow flex min-w-0 flex-col rounded-xl border-3 border-gray-800 text-sm transition-all hover:scale-[1.025]"
						>
							{/* Title bar */}
							<div className="flex items-center gap-2 rounded-t-xl border-b-3 border-gray-800 bg-[#0A1420] px-3 py-3 sm:px-5">
								{/* Dot */}
								<div className="dot-glow h-2.5 w-2.5 shrink-0 rounded-full" />

								{/* Terminal icon */}
								<TbTerminal className="shrink-0 text-xl text-[#28C840]" />

								{/* Project number */}
								<p className="shrink-0 font-bold text-[#6A744D]">
									{String(index + 1).padStart(2, "0")}
								</p>

								<p className="shrink-0 font-bold text-gray-400">/</p>

								{/* Project category */}
								<p className="min-w-0 truncate text-xs text-gray-300 sm:text-sm">{data.category}</p>
							</div>

							{/* Content */}
							<div className="flex h-full flex-col gap-1 rounded-b-xl bg-[#000C15] py-5">
								{/* Main content */}
								<div className="px-3 sm:px-5">
									{/* Title */}
									<p className="text-lg font-bold sm:text-xl">{data.title}</p>

									{/* Description */}
									<p className="text-sm text-gray-400 sm:text-base">{data.description}</p>

									{/* Tags */}
									<div className="flex flex-wrap gap-2 pt-4 pb-6 text-gray-400">
										{data.tags.map((tag, tagIndex) => {
											const TagIcon = tag[0];
											const TagName = tag[1];

											return (
												<div
													key={tagIndex}
													className="flex items-center gap-2 rounded-xl border-2 border-[#019BFB] px-2 py-1.5 text-xs text-[#019BFB] sm:gap-3 sm:px-3 sm:text-sm"
												>
													<TagIcon className="shrink-0 text-sm" />
													<p>{TagName}</p>
												</div>
											);
										})}
									</div>
								</div>

								{/* GitHub button */}
								<div className="mx-3 mt-auto min-h-18 border-t-3 border-gray-800 pt-5 sm:mx-5">
									<a
										href={data.projectUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="github-button flex h-full items-center gap-2 rounded-lg px-3 transition-all hover:scale-[1.025]"
									>
										<FaGithub className="shrink-0 text-2xl" />

										<p className="text-sm font-semibold sm:text-base">View on GitHub</p>

										<FaArrowRight className="ml-auto shrink-0 font-thin" />
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
}
