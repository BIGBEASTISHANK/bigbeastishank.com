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
        <Link aria-label="GitHub" href="/github" target="_blank">
          <FaGithub />
        </Link>

        {/* Linkedin */}
        <Link aria-label="Linkedin" href="/linkedin" target="_blank">
          <FaLinkedinIn />
        </Link>

        {/* Replit */}
        <Link aria-label="Replit" href="/replit" target="_blank">
          <SiReplit />
        </Link>

        {/* Fiverr */}
        <Link aria-label="Fiverr" href="/fiverr" target="_blank">
          <TbBrandFiverr />
        </Link>

        {/* Spotify */}
        <Link aria-label="Spotify" href="/spotify" target="_blank">
          <FaSpotify />
        </Link>

        {/* Youtube */}
        <Link aria-label="YouTube" href="/youtube" target="_blank">
          <FaYoutube />
        </Link>

        {/* Discord */}
        <Link aria-label="Discord" href="/discord" target="_blank">
          <FaDiscord />
        </Link>

        {/* Instagram */}
        <Link aria-label="Instagram" href="/instagram" target="_blank">
          <FaInstagram />
        </Link>

        {/* Twitter */}
        <Link aria-label="Twitter" href="/twitter" target="_blank">
          <FaTwitter />
        </Link>

        {/* Snapchat */}
        <Link aria-label="Snapchat" href="/snapchat" target="_blank">
          <FaSnapchat />
        </Link>

        {/* Reddit */}
        <Link aria-label="Reddit" href="/reddit" target="_blank">
          <FaReddit />
        </Link>

        {/* Steam */}
        <Link aria-label="Steam" href="/steam" target="_blank">
          <FaSteam />
        </Link>

        {/* Facebook */}
        <Link aria-label="Facebook" href="/facebook" target="_blank">
          <FaFacebook />
        </Link>

        {/* Twitch */}
        <Link aria-label="Twitch" href="/twitch" target="_blank">
          <FaTwitch />
        </Link>
      </div>
    </footer>
  );
}
