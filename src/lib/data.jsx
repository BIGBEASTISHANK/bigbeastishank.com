// Importing
//
// Games Projects
import beastRace3D from "@@/public/img/projects/games/beastRace3D.png";
import shimrunDash2D from "@@/public/img/projects/games/shimrunDash2D.png";
import sussyShooter3D from "@@/public/img/projects/games/sussyShooter3D.png";
import dragYourTires3D from "@@/public/img/projects/games/dragYourTires3D.png";
import basicPlatformer2d from "@@/public/img/projects/games/basicPlatformer2D.png";
import suspiciousRunner3D from "@@/public/img/projects/games/suspiciousRunner3D.png";

// Website Projects
import bbiDotComV3 from "@@/public/img/projects/websites/bbiDotComV3.png";
import bbiDotComV2 from "@@/public/img/projects/websites/bbiDotComV2.png";
import bbiDotComV1 from "@@/public/img/projects/websites/bbiDotComV1.png";
import bbiDotComV4 from "@@/public/img/projects/websites/bbiDotComV4.png";
import pythonWebsiteFlask from "@@/public/img/projects/websites/pythonWebsiteFlask.png";

// Others Projects
import discordBot from "@@/public/img/projects/others/discordBot.png";

// Navlinks
export const navlinks = [
  {
    title: "Home",
    url: "/#",
  },
  {
    title: "About",
    url: "/#about",
  },
  {
    title: "Games",
    url: "/#games",
  },
  {
    title: "Websites",
    url: "/#websites",
  },
  {
    title: "Hire",
    url: "/hire",
  },
  {
    title: "Projects",
    url: "/#projects",
  },
  {
    title: "Contacts",
    url: "/#contact",
  },
];

// Games
export const gameProjects = [
  // Drag your tires game
  {
    title: "Drag Your Tires",
    description:
      "Master precision drifts in this high-speed racing game. Conquer challenging tracks and showcase your skills in style.",
    imageUrl: dragYourTires3D,
    projectUrl: "https://github.com/BIGBEASTISHANK/Drag-Your-Tires",
  },

  // Shimrun Dash Game
  {
    title: "Shimrun Dash 2D",
    description:
      "Game where you have to dodge obsticles at high speed but with some twist. Inspired by the Geometry Dash game.",
    imageUrl: shimrunDash2D,
    projectUrl: "https://github.com/BIGBEASTISHANK/Shimrun-Dash-2D",
  },

  // Sussy Shooter 3d game
  {
    title: "Sussy Shooter 3D",
    description:
      "Vanquish enemies, discover hidden spots, and reach the final target in this action-packed game with strategic twists.",
    imageUrl: sussyShooter3D,
    projectUrl: "https://github.com/BIGBEASTISHANK/Sussy-Shooter-3D",
  },

  // Suspicious runner 3d game
  {
    title: "Suspicious Runner 3D",
    description:
      "Parkour as an Among Us character. Dash, jump, and conquer challenges in this fast-paced adventure.",
    imageUrl: suspiciousRunner3D,
    projectUrl: "https://github.com/BIGBEASTISHANK/Suspicious-Runner-3D",
  },

  // Basic platformer 2d game
  {
    title: "Basic Platformer 2D",
    description:
      "Jump, shoot, conquer: a platformer where you fend off UFOs in the sky!",
    imageUrl: basicPlatformer2d,
    projectUrl: "https://github.com/BIGBEASTISHANK/Basic-Platformer-2D",
  },

  // Beast Race 3d game
  {
    title: "Beast Race 3D",
    description:
      "Race through thrilling tracks in this car game. Complete the course, and experience the adrenaline of high-speed drive.",
    imageUrl: beastRace3D,
    projectUrl: "https://github.com/BIGBEASTISHANK/Beast-Race",
  },
];

