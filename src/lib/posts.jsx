// Importaing Stuffs
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

// Initilasing Posts Directory
const postsDirectory = path.join(process.cwd(), "src/blogPost");

// Function to get post which is sorted by date
export function getSortedPostsData() {
  // Get file names under posts folder
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file and get the file name as "id"
    const id = fileName.replace(/\.md$/, "");

    // Converting markdown file to string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

// Getting all post by its name
export function getAllPostIds() {
  // Getting file nameunder posts folder
  const fileNames = fs.readdirSync(postsDirectory);

  // Checking thorugh each fill in posts folder
  return fileNames.map((fileName) => {
    // Removing ".md" from files
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

// Getting data of markdown posts
export async function getPostData(id) {
  // Converting markdown file into simple string
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
