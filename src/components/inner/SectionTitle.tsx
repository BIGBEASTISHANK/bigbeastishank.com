"use client";
import { motion } from "motion/react";

export default function SectionTitleComponent({ title, animDelay }: { title: string; animDelay?: number }) {
	return (
		<div className="flex items-center gap-5 mb-3 w-fit">
			<motion.p
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.9, delay: animDelay }}
				className="capitalize text-sm sm:text-base md:text-lg text-[#019BFB] select-none"
			>
				{title}
			</motion.p>
			<motion.div
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, delay: animDelay }}
				className="w-10 sm:w-14 md:w-20 h-0.5 bg-[#019BFB] rounded-full"
			/>
		</div>
	);
}
