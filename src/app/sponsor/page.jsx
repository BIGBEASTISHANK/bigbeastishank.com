import SponsorComponent from "@/components/Sponsor";

// Meta data
export const metadata = {
  title: "Sponsor | BIGBEASTISHANK",
  description: "You like my project and are happy that it is open-source? Consider sponsoring me so I can be motivated to work on the projects to my full potential.",
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
  images: "/img/metadata/sponsor.png",
  locale: "en_US",

  openGraph: {
    title: "Sponsor | BIGBEASTISHANK",
    description: "You like my project and are happy that it is open-source? Consider sponsoring me so I can be motivated to work on the projects to my full potential.",
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
    images: "/img/metadata/sponsor.png",
    locale: "en_US",
  },
};
/////////////////////////////

export default function Sponsor() {
  return (
    <>
      <SponsorComponent />
    </>
  );
}
