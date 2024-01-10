import { gameProjects } from "@/lib/data";
import ProjectCards from "@/utils/ProjectCards";
import SectionBasics from "@/utils/SectionBasics";

export default function Games({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="games">
      {/* Title */}
      <SectionBasics
        title="Game Projects"
        url="/#games"
        desc="Game Gallery: Discover a Collection of All the Exciting Games
          I&apos;ve Created and Uploaded to Date"
      />

      {/* Games */}
      <ProjectCards projectData={gameProjects} />
    </div>
  );
}
