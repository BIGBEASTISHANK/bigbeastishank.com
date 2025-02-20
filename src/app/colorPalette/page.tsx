import { JSX } from "react";
import { Metadata } from "next";
import ColorPalettePalette from "@/components/(5) ColorPalette";

// Meta data
export const metadata: Metadata = {
  title: "Color Pallete | BIGBEASTISHANK",
  description: "My custom color pallete.",
  metadataBase: new URL(`https://${process.env.VERCEL_URL}`),
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Web Development",
    "Game development",
    "C++",
    "Unreal Engine",
    "Unity",
    "Color Palette",
  ],
  openGraph: {
    title: "Color Pallete | BIGBEASTISHANK",
    description: "My custom color pallete.",
    images: "/img/metadata/colorPalette.png",
  },
};
/////////////////////////////

export default function ColorPalette(): JSX.Element {
  return (
    <>
      <ColorPalettePalette />
    </>
  );
}
