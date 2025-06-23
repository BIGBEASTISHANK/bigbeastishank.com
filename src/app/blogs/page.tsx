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
    "Welcome to my technical blog where I share insights from my development journey. You'll find articles spanning web development, mobile app creation with Flutter, machine learning experiments, and the occasional deep dive into game development. Each post reflects real-world challenges I've tackled and the solutions I've discovered along the way. Looking for content on a particular technology or facing a specific development challenge? Drop me a line using the contact information on the home page - I'm always open to exploring new topics that could help fellow developers.",
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
      "Welcome to my technical blog where I share insights from my development journey. You'll find articles spanning web development, mobile app creation with Flutter, machine learning experiments, and the occasional deep dive into game development. Each post reflects real-world challenges I've tackled and the solutions I've discovered along the way. Looking for content on a particular technology or facing a specific development challenge? Drop me a line using the contact information on the home page - I'm always open to exploring new topics that could help fellow developers.",
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
