import { Metadata } from "next";
import AllLinksComponent from "@/components/(10) AllLinks";

// Meta data
export const metadata: Metadata = {
    title: "All Link | BIGBEASTISHANK",
    description: "Comprehensive Link management tool with multiple view modes and organization features.",
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    keywords: [
        "Next.js",
        "React",
        "JavaScript",
        "Web Development",
        "Link Management",
        "Developer Tools",
        "Task Organization",
        "Data Management",
    ],
    openGraph: {
        title: "All Link | BIGBEASTISHANK",
        description: "Comprehensive Link management tool with multiple view modes and organization features.",
        images: "/img/metadata/allLinks.png",
    },
};

export default function AllLinks() {
    return (
        <div className="md:max-w-[45rem] max-w-[35rem] mx-auto px-5">
            <AllLinksComponent />
        </div>
    );
}
