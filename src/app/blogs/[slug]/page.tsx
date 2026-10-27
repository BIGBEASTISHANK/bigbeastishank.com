import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import BlogPostComponent from "@/components/Blogs/BlogPost";

export async function generateStaticParams() {
  const postsDirectory: string = path.join(process.cwd(), "posts");
  const filenames: string[] = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

// Blog post
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } : {slug: string} = await params;
  const postsDirectory: string = path.join(process.cwd(), "posts");
  const filePath: string = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents: string = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content }: { data: { [key: string]: any }, content: string } = matter(fileContents);

    return BlogPostComponent({ frontmatter, content });
  } catch (error) {
    console.log(error);
    notFound();
  }
}
