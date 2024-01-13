import Link from "next/link";
import Image from "next/image";
import logo from "@@/public/img/BBILogo.png";

export default function Hero() {
  return (
    <div id="#" className="px-5">
      {/* Image */}
      <Image
        src={logo}
        alt={"logo"}
        className="h-[120px] w-[120px] select-none rounded-2xl border-2 border-neutral-800 mb-7 md:block hidden transition-all"
      />
      <Image
        src={logo}
        alt={"logo"}
        className="h-[100px] w-[100px] select-none rounded-2xl border-2 border-neutral-800 mb-5 md:hidden transition-all"
      />

      {/* Heading */}
      <h1 className="font-bold md:text-xl text-lg md:mb-7 mb-4 transition-all">
        I&apos;m Ishank ~ Web & Game Developer
      </h1>

      {/* Text */}
      <div className="md:text-base text-sm md:text-left text-justify flex flex-col md:gap-3 gap-2 transition-all">
        <p>
          Frontend Web & Game Developer with a passion to create immersive
          experiences. Skilled in Unity and currently expanding knowledge with
          Unreal Engine.
        </p>
        <p>
          I not only work on creating websites & games, but I also explore the
          complexity of networking and penetration testing. I find joy in
          securing computer systems & networks. I use Arch BTW!
        </p>
      </div>

      {/* Button */}
      <Link href={"/contact"}>
        <button className="md:mt-7 mt-4 md:text-lg text-base py-1 px-3 border rounded-full bg-neutral-800/50 hover:scale-[1.1] transition-all">
          Contact Me
        </button>
      </Link>
    </div>
  );
}
