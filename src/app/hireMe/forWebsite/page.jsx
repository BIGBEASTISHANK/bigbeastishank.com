import { hireMeForWebsite } from "@/lib/data";
import ServiceCards from "@/utils/ServiceCards";
import SectionBasics from "@/utils/SectionBasics";

export default function ForWebsite() {
  // Main content
  return (
    <div className="projectW:px-12 sm:px-[6rem] px-12">
      {/* Title */}
      <SectionBasics
        title="Website For You"
        desc="I will create a website for you; you can check out the plans and their features below."
      />

      {/* Card */}
      <div className="my-auto projectW:flex projectW:flex-wrap gap-[2rem] justify-center items-center">
        {hireMeForWebsite.map((data, index) => (
          // Card
          <ServiceCards key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}
