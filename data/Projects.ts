import type { IconType } from "react-icons";
import { BsOpenai } from "react-icons/bs";
import {
	FaGamepad,
	FaGlobe,
	FaCode,
	FaPython,
	FaReact,
	FaLinux,
	FaShieldAlt,
	FaBrain,
	FaFileAlt,
	FaDiscord,
	FaRust,
	FaUnity,
	FaNodeJs,
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaGitAlt,
	FaCloud,
	FaLock,
	FaRobot,
	FaServer,
	FaCarAlt,
} from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { GiPlatform } from "react-icons/gi";
import {
	SiTypescript,
	SiNextdotjs,
	SiTailwindcss,
	SiMongodb,
	SiPytorch,
	SiFastapi,
	SiFlask,
	SiElectron,
	SiGnubash,
} from "react-icons/si";

export type ProjectTag = [IconType, string];

export interface ProjectData {
	title: string;
	description: string;
	projectUrl: string;
	tags: ProjectTag[];
	category: string;
	featured?: boolean;
}

// Game Projects
export const gameProjects: ProjectData[] = [
	{
		title: "Drag Your Tires",
		description:
			"Master precision drifts in this high-speed racing game. Conquer challenging tracks and showcase your skills in style.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Drag-Your-Tires",
		tags: [
			[FaUnity, "Unity"],
			[FaCode, "C#"],
			[FaCarAlt, "Racer"],
		],
		category: "Racing Game",
	},
	{
		title: "Shimrun Dash",
		description: "A high-speed obstacle-dodging game with challenging gameplay, inspired by Geometry Dash.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Shimrun-Dash",
		tags: [
			[GiPlatform, "Platformer"],
			[FaUnity, "Unity"],
			[FaCode, "C#"],
		],
		category: "Platform Game",
	},
	{
		title: "Sussy Shooter",
		description:
			"Vanquish enemies, discover hidden spots, and reach the final target in this action-packed game with strategic twists.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Sussy-Shooter",
		tags: [
			[FaGun, "Shooter"],
			[GiPlatform, "Platformer"],
			[FaUnity, "Unity"],
			[FaCode, "C#"],
		],
		category: "FPS Shooter",
	},
	{
		title: "Beast Race",
		description:
			"Race through thrilling tracks in this 3D car game. Complete the course and experience high-speed driving.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Beast-Race",
		tags: [
			[FaUnity, "Unity"],
			[FaCode, "C#"],
			[FaCarAlt, "Racer"],
		],
		category: "Racing Game",
	},
];

// Website Projects
export const websiteProjects: ProjectData[] = [
	{
		title: "Crisis Compass",
		description:
			"An AI-powered disaster response coordination system that optimizes rescue operations through ML-based severity prediction, intelligent resource allocation, and real-time multi-agency coordination.",
		projectUrl: "https://github.com/BIGBEASTISHANK/CrisisCompass",
		tags: [
			[SiTypescript, "TypeScript"],
			[SiNextdotjs, "Next.js"],
			[SiTailwindcss, "Tailwind CSS"],
			[SiFastapi, "FastAPI"],
			[SiMongodb, "MongoDB"],
		],
		category: "Web Application",
	},
	{
		title: "MUJ Tasks",
		description:
			"A centralized platform for MUJ students to request and receive assistance with assignments, lab manuals, and CSE projects.",
		projectUrl: "https://github.com/BIGBEASTISHANK/MUJTasks",
		tags: [
			[SiTypescript, "TypeScript"],
			[FaReact, "React"],
			[FaNodeJs, "Node.js"],
			[SiMongodb, "MongoDB"],
		],
		category: "Web Application",
	},
	{
		title: "Cosmic Explorer",
		description:
			"An interactive space exploration dashboard featuring ISS tracking, Mars weather, potentially hazardous asteroids, and daily space highlights.",
		projectUrl: "https://github.com/BIGBEASTISHANK/CosmicExplorer",
		tags: [
			[SiTypescript, "TypeScript"],
			[SiNextdotjs, "Next.js"],
			[SiTailwindcss, "Tailwind CSS"],
			[FaReact, "React"],
			[FaGlobe, "NASA APIs"],
		],
		category: "Web Application",
	},
	{
		title: "HackathonPPTSubWeb",
		description:
			"A web application for hackathon presentation submissions. Stores participant details in MongoDB and uploads presentations to Google Drive.",
		projectUrl: "https://github.com/BIGBEASTISHANK/HackathonPPTSubWeb",
		tags: [
			[FaJs, "JavaScript"],
			[FaNodeJs, "Node.js"],
			[SiMongodb, "MongoDB"],
			[FaCloud, "Google Drive API"],
		],
		category: "Web Application",
	},
	{
		title: "bigbeastishank.com",
		description:
			"A personal portfolio website showcasing projects, development work, and alternative website designs across multiple branches and versions.",
		projectUrl: "https://github.com/BIGBEASTISHANK/bigbeastishank.com",
		tags: [
			[SiTypescript, "TypeScript"],
			[SiNextdotjs, "Next.js"],
			[SiTailwindcss, "Tailwind CSS"],
			[FaReact, "React"],
		],
		category: "Portfolio",
	},
	{
		title: "Python Website",
		description:
			"A Flask-powered website built with Python, HTML, CSS, and JavaScript to showcase personal work and development skills.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Initial-Websites/tree/flask",
		tags: [
			[SiFlask, "Flask"],
			[FaPython, "Python"],
			[FaHtml5, "HTML"],
			[FaCss3Alt, "CSS"],
			[FaJs, "JavaScript"],
		],
		category: "Web Application",
	},
	{
		title: "Initial React Site",
		description:
			"An early web development project built while learning React, exploring frontend development concepts and component-based UI design.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Initial-Websites/tree/react",
		tags: [
			[FaReact, "React"],
			[FaJs, "JavaScript"],
			[FaHtml5, "HTML"],
			[FaCss3Alt, "CSS"],
		],
		category: "Web Application",
	},
	{
		title: "Initial HTML Website",
		description:
			"The first website that sparked an interest in web development and introduced the fundamentals of building web pages.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Initial-Websites/tree/html",
		tags: [
			[FaHtml5, "HTML"],
			[FaCss3Alt, "CSS"],
			[FaJs, "JavaScript"],
		],
		category: "Web Application",
	},
];

