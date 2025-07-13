// Icons
import {
  SiC,
  SiGit,
  SiSass,
  SiRust,
  SiCss3,
  SiHtml5,
  SiMysql,
  SiLinux,
  SiReact,
  SiUnity,
  SiNeovim,
  SiGithub,
  SiPython,
  SiAnytype,
  SiMongodb,
  SiGnubash,
  SiMarkdown,
  SiVscodium,
  SiCplusplus,
  SiNextdotjs,
  SiExcalidraw,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiUnrealengine,
} from "react-icons/si";
import { IconType } from "react-icons";
import { TbBrandFramerMotion, TbBrandCSharp } from "react-icons/tb";

export interface TechstackData {
  name: string;
  icon: IconType;
  reason: string;
}

// Language
export const LanguageData: TechstackData[] = [
  {
    name: "C++",
    icon: SiCplusplus,
    reason:
      "I primarily use C++ for game development, particularly when working with Unreal Engine, where its performance and control are crucial.",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    reason:
      "C# is my main language for developing games in Unity, thanks to its simplicity and strong integration with the engine.",
  },
  {
    name: "C",
    icon: SiC,
    reason:
      "I studied C during my academic coursework, which helped me build a strong foundation in low-level programming and memory management.",
  },
  {
    name: "Rust",
    icon: SiRust,
    reason:
      "I use Rust for system-level programming and data structure implementations, benefiting from its safety and concurrency features.",
  },
  {
    name: "Python",
    icon: SiPython,
    reason:
      "Python is my go-to language for backend development, data analysis, and machine learning tasks due to its versatility and rich ecosystem.",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    reason:
      "I use HTML as the structural foundation for all web development projects, ensuring semantic and accessible markup.",
  },
  {
    name: "CSS",
    icon: SiCss3,
    reason:
      "CSS enables me to design responsive and visually appealing user interfaces for web applications.",
  },
  {
    name: "Sass",
    icon: SiSass,
    reason:
      "I utilize Sass to write modular and maintainable stylesheets, making complex CSS development more efficient.",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    reason:
      "JavaScript is essential in my web development stack for building interactive and dynamic front-end experiences.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    reason:
      "I use TypeScript to write scalable and maintainable code in large JavaScript projects, leveraging its type safety.",
  },
  {
    name: "Bash",
    icon: SiGnubash,
    reason:
      "Bash scripting is a critical part of my workflow for automating tasks and managing Linux-based systems.",
  },
  {
    name: "SQL",
    icon: SiMysql,
    reason:
      "I use SQL for data querying, manipulation, and management in relational databases during backend development.",
  },
  {
    name: "Markdown",
    icon: SiMarkdown,
    reason:
      "I rely on Markdown for documentation purposes, including writing technical blogs and structuring README files on GitHub.",
  },
];

// Tools
export const ToolsData: TechstackData[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    reason:
      "I use Next.js for building performant, full-stack React applications with features like server-side rendering and API routes.",
  },
  {
    name: "React.js",
    icon: SiReact,
    reason:
      "React is my primary library for building modern, component-based user interfaces with efficient state management.",
  },
  {
    name: "TailWind CSS",
    icon: SiTailwindcss,
    reason:
      "Tailwind CSS helps me rapidly build custom and responsive UI designs directly within my markup.",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    reason:
      "I use Framer Motion to create smooth and interactive animations in React applications with minimal effort.",
  },
  {
    name: "Linux",
    icon: SiLinux,
    reason:
      "Linux serves as my preferred operating system for development, offering flexibility, stability, and powerful CLI tools.",
  },
  {
    name: "VS Codium",
    icon: SiVscodium,
    reason:
      "VS Codium is my lightweight code editor of choice, providing the features of VS Code without proprietary telemetry.",
  },
  {
    name: "NeoVim",
    icon: SiNeovim,
    reason:
      "I use NeoVim for fast and customizable coding experiences, especially when working on remote or terminal-based systems.",
  },
  {
    name: "Unity",
    icon: SiUnity,
    reason:
      "Unity is my main engine for developing 2D and 3D games, offering a robust ecosystem and support for C# scripting.",
  },
  {
    name: "Unreal Engine",
    icon: SiUnrealengine,
    reason:
      "Unreal Engine is my choice for high-performance game development, particularly when building graphically intensive applications.",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    reason:
      "I use GitHub for version control, collaboration, and open-source contributions across all my development projects.",
  },
  {
    name: "Git",
    icon: SiGit,
    reason:
      "Git is an essential tool in my workflow for managing codebases, tracking changes, and collaborating efficiently.",
  },
  {
    name: "Mongo DB",
    icon: SiMongodb,
    reason:
      "I use MongoDB as a flexible NoSQL database solution for handling unstructured data in modern web applications.",
  },
  {
    name: "Anytype",
    icon: SiAnytype,
    reason:
      "Anytype helps me organize personal knowledge and development notes with a privacy-focused, local-first approach.",
  },
  {
    name: "Excalidraw",
    icon: SiExcalidraw,
    reason:
      "I use Excalidraw to create quick and intuitive diagrams or wireframes for planning and presenting ideas visually.",
  },
];
