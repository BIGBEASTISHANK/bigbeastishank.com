import { ProjectData } from "@@/data/Projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { TbTerminal } from "react-icons/tb";

export default function ProjectCardComponent({ data, index }: { data: ProjectData; index: number }) {
	return (
		<div className="project-card-glow flex min-w-0 flex-col rounded-xl border-3 border-gray-800 text-sm transition-all hover:scale-[1.025]">
			{/* Title bar */}
			<div className="flex items-center gap-2 rounded-t-xl border-b-3 border-gray-800 bg-[#0A1420] px-3 py-3 sm:px-5">
				{/* Dot */}
				<div className="dot-glow h-2.5 w-2.5 shrink-0 rounded-full" />

				{/* Terminal icon */}
				<TbTerminal className="shrink-0 text-xl text-[#28C840]" />

				{/* Project number */}
				<p className="shrink-0 font-bold text-[#6A744D]">{String(index + 1).padStart(2, "0")}</p>

				<p className="shrink-0 font-bold text-gray-400">/</p>

				{/* Project category */}
				<p className="min-w-0 truncate text-xs text-gray-300 sm:text-sm">{data.category}</p>
			</div>

			{/* Content */}
			<div className="flex flex-1 flex-col gap-1 rounded-b-xl bg-[#000C15] py-5">
				{/* Main content */}
				<div className="px-3 sm:px-5 h-full flex flex-col">
					{/* Title */}
					<p className="text-lg font-bold sm:text-xl">{data.title}</p>

					{/* Description */}
					<p className="text-sm text-gray-400 sm:text-base">{data.description}</p>

					{/* Tags */}
					<div className="flex flex-wrap gap-2 pt-4 pb-6 text-gray-400 mt-auto">
						{data.tags.map((tag, tagIndex) => {
							const TagIcon = tag[0];
							const TagName = tag[1];

							return (
								<div
									key={tagIndex}
									className="flex items-center gap-2 rounded-xl border-2 border-[#019BFB] px-2 py-1.5 text-xs text-[#019BFB] sm:gap-3 sm:px-3 sm:text-sm select-none"
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

						<p className="text-sm font-semibold sm:text-base select-none">View on GitHub</p>

						<FaArrowRight className="ml-auto shrink-0 font-thin" />
					</a>
				</div>
			</div>
		</div>
	);
}
