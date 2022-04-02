import Hero from "../components/Hero";
import MySkills from "../components/My Stuffs";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Head from "next/head";

export default function index() {
  return (
    <>
      <Head>
        <meta
          property="og:keywords"
          name="keywords"
          content="home, landing page, header, hero, ishank, pranjal"
        />
        <title>Home | BIG BEAST ISHANK</title>
      </Head>
      {/* Hero Section */}
      <Hero />

      {/* MySkills Section */}
      <MySkills />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section  */}
      <Contact />
    </>
  );
}
