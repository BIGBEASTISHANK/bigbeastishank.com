import Image from "next/image";
import logo from "@@/public/img/BBILogo.png";

export default function Hero() {
  return (
    <div id="home" className="px-5">
      {/* Image */}
      <Image
        src={logo}
        className="rounded-2xl border-2 border-neutral-800 mb-7 md:block hidden"
        height={100}
        width={100}
      />
      <Image
        src={logo}
        className="rounded-2xl border-2 border-neutral-800 mb-5 md:hidden"
        height={80}
        width={80}
      />

      {/* Heading */}
      <h1 className="font-bold md:text-xl text-lg md:mb-7 mb-4">
        I&apos;m Ishank ~ Web & Game Developer
      </h1>

      {/* Text */}
      <div className="md:text-base text-sm md:text-left text-justify">
        <p className="md:mb-4 mb-2">
          Self-taught devloper with a passion to create immersive experiences.
          Skilled in Unity and currently expanding knowledge with Unreal Engine.
        </p>
        <p>
          I not only work on creating websites & games, but I also explore the
          complexity of networking and penetration testing. I find joy in
          securing computer systems & networks. I use Arch BTW!
        </p>
      </div>
    </div>
  );
}
