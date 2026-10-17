import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { SocialLink } from "@@/data/SocialLink";
import Link from "next/link";

export default function HeroComponent() {
	return (
		<div id="home" className="relative flex flex-col hero">
			<Image
				src="/images/heroBackground.png"
				alt="heroBackground"
				fill
				loading="eager"
				className="object-cover object-top select-none -z-10"
			/>

			<div className="px-70 py-10 w-full h-full flex flex-col pt-48">
				{/* Headings */}
				<div className="flex flex-col gap-5">
					<p className="text-3xl font-medium text-gray-300">
						Hi, I'm <span className="text-gradient">Ishank</span>
					</p>
					<h1 className="text-8xl font-bold text-gradient">BIGBEASTISHANK</h1>
					<p className="text-4xl font-medium text-gray-300">
						Building fast, reliable and scalable software
						<br />
						with rust
					</p>
				</div>

				{/* Buitton */}
				<div className="flex gap-5 my-10 font-bold select-none">
					{/* Projects */}
					<Link
						href=""
						className="px-8 py-4 rounded-2xl flex justify-center items-center text-xl button-glow"
					>
						View My Projects <FaArrowRight className="font-thin" />
					</Link>

					{/* Load CV */}
					<Link
						href=""
						className="px-8 py-4 rounded-2xl flex justify-center items-center text-xl bg-[#030D16] border-3 border-gray-800"
					>
						Load Resume
					</Link>
				</div>

				{/* Social Link */}
				<div className="flex gap-8">
					{SocialLink.map((data, index) => (
						<a href={data.link} key={index} className="items-center text-gray-400">
							<data.icon className="text-3xl" />
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
