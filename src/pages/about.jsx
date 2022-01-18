// Importing Stuffs
import {
  Box,
  Center,
  Container,
  Heading,
  Skeleton,
  UnorderedList,
  ListItem,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Gears from "../components/about/gears";
import Softwares from "../components/about/softwares";

export default function About() {
  // Returning Html page
  return (
    <>
      <Box className="about">
        <Head>
          <title>About | BIG BEAST ISHANK</title>
        </Head>

        <Center>
          {/* About me heading */}
          <Heading
            className="about-heading"
            fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
            fontWeight="700"
            mb={{ lg: "20px", md: "15px" }}
          >
            <Text className={"about-head"}>About Me</Text>
          </Heading>
        </Center>

        {/* About Me text */}
        <Box
          className="about-content"
          fontSize={{
            xl: "25px",
            lg: "20px",
            md: "18px",
            sm: "16px",
            base: "13px",
          }}
          fontWeight="700"
        >
          <Container textAlign={"justify"}>
            Hmm... so you are here because you want to know about me right? So
            lets talk about me. I am Ishank, my school name is Pranjal. In year{" "}
            <b>2018</b>
            one of my friend said that he know hacking. At that time I was not
            having any talent in my life. When he told about hacking, I got very
            excited about that I also want to try it. So one day their was{" "}
            <b>Olympiads</b> of ICT in my school. I participated and got{" "}
            <b>Gold</b> medal. So my father purchased me a laptop from that
            laptop I start knowing about <b>HTML</b> and its fundamentals.
            Sooner I started doing Front-End Web Development. Then I came across
            many programming languages, I started learning them. Then I made my
            first Github page. In late <b>2019</b> I started woking on projects
            and uploading it to github. Then in mid <b>2020</b> I became a
            Fullstack Web Developer, Game Developer, AI Developer and
            Free-Lancer. And I am an advance Linux user too!
          </Container>
        </Box>

        {/* Seprator Line */}
        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          ml={"-30px"}
          mr={"-30px"}
          w={"810"}
          h={"2px"}
          mb={4}
          mt={4}
        />

        {/* Gears I use */}
        <Gears />

        {/* Software I use */}
        <Softwares />
      </Box>
    </>
  );
}
