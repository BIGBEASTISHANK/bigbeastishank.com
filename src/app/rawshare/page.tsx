import { Metadata } from "next";
import RawShareComponent from "@/components/(11) RawShare";

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
			"Uploading data on pastebin is very good but the verification captcha is a headache plus pastebin is closed source. This is the opensource alternative of pastebin -> rawshare.",
		images: "",
	},
};

export default function RawShare() {
	return (
		<div className="md:max-w-[45rem] max-w-[35rem] mx-auto">
			<RawShareComponent />
		</div>
	);
}
