"use client";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { SocialLink } from "@@/data/SocialLink";
import Link from "next/link";
import { motion } from "motion/react";

export default function HeroComponent() {
	return (
		<section id="home" className="relative flex flex-col hero">
			<motion.div
				initial={{ opacity: 0, scale: 1.03 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
				className="absolute inset-0 -z-10"
			>
				<Image
					src="/images/heroBackground.png"
					alt="heroBackground"
					fill
					loading="eager"
					className="object-cover object-[right_top] select-none -z-10"
				/>
			</motion.div>

			<motion.div
				initial="hidden"
				animate="visible"
				className="2xl:px-40 xl:px-35 lg:px-30 md:px-25 sm:px-20 px-10 py-10 w-full h-full flex flex-col pt-35"
			>
				{/* Headings */}
				<div className="flex flex-col gap-3">
					<motion.p
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300"
					>
						Hi, I'm <span className="text-gradient">Ishank</span>
					</motion.p>

					<motion.h1
						initial={{ opacity: 0, x: -10 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.6, delay: 0.35 }}
						className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient"
					>
						BIGBEASTISHANK
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.5 }}
						className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-gray-300"
					>
						Building fast, reliable and scalable software
						<br />
						with rust
					</motion.p>
				</div>

				{/* Button */}
				<motion.div
					initial={{ opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.65 }}
					className="flex sm:flex-row flex-col h-fit w-fit gap-5 my-8 font-bold select-none"
				>
					{/* Projects */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: "spring", stiffness: 350, damping: 20 }}
					>
						<Link
							href=""
							className="px-4 py-2 sm:h-auto h-11 sm:rounded-2xl rounded-xl flex gap-3 justify-center items-center text-xs sm:text-sm md:text-base button-glow outline-none"
						>
							View My Projects <FaArrowRight className="font-thin" />
						</Link>
					</motion.div>

					{/* Load CV */}
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.97 }}
						transition={{ type: "spring", stiffness: 350, damping: 20 }}
					>
						<Link
							href=""
							className="px-4 py-2 sm:h-auto h-11 sm:rounded-2xl rounded-xl flex justify-center items-center text-sm sm:text-base md:text-lg lg:text-xl bg-[#030D16] border-3 border-gray-800 outline-none"
						>
							Load Resume
						</Link>
					</motion.div>
				</motion.div>

				{/* Social Link */}
				<div className="flex flex-wrap gap-5">
					{SocialLink.map((data, index) => (
						<motion.a
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
							whileHover={{ y: -4, scale: 1.12 }}
							whileTap={{ scale: 0.92 }}
							href={data.link}
							key={index}
							className="items-center text-gray-400"
						>
							<data.icon className="text-xl sm:text-2xl" />
						</motion.a>
					))}
				</div>
			</motion.div>
		</section>
	);
}
