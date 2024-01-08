import { Inter } from "next/font/google";
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
import { TbBrandFiverr } from "react-icons/tb";

const inUseFont = Inter({
  weight: ["400"],
  subsets: ["latin"],
});

export const metadata = {
  title: "BIGBEASTISAHNK portfolio",
  description:
    "On this website, you will find blogs and projects made by Ishank.",
};

export default function Footer() {
  return (
    <footer
      className={`${inUseFont.className} flex flex-col bg-gray-900/70 backdrop-blur-sm py-5 justify-center items-center text-center`}
    >
      <small className="mb-2 block md:text-base text-sm mx-5">
        &copy; 2023 Ishank. All rights reserved.
      </small>

      <p className="md:text-lg text-base mb-4 text-center mx-5">
        This website built by{" "}
        <a href="/github" target="_blank" className="underline">
          Ishank
        </a>{" "}
        & it is{" "}
        <a href="/sourcecode" target="_blank" className="underline">
          open source
        </a>
        .
      </p>

      {/* Links */}
      <div className="md:text-2xl text-xl flex flex-wrap gap-3 justify-center mx-10">
        {/* Github */}
        <a href="/github" target="_blank">
          <FaGithub />
        </a>

        {/* Linkedin */}
        <a href="/linkedin" target="_blank">
          <FaLinkedinIn />
        </a>

        {/* Fiverr */}
        <a href="/fiverr" target="_blank">
          <TbBrandFiverr />
        </a>

        {/* Spotify */}
        <a href="/spotify" target="_blank">
          <FaSpotify />
        </a>

        {/* Discord */}
        <a href="/discord" target="_blank">
          <FaDiscord />
        </a>

        {/* Instagram */}
        <a href="/instagram" target="_blank">
          <FaInstagram />
        </a>

        {/* Snapchat */}
        <a href="/snapchat" target="_blank">
          <FaSnapchat />
        </a>

        {/* Steam */}
        <a href="/steam" target="_blank">
          <FaSteam />
        </a>

        {/* Twitter */}
        <a href="/twitter" target="_blank">
          <FaTwitter />
        </a>

        {/* Facebook */}
        <a href="/facebook" target="_blank">
          <FaFacebook />
        </a>

        {/* Reddit */}
        <a href="/reddit" target="_blank">
          <FaReddit />
        </a>

        {/* Twitch */}
        <a href="/twitch" target="_blank">
          <FaTwitch />
        </a>

        {/* Youtube */}
        <a href="/youtube" target="_blank">
          <FaYoutube />
        </a>
      </div>
    </footer>
  );
}
