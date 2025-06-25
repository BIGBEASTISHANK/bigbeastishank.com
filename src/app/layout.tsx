import "@/styles/globals.scss";
import "@/styles/tailwindImport.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import NavbarComponent from "@/components/Layout/Navbar";
import { ColorPalette as CP } from "@@/data/ColorPaletteData";
import { NextFont } from "next/dist/compiled/@next/font";

// Variables
const notoSans: NextFont = Noto_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | BIGBEASTISHANK",
  description: "Ishank's Portfolio website",
};

// Root Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${notoSans.className} antialiased`}>
        {/* Navbar */}
        <NavbarComponent />
        {children}
      </body>
    </html>
  );
}
