import "@/styles/globals.scss";
import "@/styles/tailwindImport.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import ProgressBar from "@/utility/ProgressBar";
import NavbarComponent from "@/components/Layout/Navbar";
import { NextFont } from "next/dist/compiled/@next/font";
import LayoutBackground from "@/utility/LayoutBackground";

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
        {/* Layout background */}
        <LayoutBackground />
        {/* Progress bar */}
        <ProgressBar />
        {/* Navbar */}
        <div className="w-full flex justify-center items-center">
          <NavbarComponent />
        </div>

        {children}
      </body>
    </html>
  );
}
