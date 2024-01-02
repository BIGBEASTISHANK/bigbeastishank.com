import { navlinks } from "@/lib/data";

export default function Navbar() {
  return (
    <div className="my-7 select-none navbar fixed top-0 w-full px-[2%]">
      {/* Navbar background */}
      <div className="bg-gray-800 rounded-full flex py-5 px-7">
        {/* Name */}
        <h1 className="md:flex hidden">
          <a href="/" className="flex text-3xl font-bold pr-7">
            BIGBEASTISHANK
          </a>
        </h1>

        {/* Middle space */}
        <div className="m-auto md:flex hidden" />

        {/* Navlinks */}
        <ul className="flex my-auto mx-auto md:mx-0 overflow-hidden overflow-x-auto navitems">
          {navlinks.map((data) => (
            <li
              key={data.title}
              className="md:px-2 sm:px-[1.2rem] px-3 sm:text-2xl text-[1.35rem] md:hover:text-[1.875rem] hover:underline transition-all"
            >
              <a href={data.url}>{data.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
