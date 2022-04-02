import Hero from "../components/Hero";
import MySkills from "../components/My Stuffs";
import Projects from "../components/Projects";
import Contact from "../components/Contact"

export default function index() {
  return (
    <>
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
