import {
  FaSteam,
  FaGithub,
  FaReddit,
  FaTwitch,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaSpotify,
  FaSnapchat,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { Inter } from "next/font/google";
import { TbBrandFiverr } from "react-icons/tb";

// Variables
const inUseFont = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

// Function
export default function Footer() {
  return (
    <footer
      className={`${inUseFont.className} flex flex-col bg-gray-900/70 backdrop-blur-sm py-5 justify-center items-center text-center mt-10`}
    >
      <small className="mb-2 block md:text-base text-sm mx-5">
        &copy; 2023 Ishank. All rights reserved.
      </small>

      <p className="md:text-lg text-base mb-4 text-center mx-5">
        This website built by{" "}
        <Link href="/github" target="_blank" className="underline">
          Ishank
        </Link>{" "}
        & it is{" "}
        <Link href="/sourcecode" target="_blank" className="underline">
          open source
        </Link>
        .
      </p>

      {/* Links */}
      <div className="md:text-2xl text-xl flex flex-wrap gap-3 justify-center mx-10">
        {/* Github */}
        <Link href="/github" target="_blank">
          <FaGithub />
        </Link>

        {/* Linkedin */}
        <Link href="/linkedin" target="_blank">
          <FaLinkedinIn />
        </Link>

        {/* Fiverr */}
        <Link href="/fiverr" target="_blank">
          <TbBrandFiverr />
        </Link>

        {/* Spotify */}
        <Link href="/spotify" target="_blank">
          <FaSpotify />
        </Link>

        {/* Discord */}
        <Link href="/discord" target="_blank">
          <FaDiscord />
        </Link>

        {/* Instagram */}
        <Link href="/instagram" target="_blank">
          <FaInstagram />
        </Link>

        {/* Snapchat */}
        <Link href="/snapchat" target="_blank">
          <FaSnapchat />
        </Link>

        {/* Steam */}
        <Link href="/steam" target="_blank">
          <FaSteam />
        </Link>

        {/* Twitter */}
        <Link href="/twitter" target="_blank">
          <FaTwitter />
        </Link>

        {/* Facebook */}
        <Link href="/facebook" target="_blank">
          <FaFacebook />
        </Link>

        {/* Reddit */}
        <Link href="/reddit" target="_blank">
          <FaReddit />
        </Link>

        {/* Twitch */}
        <Link href="/twitch" target="_blank">
          <FaTwitch />
        </Link>

        {/* Youtube */}
        <Link href="/youtube" target="_blank">
          <FaYoutube />
        </Link>
      </div>
    </footer>
  );
}
