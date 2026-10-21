"use client";
import SectionTitleComponent from "@/components/inner/SectionTitle";
import { gameProjects, otherProjects, websiteProjects } from "@@/data/Projects";
import ProjectCardComponent from "@/components/inner/ProjectCard";
import { motion } from "motion/react";

export default function FeaturedProjects() {
	const featuredProjects = [...gameProjects, ...websiteProjects, ...otherProjects].filter(
		(project) => project.featured,
	);

	return (
		<section
			id="featured-projects"
			className="bg-[#020D15] py-10 2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 scroll-mt-20"
		>
			<SectionTitleComponent title="Featured Projects" animDelay={0.1} />

			{/* Subtitle */}
			<motion.div
				initial={{ opacity: 0, y: 15 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
				className="flex flex-col gap-1 text-xl font-bold sm:text-2xl md:text-3xl"
			>
				<p>Some work that deserves a second look.</p>
			</motion.div>

			{/* Responsive project grid */}
			<div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 2xl:grid-cols-3">
				{featuredProjects.map((data, index) => {
					return <ProjectCardComponent key={index} data={data} index={index} initialDelay={0.4} />;
				})}
			</div>
		</section>
	);
}
