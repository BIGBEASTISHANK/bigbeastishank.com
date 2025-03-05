import { JSX } from "react";
import { Metadata } from "next";
import WebHireComponent from "@/components/(6) Hire/Web";

// Meta data
export const metadata: Metadata = {
  title: "Hire | BIGBEASTISHANK",
  description:
    "Explore affordable and high-quality web development services tailored to meet your needs. Our team specializes in building innovative, responsive, and scalable websites using the latest technologies.",
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
      "Explore affordable and high-quality web development services tailored to meet your needs. Our team specializes in building innovative, responsive, and scalable websites using the latest technologies.",
    images: "/img/metadata/webHire.png",
  },
};
/////////////////////////////

export default function WebHire(): JSX.Element {
  return (
    <>
      <WebHireComponent />
    </>
  );
}
