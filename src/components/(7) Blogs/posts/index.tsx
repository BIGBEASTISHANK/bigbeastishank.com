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
  // More robust heading extraction
  const extractHeadings = (content: string) => {
    const headings: Array<{ id: string; text: string; level: number }> = [];
    
    // Split content by lines and process each line
    const lines = content.split('\n');
    
    for (const line of lines) {
      const trimmedLine = line.trim();
      
      // Check for markdown headings (# ## ###)
      const headingMatch = trimmedLine.match(/^(#{1,3})\s+(.+)$/);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const text = headingMatch[2].trim();
        const id = text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
        headings.push({ id, text, level });
      }
    }
    
    return headings;
  };

  const headings = extractHeadings(content);

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
          <div className="flex my-2 mx-4 justify-between items-center">
            <h1
              className={`select-none ${
                className === "language-output" ? "text-[#00FF00]" : null
              } rounded-full font-bold`}
            >
              {getLanguageDisplayName(match[1])}
            </h1>
            {className === "language-output" ||
            className === "language-text" ? null : (
              <ClickToCopyCode children={children} />
            )}
          </div>
          <div className="h-[.125rem] mx-auto bg-[#515860] z-10 w-full" />
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
    h1: (props: any) => {
      const id = String(props.children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h1
          className="text-3xl font-bold mt-8 mb-4 scroll-mt-24 w-auto flex"
          id={id}
          {...props}
        >
          <div className="group">
            <Link href={`#${id}`} className="flex items-center gap-2">
              <FaLink className="group-hover:block hidden" />
              {props.children}
            </Link>
          </div>
        </h1>
      );
    },
    h2: (props: any) => {
      const id = String(props.children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h2
          className="text-2xl font-bold mt-6 mb-3 scroll-mt-24 w-auto flex"
          id={id}
          {...props}
        >
          <div className="group">
            <Link href={`#${id}`} className="flex items-center gap-2">
              <FaLink className="group-hover:block hidden" />
              {props.children}
            </Link>
          </div>
        </h2>
      );
    },
    h3: (props: any) => {
      const id = String(props.children).toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
      return (
        <h3
          className="text-xl font-bold mt-4 mb-2 scroll-mt-24 w-auto flex"
          id={id}
          {...props}
        >
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
      headings={headings}
      MDXRemote={<MDXRemote source={content} components={components} />}
    />
  );
}
