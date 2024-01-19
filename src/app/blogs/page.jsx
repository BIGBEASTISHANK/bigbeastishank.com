import BlogsHome from "@/components/BlogsHome";

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

const blogData = [
  {
    title: "Mota Mota",
    author: "Piyush",
    dateOfBlog: "18/02/2023",
  },
  {
    title: "Toma Toma",
    author: "bigbeastishank",
    dateOfBlog: "19/01/2024",
  },
];

export default function Blog() {
  return (
    <>
      <BlogsHome blogData={blogData} />
    </>
  );
}
