"use client";
import Link from "next/link";
import { socialMedia } from "@@/data/FooterData";
import { FullDivider, ShortDivider } from "@/utility/Dividers";
import { usePathname } from "next/navigation";

export default function Footer() {
  // Checking path name
  const pathName: string = usePathname().split("/blogs/")[1];

  return (
    <footer
      className={`text-center justify-center items-center my-5 ${
        pathName != null ? "max-w-[110rem]" : "md:max-w-[45rem] max-w-[35rem]"
      } mx-auto`}
    >
      {/* Divider */}
      <FullDivider />

      <div className="flex flex-col border-1 border-gray-600 rounded-3xl backdrop-blur-md sm:p-5 p-3">
        {/* Credit */}
        <p className="md:text-base text-sm">
          Made with ❤️ by{" "}
          <strong>
            <a
              href="/github"
              target="_blank"
              className="text-[#0088CC] hover:underline outline-none"
            >
              BIGBEASTISHANK
            </a>
          </strong>
        </p>

        {/* Short Divider */}
        <ShortDivider customCSS="my-2 mx-auto"/>

        {/* Social Media Icons */}
        <div className="mt-3 md:text-2xl text-xl flex flex-wrap gap-5 justify-center mx-10">
          {/* Icons */}
          {socialMedia.map((data, index) => (
            <Link
              key={index}
              aria-label={data.label}
              href={data.link}
              target="_blank"
              className={"outline-none"}
            >
              <data.icon />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
