import { Metadata } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import BlogComponent from "@/components/(7) Blogs";

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
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      minuteRead: data.minuteRead,
      tags: data.tags,
    };
  });

  return <BlogComponent posts={posts} />;
}
