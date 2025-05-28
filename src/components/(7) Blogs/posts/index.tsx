import UseClientIndex from "@/components/(7) Blogs/posts/UseClientIndex";
import { MDXRemote } from "next-mdx-remote/rsc";
import PostsTable from "@/components/(7) Blogs/posts/components/Table";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { getLanguageDisplayName } from "@@/data/BlogsCoreData";
import { ClickToCopyCode } from "@/components/(7) Blogs/posts/UseClientIndex";
import Link from "next/link";

export function BlogPostComponent({
  frontmatter,
  content,
}: {
  frontmatter: { [key: string]: any };
  content: string;
}) {
  // Define custom components for MDX
  const components = {
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
            {className === "language-output" ? null : (
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
      <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
    ),
    h2: (props: any) => (
      <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
    ),
    h3: (props: any) => (
      <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
    ),
    a: (props: any) => (
      <a
        className="font-bold text-[#0088CC] hover:underline underline-offset-2 outline-none"
        target="_blank"
        {...props}
      />
    ),
    p: (props: any) => <p className="my-4" {...props} />,
    hr: (props: any) => (
      <hr className="my-10 w-[90%] mx-auto text-[#1793D1]" {...props} />
    ),
    ul: (props: any) => <ul className="list-disc pl-6 my-4" {...props} />,
    ol: (props: any) => <ol className="list-decimal pl-6 my-4" {...props} />,
    li: (props: any) => <li className="mb-1" {...props} />,
    blockquote: (props: any) => (
      <blockquote
        className="border-l-4 border-[#1793D1] pl-4 italic my-4"
        {...props}
      />
    ),
    PostsTable,
    Link,
  };

  return (
    <UseClientIndex
      frontmatter={frontmatter}
      MDXRemote={<MDXRemote source={content} components={components} />}
    />
  );
}
