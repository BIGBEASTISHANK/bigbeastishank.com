import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ["remarkGfm", "remarkFrontmatter"],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};

export default withMDX(nextConfig);
