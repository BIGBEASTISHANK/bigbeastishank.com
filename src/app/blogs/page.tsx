import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogComponent from "@/components/(7) Blogs";
import { number } from "framer-motion";

// Meta data
export const metadata: Metadata = {
  title: "Blogs | BIGBEASTISHANK",
  description:
    "Explore a collection of my blogs covering a variety of topics, including web development, game development, and much more. Dive in to discover practical tips, insightful experiences, and helpful tricks that I've gathered along my journey.",
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
    title: "Blogs | BIGBEASTISHANK",
    description:
      "Explore a collection of my blogs covering a variety of topics, including web development, game development, and much more. Dive in to discover practical tips, insightful experiences, and helpful tricks that I've gathered along my journey.",
    images: "/img/metadata/blogs.png",
  },
};

export default function Blogs() {
  // Get all blog posts with their frontmatter
  const postsDirectory: string = path.join(process.cwd(), "posts");
  const filenames: string[] = fs.readdirSync(postsDirectory);

  const posts: {
    slug: string;
    title: string;
    description: string;
    date: string;
    minuteRead: number;
    tags: string[];
  }[] = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data }: { data: { [key: string]: any } } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      minuteRead: data.minuteRead,
      tags: data.tags,
    };
  });

  return (
    <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
      <BlogComponent posts={posts} />
    </div>
  );
}
