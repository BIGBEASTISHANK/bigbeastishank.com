// Language mapping for display names
export const getLanguageDisplayName = (lang: string): string => {
  const languageMap: { [key: string]: string } = {
    ts: "TypeScript",
    tsx: "TypeScript",
    typescript: "TypeScript",
    js: "JavaScript",
    jsx: "JavaScript",
    javascript: "JavaScript",
    bash: "Bash",
    html: "HTML",
    css: "CSS",
    python: "Python",
    sql: "SQL",
    cpp: "C++",
    text: "Plain Text",
    output: "$Terminal",
  };

  return languageMap[lang.toLowerCase()] || (lang.charAt(0).toUpperCase() + lang.slice(1));
};
