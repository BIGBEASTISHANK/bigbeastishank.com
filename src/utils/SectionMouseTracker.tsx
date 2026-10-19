"use client";

import { useEffect } from "react";

export default function SectionMouseTracker({currentSection}: {currentSection: any}) {
	useEffect(() => {
		const handleMouseOver = (event: MouseEvent) => {
			const target = event.target as HTMLElement;

			const section = target.closest("section[id]");

			if (section) {
				console.log("Current section:", section.id);
				currentSection(section.id);
			}
		};

		document.addEventListener("mouseover", handleMouseOver);

		return () => {
			document.removeEventListener("mouseover", handleMouseOver);
		};
	}, []);

	return null;
}
