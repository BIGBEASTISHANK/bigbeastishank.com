import { otherProjects } from "@/lib/data";
import ProjectCards from "@/utils/ProjectCards";
import SectionBasics from "@/utils/SectionBasics";

export default function Projects({ customTWClass = "" }) {
  return (
    <div className={`flex flex-col ${customTWClass}`} id="projects">
      {/* Title */}
      <SectionBasics
        title="Other Projects"
        url="/#projects"
        desc="Browse Through My Web Design Portfolio: A Compilation of Websites
          Crafted Throughout My Creative Journey"
      />

      {/* Projects */}
      <ProjectCards projectData={otherProjects} />
    </div>
  );
}
