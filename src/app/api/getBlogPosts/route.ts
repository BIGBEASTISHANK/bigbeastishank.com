import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/app/blogs/page";
import { NextResponse } from "next/server";

export async function GET() {
	const postsDirectory: string = path.join(process.cwd(), "posts");
	const filenames: string[] = fs.readdirSync(postsDirectory);

	const posts: Post[] = filenames.map((filename) => {
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

	posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

	return NextResponse.json({ posts }, { status: 200 });
}
