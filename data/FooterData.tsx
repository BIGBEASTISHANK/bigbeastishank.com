// Icons
import {
  FaGithub,
  FaYoutube,
  FaDiscord,
  FaMastodon,
  FaLinkedin,
} from "react-icons/fa";
import { SiSignal } from "react-icons/si";

interface SocialMedia {
  label: string;
  icon: React.ComponentType;
  link: string;
}

// Social Media
export const socialMedia: SocialMedia[] = [
  {
    label: "GitHub",
    icon: FaGithub,
    link: "/github",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    link: "/youtube",
  },
  {
    label: "Signal",
    icon: SiSignal,
    link: "/signal",
  },
  {
    label: "Mastodon",
    icon: FaMastodon,
    link: "/mastodon",
  },
  {
    label: "Discord",
    icon: FaDiscord,
    link: "/discord",
  },
  {
    label: "LinkedIn",
    icon: FaLinkedin,
    link: "/linkedin",
  },
];
