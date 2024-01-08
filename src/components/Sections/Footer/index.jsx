import { Inter } from "next/font/google";
import {
  FaSteam,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaDiscord,
  FaSpotify,
  FaSnapchat,
  FaInstagram,
  FaLinkedinIn,
  FaFacebook,
  FaReddit,
  FaTwitch,
} from "react-icons/fa";

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
      <small className="mb-2 block md:text-base text-sm">
        &copy; 2023 Ishank. All rights reserved.
      </small>

      <p className="md:text-lg text-base mb-4 text-center">
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
      <div className="md:text-2xl text-xl grid grid-flow-col gap-3">
        {/* Github */}
        <a href="/github" target="_blank">
          <FaGithub />
        </a>

        {/* Linkedin */}
        <a href="/linkedin" target="_blank">
          <FaLinkedinIn />
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
        <a href="/Snapchat" target="_blank">
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
