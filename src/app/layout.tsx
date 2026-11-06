import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/tailwindimport.css";
import "@/styles/globals.scss";
import NavbarComponent from "@/components/Navbar";
import FooterComponent from "@/components/Footer";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Home | BIGBEASTISHANK",
	description:
		"An open-source game and web developer who also occasionally creates exclusive games. I used to produce games on Unity, but I'm also learning about the Unreal Engine. I create my website using NextJS. Currently diving into AI/ML fundamentals and practicing data structures and algorithms with Rust. I not only work on creating websites & games, but I also explore the complexity of networking, servers & pentesting. I find joy in securing computer systems & networks. I use Arch BTW!",
	metadataBase: new URL(`https://${process.env.VERCEL_URL || "https://bigbeastishank.com"}`),
	keywords: [
		"Rust",
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
		title: "Home | BIGBEASTISHANK",
		description:
			"An open-source game and web developer who also occasionally creates exclusive games. I used to produce games on Unity, but I'm also learning about the Unreal Engine. I create my website using NextJS. Currently diving into AI/ML fundamentals and practicing data structures and algorithms with Rust. I not only work on creating websites & games, but I also explore the complexity of networking, servers & pentesting. I find joy in securing computer systems & networks. I use Arch BTW!",
	},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" data-scroll-behavior="smooth" className={`${inter.className} h-full antialiased scroll-smooth`}>
			<body className="min-h-full flex flex-col">
				<NavbarComponent />
				{children}
				<FooterComponent />
			</body>
		</html>
	);
}
