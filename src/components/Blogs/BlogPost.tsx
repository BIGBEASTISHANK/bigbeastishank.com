import UseClientIndexBlogPost from "./UseClientIndex";
import BlogPostsTable from "@/components/inner/BlogPostTable";
import { getLanguageDisplayName } from "@/utils/GetLanguageDisplayName";
import Link from "next/link";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { FaLink } from "react-icons/fa";
import { MDXRemote } from "next-mdx-remote/rsc";
import CodeTerminal from "../inner/CodeTerminal";

// Convert heading text into a URL friendly ID
const slugify = (text: string) =>
	text
		.toLowerCase()
		.trim()
		.replace(/[^\w\s-]/g, "")
		.replace(/\s+/g, "-");

export default function BlogPostComponent({
	frontmatter,
	content,
}: {
	frontmatter: { [key: string]: any };
	content: string;
}) {
	// Track the current h2 heading for hierarchical h3 IDs
	let currentH2Id = "";

	const components: any = {
		code: ({ className, children }: { className?: string; children: React.ReactNode }) => {
			const match = /language-(\w+)/.exec(className || "");

			return match ? (
				<CodeTerminal
					title={getLanguageDisplayName(match[1])}
					data={
						<SyntaxHighlighter
							style={{
								...oneDark,
								'pre[class*="language-"]': {
									background: "transparent",
									backgroundColor: "transparent",
								},
								'code[class*="language-"]': {
									background: "transparent",
									backgroundColor: "transparent",
								},
							}}
							language={match[1]}
							PreTag="div"
							className="text-sm xl:text-base"
						>
							{String(children).replace(/\n$/, "")}
						</SyntaxHighlighter>
					}
				/>
			) : (
				<CodeTerminal title="unknown.rs" data={<>{children}</>} />
			);
		},

		h1: (props: any) => {
			const id = slugify(String(props.children));

			return (
				<h1 className="text-3xl font-black mt-8 mb-4 scroll-mt-24 w-auto flex" id={id} {...props}>
					<div className="group">
						<Link href={`#${id}`} className="flex items-center gap-2 underline underline-offset-3">
							<FaLink className="group-hover:block hidden" />
							{props.children}
						</Link>
					</div>
				</h1>
			);
		},

		h2: (props: any) => {
			const id = slugify(String(props.children));

			currentH2Id = id;

			return (
				<h2 className="text-2xl font-black mt-6 mb-3 scroll-mt-24 w-auto flex" id={id} {...props}>
					<div className="group">
						<Link href={`#${id}`} className="flex items-center gap-2 underline underline-offset-3">
							<FaLink className="group-hover:block hidden" />
							{props.children}
						</Link>
					</div>
				</h2>
			);
		},

		h3: (props: any) => {
			const id = `${currentH2Id}_${slugify(String(props.children))}`;

			return (
				<h3 className="text-xl font-bold mt-4 mb-2 scroll-mt-24 w-auto flex" id={id} {...props}>
					<div className="group">
						<Link href={`#${id}`} className="flex items-center gap-2">
							<FaLink className="group-hover:block hidden" />
							{props.children}
						</Link>
					</div>
				</h3>
			);
		},

		a: (props: any) => (
			<a
				className="font-bold text-[#0088CC] hover:underline underline-offset-2 outline-none"
				target="_blank"
				{...props}
			/>
		),

		p: (props: any) => <div className="my-4 text-[#F6F9FC]/75" {...props} />,

		hr: (props: any) => <hr className="my-10 w-[90%] mx-auto text-[#1793D1]" {...props} />,

		ul: (props: any) => <ul className="list-disc pl-6 my-4 text-[#F6F9FC]/75" {...props} />,

		ol: (props: any) => <ol className="list-decimal pl-6 my-4 text-[#F6F9FC]/75" {...props} />,

		li: (props: any) => <li className="mb-1 text-[#F6F9FC]/75" {...props} />,

		blockquote: (props: any) => <blockquote className="border-l-4 border-[#1793D1] pl-4 italic my-4" {...props} />,

		BlogPostsTable,
		Link,
	};

	function TOCData() {
		const heading: { level: number; content: string }[] = [{ level: 1, content: frontmatter.title }];

		const lines = content.split("\n");
		let insideCodeBlock = false;

		for (const line of lines) {
			if (line.startsWith("```")) {
				insideCodeBlock = !insideCodeBlock;
				continue;
			}

			if (!insideCodeBlock && line.startsWith("#")) {
				const match = line.match(/^(#+)\s*(.+)$/);

				if (match) {
					const headingLevel = match[1].length;
					const headingText = match[2].trim();

					heading.push({
						level: headingLevel,
						content: headingText,
					});
				}
			}
		}

		return heading;
	}

	return (
		<UseClientIndexBlogPost
			frontmatter={frontmatter}
			MDXRemote={
				<MDXRemote
					source={content}
					components={components}
					options={{
						blockJS: false,
						blockDangerousJS: true,
					}}
				/>
			}
			TOCData={TOCData()}
		/>
	);
}
