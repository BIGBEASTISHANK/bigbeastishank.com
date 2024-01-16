import HeadingBasic from "@/utility/HeadingBasic";

// Meta data
export const metadata = {
  title: "Blogs | BIGBEASTISHANK",
  description:
    "Dive into the heart of my creative universe on this blog page, where every post unveils a unique perspective on the projects I've undertaken. Join me in exploring insightful reflections, behind-the-scenes stories, and in-depth analyses of the creative process. From inspiration to execution, this blog is your window into the world of my projects, providing a narrative that goes beyond the finished product. Embark on a journey of discovery, innovation, and the passion that fuels my projects.",
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
  images: "/img/pfp.png",
  locale: "en_US",

  openGraph: {
    title: "Blogs | BIGBEASTISHANK",
    description:
      "Dive into the heart of my creative universe on this blog page, where every post unveils a unique perspective on the projects I've undertaken. Join me in exploring insightful reflections, behind-the-scenes stories, and in-depth analyses of the creative process. From inspiration to execution, this blog is your window into the world of my projects, providing a narrative that goes beyond the finished product. Embark on a journey of discovery, innovation, and the passion that fuels my projects.",
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
    images: "/img/pfp.png",
    locale: "en_US",
  },
};

export default function Blog() {
  return (
    <div className="px-5 flex flex-col min-h-[60vh]">
      {/* Heading */}
      <HeadingBasic
        heading="Blogs"
        url="/blogs"
        description={
          <>
            ✨ Dive into the realm of insights and knowledge on my blogs.
            Whether you&apos;re into tech, development, or just the curious mind,
            there&apos;s something for everyone.
          </>
        }
      />

      {/* Short Divider */}
      <div className="w-[50%] h-[.125rem] my-7 bg-[#4e4e4e] z-10" />

      {/* Coming soon */}
      <h1 className="font-bold md:text-4xl text-3xl m-auto">
        !!!!Coming Soon!!!!
      </h1>
    </div>
  );
}
