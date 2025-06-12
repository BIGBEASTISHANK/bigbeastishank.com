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

interface ToolsLayout {
  name: string;
  icon: IconType;
  learningLink: string;
}

export const myLangs: ToolsLayout[] = [
  {
    name: "C++",
    icon: SiCplusplus,
    learningLink: "https://www.w3schools.com/cpp",
  },
  {
    name: "C#",
    icon: TbBrandCSharp,
    learningLink: "https://www.w3schools.com/cs",
  },
  {
    name: "C",
    icon: SiC,
    learningLink: "https://www.w3schools.com/c",
  },
  {
    name: "Rust",
    icon: SiRust,
    learningLink: "https://doc.rust-lang.org/beta/",
  },
  {
    name: "Python",
    icon: SiPython,
    learningLink: "https://www.w3schools.com/python",
  },
  {
    name: "HTML",
    icon: SiHtml5,
    learningLink: "https://www.w3schools.com/html",
  },
  {
    name: "CSS",
    icon: SiCss3,
    learningLink: "https://www.w3schools.com/css",
  },
  {
    name: "Sass",
    icon: SiSass,
    learningLink: "https://www.w3schools.com/sass/",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    learningLink: "https://www.w3schools.com/js",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    learningLink: "https://www.typescriptlang.org/docs",
  },
  {
    name: "Bash",
    icon: SiGnubash,
    learningLink: "https://www.javatpoint.com/bash",
  },
  {
    name: "SQL",
    icon: SiMysql,
    learningLink: "https://www.w3schools.com/mysql/default.asp",
  },
  {
    name: "Markdown",
    icon: SiMarkdown,
    learningLink: "https://www.markdownguide.org/getting-started/",
  },
];

// Skills
export const myToolsAndFramework: ToolsLayout[] = [
  {
    name: "Next.js",
    icon: SiNextdotjs,
    learningLink: "https://nextjs.org/docs",
  },
  {
    name: "React.js",
    icon: SiReact,
    learningLink: "https://reactjs.org/docs/getting-started.html",
  },
  {
    name: "TailWind CSS",
    icon: SiTailwindcss,
    learningLink: "https://tailwindcss.com/docs",
  },
  {
    name: "Framer Motion",
    icon: TbBrandFramerMotion,
    learningLink: "https://motion.dev/docs",
  },
  {
    name: "Linux",
    icon: SiLinux,
    learningLink: "https://www.javatpoint.com/linux-tutorial",
  },
  {
    name: "VS Codium",
    icon: SiVscodium,
    learningLink: "https://vscodium.com/",
  },
  {
    name: "NeoVim",
    icon: SiNeovim,
    learningLink: "https://neovim.io/doc/",
  },
  {
    name: "Unity",
    icon: SiUnity,
    learningLink: "https://docs.unity.com/",
  },
  {
    name: "Unreal Engine",
    icon: SiUnrealengine,
    learningLink:
      "https://docs.unrealengine.com/en-US/Engine/Basics/index.html",
  },
  {
    name: "GitHub",
    icon: SiGithub,
    learningLink: "https://docs.github.com/en",
  },
  {
    name: "Git",
    icon: SiGit,
    learningLink: "https://git-scm.com/docs",
  },
  {
    name: "Mongo DB",
    icon: SiMongodb,
    learningLink: "https://www.mongodb.com/docs",
  },
  {
    name: "Anytype",
    icon: SiAnytype,
    learningLink: "https://doc.anytype.io/anytype-docs",
  },
  {
    name: "Excalidraw",
    icon: SiExcalidraw,
    learningLink: "https://excalidraw.com/",
  },
];
