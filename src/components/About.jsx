import Link from "next/link";
import Image from "next/image";
import pfp from "@@/public/img/pfp.png";

export default function About() {
  return (
    <div id="about" className="px-5 scroll-mt-24">
      {/* Title */}
      <h1 className="font-bold md:text-3xl text-2xl md:mb-8 mb-5 transition-all">
        <Link href="/#about">~/About</Link>
      </h1>

      {/* Image */}
      <Image
        src={pfp}
        className="h-[100px] w-[100px] select-none rounded-full border-2 border-neutral-800 mb-7 md:block hidden mx-auto transition-all"
      />
      <Image
        src={pfp}
        className="h-[80px] w-[80px] select-none rounded-full border-2 border-neutral-800 mb-5 md:hidden mx-auto transition-all"
      />

      {/* About me */}
      <div className="text-center md:text-base text-sm flex flex-col md:gap-4 gap-3 transition-all">
        <p>
          🚀 Hey there, I'm Ishank, but you can call me the BIG BEAST ISHANK! 👹
        </p>
        <p>
          🎮 Crafting games, coding websites, diving into networks, and breaking
          barriers with pentesting—yeah, that's my jam! 💻✨
        </p>
        <p>
          Wondering about the "BIG BEAST ISHANK" title? Well, it's not just a
          name; it's a journey. I'm on the path to becoming a{" "}
          <strong>Beast</strong> in the realms of Web and Game Development,
          along with conquering the vast landscapes of Network Engineering &
          Pentesting.
        </p>
        <p>
          🎥 Curious about my adventures? I document them in thrilling devlogs
          over on my{" "}
          <a
            href="/youtube"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            <strong>YouTube</strong>
          </a>{" "}
          channel. Join the ride, hit that subscribe button, and let's turn the
          ordinary into extraordinary! 🚀👾
        </p>
      </div>
    </div>
  );
}
