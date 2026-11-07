"use client";
import HeadingBasic from "@/utility/HeadingBasic";
import { gameProjects, otherProjects, websiteProjects } from "@@/data/WorksData";
import { motion, HTMLMotionProps } from "framer-motion";
import Link from "next/link";
import { FaEye } from "react-icons/fa";

export default function FeaturedProjects() {
	const baseDelay = 3.2;
	const featuredProjects = [...gameProjects, ...websiteProjects, ...otherProjects].filter(
		(project) => project.featured,
	);

	return (
		<div id="myLangs" className="px-5 scroll-mt-28">
			{/* Headings */}
			<HeadingBasic
				heading="Featured Projects"
				url="#myLangs"
				animationDelay={baseDelay}
				description={
					<>
						<p>
							Here's an overview of some of the projects I am proud of then other. They deserve a special
							section and a special look.
						</p>
					</>
				}
			/>

			{/* Section content */}
			<motion.ul {...({ className: "px-6 md:mt-7 mt-5" } as HTMLMotionProps<"ul">)}>
				{featuredProjects.map((data, index) => (
					<motion.li
						{...({ id: data.title } as HTMLMotionProps<"li">)}
						key={index}
						initial={{ opacity: 0, y: 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							delay: baseDelay + 0.3 + (index * 0.3) / 2,
							duration: 0.5,
							type: "spring",
						}}
						{...({ className: "scroll-mt-28" } as HTMLMotionProps<"li">)}
					>
						<div className="group mb-5 flex flex-col bg-[#0A0C0E]/10 backdrop-blur-md border border-[#1793D1]/50 hover:border-[#FF3333]/80 p-5 rounded-3xl hover:scale-[1.03] transition-all hover:shadow-lg shadow-md hover:shadow-[#FF3333]/80 shadow-[#1793D1]/50">
							{/* Project title */}
							<div className="flex">
								<Link href={`#${data.title}`} className={"outline-none"}>
									<h2 className="md:text-lg text-base font-semibold">{data.title}</h2>
								</Link>
							</div>

							{/* Project Description */}
							<p className="md:text-base text-sm mb-3 text-[#F6F9FC]/75">{data.description}</p>

							{/* Read more txt */}
							<Link
								href={data.projectUrl}
								target="_blank"
								className="text-semibold hover:scale-[1.1] transition-all md:text-base text-sm mr-auto outline-none"
							>
								<span className="flex group/readMore py-[0.15rem] px-[1rem] border border-[#1793D1]/50 group-hover:border-[#FF3333]/70 rounded-full bg-[#050607] hover:shadow-md shadow-sm hover:shadow-[#1793D1]/30 group-hover:shadow-[#FF3333]/50 transition-all shadow-[#1793D1]/30">
									View Project
									<FaEye className="my-auto ml-2 group-hover/readMore:scale-[1.1] transition-all" />
								</span>
							</Link>
						</div>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
}
