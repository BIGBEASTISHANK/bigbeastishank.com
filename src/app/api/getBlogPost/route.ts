import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/app/blogs/page";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    // Get all blog posts with their frontmatter
    const postsDirectory: string = path.join(process.cwd(), "posts");
    const filenames: string[] = fs.readdirSync(postsDirectory);

    const posts: Post[] = filenames.map((filename) => {
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

    return NextResponse.json({ posts: posts }, { status: 200 });
}
