import SectionTitleComponent from "@/components/inner/SectionTitle";
import { gameProjects, otherProjects, websiteProjects } from "@@/data/Projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { TbTerminal } from "react-icons/tb";

export default function FeaturedProjects() {
	const featuredProjects = [...gameProjects, ...websiteProjects, ...otherProjects].filter(
		(project) => project.featured,
	);

	return (
		<div id="featured-projects" className="bg-[#020D15] px-4 py-10 sm:px-8 lg:px-20 xl:px-40 featuredProjects">
			<SectionTitleComponent title="Featured Projects" />

			<div className="flex flex-col gap-1 text-3xl font-bold">
				<p>Some work that deserves a second look.</p>
			</div>

			<div className="grid grid-cols-3 gap-5 mt-10">
				{featuredProjects.map((data, index) => {
					return (
						<div
							key={index}
							className="border-3 border-gray-800 rounded-xl text-sm flex flex-col hover:scale-[1.025] card-glow transition-all"
						>
							{/* Title bar */}
							<div className="flex items-center gap-2 px-5 py-3 rounded-t-xl bg-[#0A1420] border-b-3 border-gray-800">
								{/* Dot */}
								<div className="h-2.5 w-2.5 rounded-full dot-glow" />
								{/* Terminal Icon */}
								<TbTerminal className="text-[#28C840] text-xl" />
								<p className="text-[#6A744D] font-bold">{String(index + 1).padStart(2, "0")}</p>
								<p className="text-gray-400 font-bold">/</p>
								{/* Project Catagory */}
								<p className="text-gray-300">{data.category}</p>
							</div>

							{/* Content */}
							<div className="flex flex-col h-full gap-1 py-5 rounded-b-xl bg-[#000C15]">
								{/* Main Content */}
								<div className="px-5">
									{/* Title */}
									<p className="text-xl font-bold">{data.title}</p>
									{/* Description */}
									<p className="text-gray-400 text-md">{data.description}</p>
									{/* Tags */}
									<div className="flex flex-wrap gap-2 text-gray-400 pt-4 py-6">
										{data.tags.map((tag, index) => {
											const TagIcon = tag[0];
											const TagName = tag[1];
											return (
												<div
													key={index}
													className={`flex gap-3 text-sm items-center px-3 py-1.5 text-[#019BFB] border-2 border-[#019BFB] rounded-xl`}
												>
													<TagIcon className="text-sm" />
													<p>{TagName}</p>
												</div>
											);
										})}
									</div>
								</div>

								{/* Github Button */}
								<div className="mx-5 mt-auto h-18 pt-5 border-t-3 border-gray-800">
									<a
										href={data.projectUrl}
										target="_blank"
										className="flex items-center h-full github-button px-3 gap-2 rounded-lg hover:scale-[1.025] transition-all"
									>
										<FaGithub className="text-2xl" />
										<p className="text-md font-semibold">View on GitHub</p>

										<FaArrowRight className="font-thin ml-auto" />
									</a>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
