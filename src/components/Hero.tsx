import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { SocialLink } from "@@/data/SocialLink";
import Link from "next/link";

export default function HeroComponent() {
	return (
		<section id="home" className="relative flex flex-col hero">
			<Image
				src="/images/heroBackground.png"
				alt="heroBackground"
				fill
				loading="eager"
				className="object-cover object-[right_top] select-none -z-10"
			/>

			<div className="2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 w-full h-full flex flex-col pt-35">
				{/* Headings */}
				<div className="flex flex-col gap-3">
					<p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300">
						Hi, I'm <span className="text-gradient">Ishank</span>
					</p>

					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
						BIGBEASTISHANK
					</h1>

					<p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300">
						Building fast, reliable and scalable software
						<br />
						with rust
					</p>
				</div>

				{/* Button */}
				<div className="flex sm:flex-row flex-col h-fit w-fit gap-5 my-8 font-bold select-none">
					{/* Projects */}
					<Link
						href=""
						className="px-4 py-2 sm:h-auto h-11 sm:rounded-2xl rounded-xl flex gap-3 justify-center items-center text-xs sm:text-sm md:text-base button-glow"
					>
						View My Projects <FaArrowRight className="font-thin" />
					</Link>

					{/* Load CV */}
					<Link
						href=""
						className="px-4 py-2 sm:h-auto h-11 sm:rounded-2xl rounded-xl flex justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl bg-[#030D16] border-3 border-gray-800"
					>
						Load Resume
					</Link>
				</div>

				{/* Social Link */}
				<div className="flex flex-wrap gap-5">
					{SocialLink.map((data, index) => (
						<a href={data.link} key={index} className="items-center text-gray-400">
							<data.icon className="text-xl sm:text-2xl" />
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
