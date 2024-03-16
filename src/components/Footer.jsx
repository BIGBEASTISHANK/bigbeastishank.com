import { socialMedia } from "@/data/FooterData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center justify-center items-center my-5">
      {/* Thanking */}
      <p className="md:text-base text-sm">
        Made with ❤️ by{" "}
        <strong>
          <a
            href="/github"
            target="_blank"
            className="text-[#7799E5] hover:underline"
          >
            BIGBEASTISHANK
          </a>
        </strong>
      </p>

      {/* Social Media Icons */}
      <div className="mt-5 md:text-xl text-lg flex flex-wrap gap-3 justify-center mx-10">
        {/* Icons */}
        {socialMedia.map((data, index) => (
          <Link
            key={index}
            aria-label={data.label}
            href={data.link}
            target="_blank"
          >
            <data.icon />
          </Link>
        ))}
      </div>
    </footer>
  );
}
