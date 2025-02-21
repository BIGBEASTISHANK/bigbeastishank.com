import { JSX } from "react";
import { Metadata } from "next";
import HireComponent from "@/components/(6) Hire/Hire";

// Meta data
export const metadata: Metadata = {
  title: "Hire | BIGBEASTISHANK",
  description:
    "Find top freelance talent for your projects on our platform. Hire skilled professionals across various industries for flexible, high-quality work.",
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
    title: "Hire | BIGBEASTISHANK",
    description:
      "Find top freelance talent for your projects on our platform. Hire skilled professionals across various industries for flexible, high-quality work.",
    images: "/img/metadata/work.png",
  },
};
/////////////////////////////

export default function Hire(): JSX.Element {
  return (
    <>
      <HireComponent />
    </>
  );
}