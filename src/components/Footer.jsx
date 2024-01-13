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
import { SiReplit } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
  return (
    <footer className="text-center justify-center items-center my-5">
      {/* Thanking */}
      <p className="md:text-base text-sm">
        Made with ❤️ by <strong><a href="/github" target="_blank" className="text-blue-500 hover:underline">BIGBEASTISHANK</a></strong>
      </p>

      {/* Social Media Icons */}
      <div className="mt-5 md:text-xl text-lg flex flex-wrap gap-3 justify-center mx-10">
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

        {/* Replit */}
        <Link href="/replit" target="_blank">
          <SiReplit />
        </Link>
      </div>
    </footer>
  );
}
