// Language mapping for display names
export const getLanguageDisplayName = (lang: string): string => {
  const languageMap: { [key: string]: string } = {
    ts: "typeScript.ts",
    tsx: "typeScript.ts",
    typescript: "typeScript.ts",
    js: "javaScript.js",
    jsx: "javaScript.js",
    javascript: "javaScript.js",
    bash: "bash.sh",
    html: "index.html",
    css: "index.css",
    python: "index.py",
    sql: "database.sql",
    cpp: "main.cpp",
    text: "file.txt",
    output: "$Terminal",
  };

  return languageMap[lang.toLowerCase()] || (lang.charAt(0).toUpperCase() + lang.slice(1));
};
