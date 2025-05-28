import { Metadata } from "next";
import SponsorComponent from "@/components/(4) Sponsor";

// Meta data
export const metadata: Metadata = {
  title: "Sponsor | BIGBEASTISHANK",
  description: "You like my project and are happy that it is open-source? Consider sponsoring me so I can be motivated to work on the projects to my full potential.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL }`),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Game development",
    "C++",
    "Unreal Engine",
    "Unity",
  ],
  openGraph: {
    title: "Sponsor | BIGBEASTISHANK",
    description: "You like my project and are happy that it is open-source? Consider sponsoring me so I can be motivated to work on the projects to my full potential.",
    images: "/img/metadata/sponsor.png",
  },
};

export default function Sponsor() {
  return (
    <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
      <SponsorComponent />
    </div>
  );
}