// Other Projects
export const otherProjects: ProjectData[] = [
	{
		title: "BixSync",
		description:
			"A file synchronization system that syncs a folder across devices connected to the same local network. It's a great way to share files between devices quickly.",
		projectUrl: "https://github.com/BIGBEASTISHANK/BixSync",
		tags: [
			[FaRust, "Rust"],
			[FaCode, "Networking"],
			[FaServer, "File Synchronization"],
			[FaLinux, "Linux"],
		],
		category: "Security & Networking",
		featured: true,
	},
	{
		title: "Dumbotron Artificial Unintelligence",
		description:
			"A small Transformer-based large language model built from scratch using PyTorch to explore the internal architecture and core components of LLMs.",
		projectUrl: "https://github.com/BIGBEASTISHANK/DumbotronArtificialUnintelligence",
		tags: [
			[FaPython, "Python"],
			[SiPytorch, "PyTorch"],
			[FaBrain, "Transformers"],
			[BsOpenai, "LLMs"],
		],
		category: "AI & Machine Learning",
	},
	{
		title: "SignifyAI",
		description:
			"An AI-powered translator that converts spoken audio or video into American Sign Language gestures using speech recognition, NLP, and gesture animation. Won third place at MUJHackX 3.0 in 2025.",
		projectUrl: "https://github.com/BIGBEASTISHANK/SignifyAI",
		tags: [
			[FaPython, "Python"],
			[SiFastapi, "FastAPI"],
			[SiNextdotjs, "Next.js"],
			[FaReact, "React"],
			[SiTypescript, "TypeScript"],
			[FaBrain, "Speech Recognition"],
		],
		category: "AI & Accessibility",
		featured: true,
	},
	{
		title: "ORGVaultLegacy",
		description:
			"A secure cross-platform desktop application for encrypted document storage, sharing, and LAN synchronization, with offline access, audit logs, and ransomware protection.",
		projectUrl: "https://github.com/BIGBEASTISHANK/ORGVaultLegacy",
		tags: [
			[FaShieldAlt, "Cybersecurity"],
			[FaLock, "Encryption"],
			[FaServer, "LAN Networking"],
			[SiElectron, "Desktop Apps"],
		],
		category: "Security & Networking",
	},
	{
		title: "Passforge",
		description:
			"A secure password manager built in Rust with CLI and GUI support for storing, managing, and generating encrypted passwords.",
		projectUrl: "https://github.com/BIGBEASTISHANK/Passforge",
		tags: [
			[FaRust, "Rust"],
			[FaLock, "Cryptography"],
			[FaShieldAlt, "Security"],
		],
		category: "Cybersecurity",
	},
	{
		title: "BBI License",
		description:
			"An open-source license project offering two licensing options: a permissive FOSS license and a more restrictive license intended for open-source games.",
		projectUrl: "/license",
		tags: [
			[FaFileAlt, "Open-Source Licensing"],
			[FaCode, "FOSS"],
			[FaGamepad, "Game Development"],
		],
		category: "Open Source",
	},
	{
		title: "Dotfiles",
		description:
			"A setup and configuration toolkit for replicating a customized Arch Linux development environment, including software configurations and system preferences.",
		projectUrl: "https://github.com/BIGBEASTISHANK/dotfiles",
		tags: [
			[FaLinux, "Arch Linux"],
			[SiGnubash, "Shell Scripting"],
			[FaGitAlt, "Git"],
		],
		category: "Linux & System",
		featured: true,
	},
	{
		title: "BBeast Discord Bot",
		description:
			"A Discord bot that improves community engagement and helps moderators maintain a safe, organized server.",
		projectUrl: "https://github.com/BIGBEASTISHANK/BBeast-Discord-Bot",
		tags: [
			[FaDiscord, "Discord API"],
			[FaPython, "Python"],
			[FaRobot, "Automation"],
		],
		category: "Bots & Automation",
	},
];
