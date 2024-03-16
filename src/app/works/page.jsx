import WorksComponent from "@/components/Works";

// Meta data
export const metadata = {
  title: "Works | BIGBEASTISHANK",
  description:
    "Explore a showcase of my latest creative endeavors on this page, featuring a diverse array of projects I've passionately crafted. From innovative designs to impactful solutions, discover the essence of my work and the dedication poured into each project. Immerse yourself in a visual journey that reflects my skills, expertise, and commitment to excellence. Welcome to a space where ideas come to life and projects speak volumes.",
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
  images: "/img/metadata/work.png",
  locale: "en_US",

  openGraph: {
    title: "Works | BIGBEASTISHANK",
    description:
      "Explore a showcase of my latest creative endeavors on this page, featuring a diverse array of projects I've passionately crafted. From innovative designs to impactful solutions, discover the essence of my work and the dedication poured into each project. Immerse yourself in a visual journey that reflects my skills, expertise, and commitment to excellence. Welcome to a space where ideas come to life and projects speak volumes.",
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
    images: "/img/metadata/work.png",
    locale: "en_US",
  },
};
/////////////////////////////

export default function Works() {
  return (
    <>
      <WorksComponent />
    </>
  );
}
