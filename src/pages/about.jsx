// Importing Stuffs
import {
  Box,
  Center,
  Container,
  Heading,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import Gears from "../components/about/gears";
import Softwares from "../components/about/softwares";

export default function About() {
  // Returning Html page
  return (
    <>
      <Box className="about">
        <Head>
          <meta
            name="description"
            content="This is about page, you can know about me alot on this page. Hope you enjoy!😉"
          />
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
            <Text>
              Hmm... so you are here because you want to know about me, right?
              So let`s talk about me. My real name is Pranjal. In the year 2018,
              I was first introduced to hacking, and then I learned about
              programming and other technological concepts. My interest in
              technology was sparked by many people and watching YouTube. I
              learned the majority of what I know from YouTube, and then I
              learned how to do web research. And now I am a game developer, an
              AI developer, and a web developer. To know everything about me and
              my journey, see my blog{" "}
              <b>
                <NextLink href="/blog/about%20me">Here</NextLink>
              </b>
            </Text>
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
