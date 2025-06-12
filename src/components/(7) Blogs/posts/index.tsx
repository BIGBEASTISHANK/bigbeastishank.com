import UseClientIndex from "@/components/(7) Blogs/posts/UseClientIndex";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostsTable from "@/components/(7) Blogs/posts/components/Table";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getLanguageDisplayName } from "@@/data/BlogsCoreData";
import { ClickToCopyCode } from "@/components/(7) Blogs/posts/UseClientIndex";
import Link from "next/link";
import { FaLink } from "react-icons/fa";

export function BlogPostComponent({
  frontmatter,
  content,
}: {
  frontmatter: { [key: string]: any };
  content: string;
}) {
  // Define custom components for MDX
  const components: any = {
    code: ({
      className,
      children,
    }: {
      className?: string;
      children: React.ReactNode;
    }) => {
      const match = /language-(\w+)/.exec(className || "");
      return match ? (
        <div className="bg-[#282C34] flex flex-col justify-center px-3 rounded-xl my-5">
          {/* Language and click to copy */}
          <div className="flex my-2 mx-4 justify-between items-center">
            {/* Language name */}
            <h1
              className={`select-none ${
                className === "language-output" ? "text-[#00FF00]" : null
              } rounded-full font-bold`}
            >
              {getLanguageDisplayName(match[1])}
            </h1>

            {/* Click to copy */}
            {className === "language-output" ||
            className === "language-text" ? null : (
              <ClickToCopyCode children={children} />
            )}
          </div>

          {/* Divider */}
          <div className="h-[.125rem] mx-auto bg-[#515860] z-10 w-full" />

          {/* Code */}
          <SyntaxHighlighter
            style={oneDark}
            language={match[1]}
            PreTag="div"
            className="rounded-md mt-2"
          >
            {String(children).replace(/\n$/, "")}
          </SyntaxHighlighter>
        </div>
      ) : (
        <code className="bg-[#1A1E23] px-[0.3rem] py-0.5 rounded">
          {children}
        </code>
      );
    },
    h1: (props: any) => (
      <h1
        className="text-3xl font-black mt-8 mb-4 scroll-mt-24 w-auto flex"
        id={props.children}
        {...props}
      >
        <div className="group">
          <Link
            href={`#${props.children}`}
            className="flex items-center gap-2 underline underline-offset-3"
          >
            <FaLink className="group-hover:block hidden" />
            {props.children}
          </Link>
        </div>
      </h1>
    ),
    h2: (props: any) => (
      <h2
        className="text-2xl font-black mt-6 mb-3 scroll-mt-24 w-auto flex"
        id={props.children}
        {...props}
      >
        <div className="group">
          <Link
            href={`#${props.children}`}
            className="flex items-center gap-2 underline underline-offset-3"
          >
            <FaLink className="group-hover:block hidden" />
            {props.children}
          </Link>
        </div>
      </h2>
    ),
    h3: (props: any) => (
      <h3
        className="text-xl font-bold mt-4 mb-2 scroll-mt-24 w-auto flex"
        id={props.children}
        {...props}
      >
        <div className="group">
          <Link href={`#${props.children}`} className="flex items-center gap-2">
            <FaLink className="group-hover:block hidden" />
            {props.children}
          </Link>
        </div>
      </h3>
    ),

    a: (props: any) => (
      <a
        className="font-bold text-[#0088CC] hover:underline underline-offset-2 outline-none"
        target="_blank"
        {...props}
      />
    ),
    p: (props: any) => <p className="my-4 text-[#F6F9FC]/75" {...props} />,
    hr: (props: any) => (
      <hr className="my-10 w-[90%] mx-auto text-[#1793D1]" {...props} />
    ),
    ul: (props: any) => (
      <ul className="list-disc pl-6 my-4 text-[#F6F9FC]/75" {...props} />
    ),
    ol: (props: any) => (
      <ol className="list-decimal pl-6 my-4 text-[#F6F9FC]/75" {...props} />
    ),
    li: (props: any) => <li className="mb-1 text-[#F6F9FC]/75" {...props} />,
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-[#1793D1] pl-4 italic my-4"
        {...props}
      />
    ),
    PostsTable,
    Link,
  };

  function TOCData() {
    // Variable
    const heading: [{ level: number; content: string }] = [
      { level: 1, content: frontmatter.title },
    ];

    const lines = content.split("\n");

    // Getting data in an array
    for (const line of lines) {
      if (line.startsWith("#")) {
        const match = line.match(/^(#+)\s*(.+)$/);
        if (match) {
          const headingLevel = match[1].length;
          const headingText = match[2].trim();
          heading.push({ level: headingLevel, content: headingText });
        }
      }
    }

    return heading;
  }
  return (
    <UseClientIndex
      frontmatter={frontmatter}
      MDXRemote={<MDXRemote source={content} components={components} />}
      TOCData={TOCData()}
    />
  );
}
