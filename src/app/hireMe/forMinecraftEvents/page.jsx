import ServiceCards from "@/utils/ServiceCards";
import SectionBasics from "@/utils/SectionBasics";
import { hireMeForMinecraftEvents } from "@/lib/data";

export default function ForMinecraftEvents() {
  return (
    <div className="projectW:px-12 sm:px-[6rem] px-12">
      {/* Title */}
      <SectionBasics
        title="MC Events For You"
        desc="Crafting Unforgettable Experiences: Elevate Your Minecraft Events with My Expertise - Hire Me for Seamless Execution and Innovative Designs."
      />

      {/* Card */}
      <div className="my-auto projectW:flex projectW:flex-wrap gap-[2rem] justify-center items-center">
        {hireMeForMinecraftEvents.map((data, index) => (
          // Card
          <ServiceCards key={index} data={data} index={index} />
        ))}
      </div>
    </div>
  );
}
