import Link from "next/link";
import { FaArrowLeft, FaTag } from "react-icons/fa";
import { ShortDivider } from "@/utility/Dividers";
import { MDXRemote } from "next-mdx-remote/rsc";
import GoToButton from "@/utility/GoToButton";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
        <SyntaxHighlighter
          style={oneDark}
          language={match[1]}
          PreTag="div"
          className="rounded-md my-4 copy-to-clipboard-button"
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
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
  };

  return (
    <div id="blogPost" className="px-5 scroll-mt-24 max-w-[70rem] mx-auto">
      {/* GO Back arrow */}
      <Link
        href="/blogs"
        className="flex text-[#1793D1] hover:text-[#FF3333] transition-colors mb-2"
      >
        <FaArrowLeft />
      </Link>

      {/* Title */}
      <h1 className="flex items-center font-bold md:text-3xl text-2xl mb-5">
        ~/ {frontmatter.title}
      </h1>

      {/* Blog Description */}
      <p className="md:text-base text-sm mb-3 text-[#AFB3C1]">
        {frontmatter.description}
      </p>

      {/* Blog Metadata */}
      <div className="flex gap-3 text-xs text-[#AFB3C1] mt-4 mb-3">
        {/* Date */}
        <p>
          {new Date(frontmatter.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Seprator */}
        <p> | </p>

        {/* Minute read */}
        <p>{frontmatter.minuteRead} min read</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 items-center">
        {frontmatter.tags.map((tag, index) => (
          <div
            key={index}
            className="flex justify-center items-center border border-[#1793D1]/70 rounded-full px-4 py-1 select-none font-normal text-sm my-auto"
          >
            <FaTag className="my-auto mr-2" />
            {tag}
          </div>
        ))}
      </div>

      {/* Short Divider */}
      <ShortDivider />

      {/* Blog content */}
      <div className="prose prose-invert max-w-none">
        <MDXRemote source={content} components={components} />
      </div>

      {/* Short Divider */}
      <ShortDivider />

      {/* Go Back button */}
      <GoToButton title={"Back to Blogs"} link="/blogs" />
    </div>
  );
}
