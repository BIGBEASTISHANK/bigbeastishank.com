import Hero from "@/components/(2) Home/Hero";
import About from "@/components/(2) Home/About";
import MyLangs from "@/components/(2) Home/MyLangs";
import MyToolsAndFramework from "@/components/(2) Home/MyToolsAndFrameworks";
import { FullDivider } from "@/utility/Dividers";

export default function Home() {
  return (
    <>
      <Hero />

      {/* Divider */}
      <FullDivider delay={1.2}/>

      <About />

      {/* Divider */}
      <FullDivider delay={2.35}/>

      <MyLangs />

      <FullDivider delay={5.1}/>

      <MyToolsAndFramework />
    </>
  );
}
