import {
	FaRust,
	FaLinux,
	FaGitAlt,
	FaGithub,
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaJs,
	FaPython,
	FaMarkdown,
} from "react-icons/fa";

import {
	SiCplusplus,
	SiC,
	SiGnubash,
	SiNextdotjs,
	SiReact,
	SiTypescript,
	SiMongodb,
	SiMysql,
	SiFramer,
	SiTailwindcss,
	SiUnity,
	SiUnrealengine,
	SiExcalidraw,
	SiVscodium,
	SiNeovim,
	SiAnytype,
} from "react-icons/si";

import { TbBrandCSharp } from "react-icons/tb";
import type { IconType } from "react-icons";
import { FaNetworkWired, FaWindows } from "react-icons/fa6";

export enum Section {
	System = "System",
	WebDev = "Web Dev",
	GameDev = "Game Dev",
	Tools = "Tools",
}

type Tech = {
	name: string;
	icon: IconType;
};

export const TechStack: Record<Section, Tech[]> = {
	[Section.System]: [
		{ name: "Rust", icon: FaRust },
		{ name: "C++", icon: SiCplusplus },
		{ name: "C", icon: SiC },
		{ name: "Bash", icon: SiGnubash },
		{ name: "Linux", icon: FaLinux },
	],

	[Section.WebDev]: [
		{ name: "Next.js", icon: SiNextdotjs },
		{ name: "TypeScript", icon: SiTypescript },
		{ name: "Sass", icon: FaSass },
		{ name: "Python", icon: FaPython },
		{ name: "MongoDB", icon: SiMongodb },
		{ name: "Markdown", icon: FaMarkdown },
		{ name: "Framer Motion", icon: SiFramer },
		{ name: "Tailwind CSS", icon: SiTailwindcss },
	],

	[Section.GameDev]: [
		{ name: "Unity", icon: SiUnity },
		{ name: "Unreal Engine", icon: SiUnrealengine },
		{ name: "C++", icon: SiCplusplus },
		{ name: "C#", icon: TbBrandCSharp },
		{ name: "Windows", icon: FaWindows },
	],

	[Section.Tools]: [
		{ name: "Anytype", icon: SiAnytype },
		{ name: "Excalidraw", icon: SiExcalidraw },
		{ name: "Draw.io", icon: FaNetworkWired },
		{ name: "VSCodium", icon: SiVscodium },
		{ name: "Neovim", icon: SiNeovim },
		{ name: "GitHub", icon: FaGithub },
		{ name: "Git", icon: FaGitAlt },
	],
};
