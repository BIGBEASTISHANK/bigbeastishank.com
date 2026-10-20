"use client";
import { NavLink } from "@@/data/NavLink";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavbarComponent() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleNavClick = (name: string) => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="navbar fixed top-0 left-0 z-100 w-full border-b-2 border-gray-800 bg-[#060E19]/90 px-4 py-4 backdrop-blur-xs sm:px-8 sm:py-5 md:px-12 lg:px-20 xl:px-35 2xl:px-40">
			<div className="flex w-full items-center justify-between">
				{/* Logo */}
				<img
					src="/images/BBILogo.png"
					draggable={false}
					alt="logo"
					className="my-auto h-8 select-none sm:h-10"
				/>

				{/* Desktop / Tablet Navigation */}
				<div className="my-auto hidden items-center gap-5 text-lg font-bold sm:flex">
					{NavLink.map((data, index) => (
						<Link
							key={index}
							href={data.link}
							onClick={() => handleNavClick(data.name)}
							className="bg-[#030D16] border-2 border-gray-700 px-3 py-1 rounded-2xl hover:scale-[1.05] transition-all outline-none navbar-items"
						>
							{data.name}
						</Link>
					))}
				</div>

				{/* Mobile Hamburger Button */}
				<button
					type="button"
					aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
					aria-expanded={isMenuOpen}
					onClick={() => setIsMenuOpen((prev) => !prev)}
					className="flex items-center justify-center rounded-lg p-2 text-3xl text-white transition-colors hover:bg-white/10 sm:hidden"
				>
					{isMenuOpen ? <HiX /> : <HiMenu />}
				</button>
			</div>

			{/* Mobile Navigation Menu */}
			{isMenuOpen && (
				<div className="mt-4 flex flex-wrap justify-center gap-1 border-t border-gray-700 pt-3 sm:hidden">
					{NavLink.map((data, index) => (
						<Link
							key={index}
							href={data.link}
							onClick={() => handleNavClick(data.name)}
							className="bg-[#030D16] border-2 border-gray-700 px-3 py-1 rounded-2xl hover:scale-[1.05] transition-all outline-none text-lg my-2 mx-1 navbar-items"
						>
							{data.name}
						</Link>
					))}
				</div>
			)}
		</nav>
	);
}
