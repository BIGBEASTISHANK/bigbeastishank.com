import AboutComponent from "@/components/About";
import HeroComponent from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Home() {
	return (
		<div>
			<HeroComponent />
			<AboutComponent />
			<FeaturedProjects />
		</div>
	);
}
