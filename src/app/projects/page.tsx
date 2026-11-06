import ProjectsComponent from "@/components/Projects";
import { Metadata } from "next";

// Meta data
export const metadata: Metadata = {
	title: "Projects | BIGBEASTISHANK",
	description:
		"Below you'll find a selection of my key projects showcasing my work in web development, game development, and other areas. For my complete portfolio and source code, check out my GitHub.",
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	keywords: [
		"Rust",
		"React",
		"Next.js",
		"React",
		"JavaScript",
		"Web Development",
		"Game development",
		"C++",
		"Unreal Engine",
		"Unity",
	],

	openGraph: {
		title: "Projects | BIGBEASTISHANK",
		description:
			"Below you'll find a selection of my key projects showcasing my work in web development, game development, and other areas. For my complete portfolio and source code, check out my GitHub.",
	},
};

export default function Projects() {
	return (
		<div className="mt-20">
			<ProjectsComponent />
		</div>
	);
}
