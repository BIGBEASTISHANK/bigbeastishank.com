// Importing stuffs
import Image from "next/image";

// Exporting web page
export default function Index() {
  return (
    <>
      <div className="index">
        <div className="hero">
          <div className="hero-img-hand-device">
            <Image src="/images/index/hero.webp" height="170" width="170" className="img"></Image>
          </div>
          <div className="hero-content">
            <h1>Ishank</h1>
            <br />
            <p>Hi! I'm Ishank. I love programming and I like to code in <a>Python</a>, <a>JavaScript</a>, <a>CSS</a>, <a>HTML</a> and <a>C#</a> </p>
          </div>
          <div className="hero-img-pc">
            <Image src="/images/index/hero.webp" height="222" width="222" className="img"></Image>
          </div>
        </div>
      </div>
    </>
  )
}
