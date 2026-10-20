import SectionTitleComponent from "@/components/inner/SectionTitle";
import { gameProjects, otherProjects, websiteProjects } from "@@/data/Projects";
import { FaArrowRight, FaGithub } from "react-icons/fa";
import { TbTerminal } from "react-icons/tb";
import ProjectCardComponent from "./inner/ProjectCard";

export default function FeaturedProjects() {
	const featuredProjects = [...gameProjects, ...websiteProjects, ...otherProjects].filter(
		(project) => project.featured,
	);

	return (
		<section
			id="featured-projects"
			className="bg-[#020D15] py-10 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 scroll-mt-20"
		>
			<SectionTitleComponent title="Featured Projects" />

			{/* Subtitle */}
			<div className="flex flex-col gap-1 text-xl font-bold sm:text-2xl md:text-3xl">
				<p>Some work that deserves a second look.</p>
			</div>

			{/* Responsive project grid */}
			<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
				{featuredProjects.map((data, index) => {
					return <ProjectCardComponent key={index} data={data} index={index} />;
				})}
			</div>
		</section>
	);
}
