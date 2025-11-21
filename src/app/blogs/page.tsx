import { Metadata } from "next";
import BlogComponent from "@/components/(7) Blogs";

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

// Post interface
export interface Post {
    slug: string;
    title: string;
    description: string;
    date: string;
    minuteRead: number;
    tags: string[];
}

export default function Blogs() {
    return (
        <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
            <BlogComponent />
        </div>
    );
}
