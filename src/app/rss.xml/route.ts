import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import RSS from 'rss';

interface Post {
  slug: string;
  title: string;
  description: string;
  date: string;
  minuteRead: number;
  tags: string[];
  content: string;
}

export async function GET() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames
    .map((filename) => {
      const slug = filename.replace('.mdx', '');
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContents);

      // Create rich preview: description + first 150 words of content
      const excerpt = content
        .split(/\s+/)
        .slice(0, 500)
        .join(' ')
        .replace(/[#*`>]|<!--[\s\S]*?-->/g, '')
        .substring(0, 2000) + '...';

      const fullPreview = `${frontmatter.description}\n\n${excerpt}`;

      return {
        slug,
        title: frontmatter.title,
        description: fullPreview,
        content: excerpt,
        date: frontmatter.date,
        minuteRead: frontmatter.minuteRead || 0,
        tags: frontmatter.tags || [],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const siteUrl = process.env.VERCEL_URL 
    ? `https://bigbeastishank`
    : 'http://localhost:3000';

  const feed = new RSS({
    title: 'BIGBEASTISHANK Blogs',
    description: 'Technical blog on web dev, Flutter, ML, games',
    site_url: siteUrl,
    feed_url: `${siteUrl}/rss.xml`,
    language: 'en-US',
    pubDate: new Date().toUTCString(),
  });

  posts.slice(0, 15).forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `${siteUrl}/blogs/${post.slug}`,
      date: post.date,
      categories: post.tags,
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
