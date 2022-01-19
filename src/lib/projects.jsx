// Importaing Stuffs
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Initilasing Projects Directory
const projectsDirectory = path.join(process.cwd(), "src/projectPost");

// Function to get post which is sorted by date
export function getSortedProjectsData() {
  // Get file names under projects folder
  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map((fileName) => {
    // Remove ".md" from file and get the file name as "id"
    const id = fileName.replace(/\.md$/, "");

    // Converting markdown file to string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });

  // Sort projects by date
  return allProjectsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
