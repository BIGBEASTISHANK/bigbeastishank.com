"use client";
import { NavLink } from "@@/data/NavLink";
import Link from "next/link";
import { useState } from "react";

export default function NavbarComponent() {
	const [activeSection, setActiveSection] = useState<string>("Home");

	return (
		<nav className="navbar fixed top-0 left-0 flex w-full px-40 py-5 border-2 border-gray-800 bg-[#060E19]/40 z-100 backdrop-blur-xs">
			{/* Logo */}
			<img src="/images/BBILogo.png" draggable={false} alt="logo" className="h-10 select-none my-auto" />

			{/* Spacer */}
			<div className="w-full" />

			<div className="flex gap-5 text-lg my-auto font-bold">
				{NavLink.map((data, index) => (
					<Link
						key={index}
						href={data.link}
						className={`${activeSection === data.name ? "active-text" : "inactive-text"}`}
					>
						{data.name}
					</Link>
				))}
			</div>
		</nav>
	);
}
