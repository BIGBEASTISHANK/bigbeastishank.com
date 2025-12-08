import { Metadata } from "next";
import JsonViewer from "@/components/(9) JsonViewer";

// Meta data
export const metadata: Metadata = {
    title: "JSON Viewer | BIGBEASTISHANK",
    description: "Interactive JSON viewer and API testing tool with multiple view modes.",
    metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
    keywords: [
        "Next.js",
        "React",
        "JavaScript",
        "Web Development",
        "JSON Viewer",
        "API Testing",
        "Developer Tools",
        "JSON Parser",
        "REST API",
    ],
    openGraph: {
        title: "JSON Viewer | BIGBEASTISHANK",
        description: "Interactive JSON viewer and API testing tool with multiple view modes.",
        images: "/img/metadata/jsonViewer.png",
    },
};

export default function JsonViewerPage() {
    return (
        <div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
            <JsonViewer />
        </div>
    );
}
