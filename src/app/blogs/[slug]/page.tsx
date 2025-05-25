import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { BlogPostComponent } from "@/components/(7) Blogs/posts";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter } = matter(fileContents);

    return {
      title: `${frontmatter.title} | BIGBEASTISHANK`,
      description: frontmatter.description,
      metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
      keywords: [...frontmatter.tags, "blog", "BIGBEASTISHANK"],
      openGraph: {
        title: `${frontmatter.title} | BIGBEASTISHANK`,
        description: frontmatter.description,
        type: "article",
        publishedTime: frontmatter.date,
        tags: frontmatter.tags,
      },
    };
  } catch (error) {
    return {
      title: "404 Not Found | BIGBEASTISHANK",
      description:
        "Lost in the digital maze! It appears you've stumbled upon a 404 Not Found - the elusive page seems to have slipped through the cracks. Fear not, intrepid explorer! While this page may be off the grid, our virtual compass is recalibrating to guide you back. Feel free to hit the back button, check the URL for typos, or visit our homepage to embark on a new adventure. We apologize for the inconvenience and appreciate your patience as we tidy up the virtual trail. Safe travels!",
      openGraph: {
        title: "404 Not Found | BIGBEASTISHANK",
        description:
          "Lost in the digital maze! It appears you've stumbled upon a 404 Not Found - the elusive page seems to have slipped through the cracks. Fear not, intrepid explorer! While this page may be off the grid, our virtual compass is recalibrating to guide you back. Feel free to hit the back button, check the URL for typos, or visit our homepage to embark on a new adventure. We apologize for the inconvenience and appreciate your patience as we tidy up the virtual trail. Safe travels!",
        images: "/img/main/pfp.png",
      },
    };
  }
}

// Blog post
export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data: frontmatter, content } = matter(fileContents);

    return BlogPostComponent({ frontmatter, content });
  } catch (error) {
    console.log(error);
    notFound();
  }
}
