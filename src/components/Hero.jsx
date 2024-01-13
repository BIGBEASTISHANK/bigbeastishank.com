import Link from "next/link";
import Image from "next/image";
import logo from "@@/public/img/BBILogo.png";

export default function Hero() {
  return (
    <div id="#" className="px-5">
      {/* Image */}
      <Image
        src={logo}
        className="h-[100px] w-[100px] select-none rounded-2xl border-2 border-neutral-800 mb-7 md:block hidden transition-all"
      />
      <Image
        src={logo}
        className="h-[80px] w-[80px] select-none rounded-2xl border-2 border-neutral-800 mb-5 md:hidden transition-all"
      />

      {/* Heading */}
      <h1 className="font-bold md:text-xl text-lg md:mb-7 mb-4 transition-all">
        I&apos;m Ishank ~ Web & Game Developer
      </h1>

      {/* Text */}
      <div className="md:text-base text-sm md:text-left text-justify flex flex-col md:gap-3 gap-2 transition-all">
        <p>
          👨‍💻 Self-taught developer on a mission to craft immersive digital
          experiences. Proficient in Unity and currently broadening my horizons
          with Unreal Engine.
        </p>
        <p>
          💼 Beyond creating websites and games, I delve into the intricacies of
          networking and penetration testing. Discovering the thrill in
          fortifying computer systems and networks is my forte. Oh, and by the
          way, I'm an Arch enthusiast!
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
