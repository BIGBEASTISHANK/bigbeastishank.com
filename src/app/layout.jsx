import "@/styles/tailwindImport.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Who is BIGBEASTISHANK?",
  description: "Know about him here.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} md:max-w-[45rem] max-w-[35rem] m-auto text-white bg-black/95 pt-32 h-[5000px]`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
