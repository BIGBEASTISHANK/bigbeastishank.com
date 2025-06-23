import { Metadata } from "next";
import WorksComponent from "@/components/(3) Works";

// Meta data
export const metadata: Metadata = {
  title: "Works | BIGBEASTISHANK",
  description:
    "Below you'll find a selection of my key projects showcasing my work in web development, game development, and other areas. For my complete portfolio and source code, check out my GitHub.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
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
    title: "Works | BIGBEASTISHANK",
    description:
      "Below you'll find a selection of my key projects showcasing my work in web development, game development, and other areas. For my complete portfolio and source code, check out my GitHub.",
    images: "/img/metadata/work.png",
  },
};
/////////////////////////////

export default function Works() {
  return (
    <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
      <WorksComponent />
    </div>
  );
}