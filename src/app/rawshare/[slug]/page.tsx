import RawShareContentComponent from "@/components/(11) RawShare/content";
import { Metadata } from "next";

// Meta data
export const metadata: Metadata = {
	title: "Rawshare | BIGBEASTISHANK",
	description:
		"Uploading data on pastebin is very good but the verification captcha is a headache plus pastebin is closed source. This is the opensource alternative of pastebin. -> rawshare.",
	metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
	keywords: ["Rawshare", "Pastebin", "Open Source", "JavaScript", "Web Development", "Message Sharing"],

	openGraph: {
		title: "Rawshare | BIGBEASTISHANK",
		description:
			"Uploading data on pastebin is very good but the verification captcha is a headache plus pastebin is closed source. This is the opensource alternative of pastebin.",
		images: "",
	},
};

export default async function RawShareContent({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;

	return (
		<div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
			<RawShareContentComponent slug={slug} />
		</div>
	);
}
