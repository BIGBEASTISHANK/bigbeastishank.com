// Importing stuffs
import Image from "next/image";
import Link from "next/link";

// Exporting web page
export default function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className="brand-name">
                    <Link href='/'><a>BIG BEAST ISHANK</a></Link>
                </div>
                <nav>
                    <Link href="/"><a>Home</a></Link>
                    <Link href="https://github.com/bigbeastishank.com"><a>GitHub</a></Link>
                </nav>
            </div>
        </>
    )
}