// Websites
export const websiteProjects = [
  // bigbeastishank.com v4
  {
    title: "BBI Portfolio Site V4",
    description: "The website where I showcased my projects in center format.",
    imageUrl: bbiDotComV4,
    projectUrl: "https://github.com/BIGBEASTISHANK/bigbeastishank.com/tree/V4",
  },

  // bigbeastishank.com v3
  {
    title: "BBI Blog Site",
    description:
      "This was the website I created before this one, it was mainly for blogs but also contain my projects.",
    imageUrl: bbiDotComV3,
    projectUrl: "https://github.com/BIGBEASTISHANK/bigbeastishank.com/tree/V3",
  },

  // bigbeastishank.com v2
  {
    title: "BBI Project Site",
    description:
      "I created this site very long ago, it was only consisting of my projects & skills.",
    imageUrl: bbiDotComV2,
    projectUrl: "https://github.com/BIGBEASTISHANK/bigbeastishank.com/tree/V2",
  },

  // bigbeastishank.com v1
  {
    title: "BBI First Portfolio site",
    description: "My First proper portfolio site with my blogs and skills.",
    imageUrl: bbiDotComV1,
    projectUrl: "https://github.com/BIGBEASTISHANK/bigbeastishank.com/tree/V1",
  },

  // Python website flask
  {
    title: "Python website",
    description: "Python-powered website for a seamless online experience.",
    imageUrl: pythonWebsiteFlask,
    projectUrl: "https://github.com/BIGBEASTISHANK/Website.py-Flask",
  },
];

// Other Projects
export const otherProjects = [
  // BIG BEAST Bot
  {
    title: "Discord Bot",
    description:
      "This is my Discord bot, 'BIG BEAST'. You can get this on top.gg. It is a multi-purpose bot. If you want to go to its support server",
    imageUrl: discordBot,
    projectUrl: "https://github.com/BIGBEASTISHANK/BBeast-Discord-Bot",
  },
];

// Hire me for
export const hireMeFor = [
  // Website
  {
    service: "Websites",
    description:
      "Revolutionize your online presence with a bespoke website! 🌐 Tailored to your brand, our design is user-friendly, visually stunning, and optimized for success. Let's launch your digital identity - the key to unlocking your online potential starts here! 🚀",
    priceLink: "/hire/forWebsite",
    comingSoon: false,
  },
  {
    service: "Games",
    description:
      "Level up your brand experience with custom games! 🎮 Immerse your audience in interactive fun with personalized game development. From engaging concepts to seamless execution, let's create games that elevate your brand to new heights. Ready to play? Let's start crafting your gaming journey! 🚀",
    priceLink: "#",
    comingSoon: true,
  },
];

// Hire me for website
export const hireMeForWebsite = [
  // Basic Plan
  {
    planName: "Basic",
    planPrice: "6,000",
    features: [
      { name: "1 Pages", available: true },
      { name: "Dynamic", available: false },
      { name: "Backend", available: false },
      { name: "Animation", available: false },
      { name: "Responsive", available: true },
      { name: "Source Code", available: false },
      { name: "Contact Form", available: false },
      { name: "Hosting setup", available: true },
      { name: "Custom Domain", available: false },
      { name: "Delivery in 5 Days", available: true },
      { name: "Frameworks Used", available: false },
      { name: "Social media icons", available: true },
      { name: "Speed optimization", available: true },
    ],
    contactSubject: "",
    note: "Before I start making a website, you have to give 50% of the payment. The completed website will be shown through a video in the mail, and after the full payment, you will receive your product.",
  },

  // Standard
  {
    planName: "Standard",
    planPrice: "23,000",
    features: [
      { name: "6 Pages", available: true },
      { name: "Dynamic", available: true },
      { name: "Backend", available: false },
      { name: "Animation", available: true },
      { name: "Responsive", available: true },
      { name: "Source Code", available: true },
      { name: "Contact Form", available: true },
      { name: "Hosting setup", available: true },
      { name: "Custom Domain", available: false },
      { name: "Delivery in 15 Days", available: true },
      { name: "Frameworks Used", available: true },
      { name: "Social media icons", available: true },
      { name: "Speed optimization", available: true },
    ],
    contactSubject: "",
    note: "Before I start making a website, you have to give 50% of the payment. The completed website will be shown through a video in the mail, and after the full payment, you will receive your product.",
  },

  // Premium
  {
    planName: "Premium",
    planPrice: "40,000",
    features: [
      { name: "10 Pages", available: true },
      { name: "Dynamic", available: true },
      { name: "Backend", available: true },
      { name: "Animation", available: true },
      { name: "Responsive", available: true },
      { name: "Source Code", available: true },
      { name: "Contact Form", available: true },
      { name: "Hosting setup", available: true },
      { name: "Custom Domain", available: true },
      { name: "Delivery in 35 Days", available: true },
      { name: "Frameworks Used", available: true },
      { name: "Social media icons", available: true },
      { name: "Speed optimization", available: true },
    ],
    contactSubject: "",
    note: "Before I start making a website, you have to give 50% of the payment. The completed website will be shown through a video in the mail, and after the full payment, you will receive your product.",
  },
];
