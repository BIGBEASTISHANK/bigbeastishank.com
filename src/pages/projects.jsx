// Importing Stuffs
import { getSortedProjectsData } from "../lib/projects";
import Date from "../components/date";
import { Box, Heading, Text, Skeleton, Link } from "@chakra-ui/react";
import Head from "next/head";

export default function Projects({ allProjectsData }) {
  // Returning Html
  return (
    <>
      <Head>
        <title>Project | BIG BEAST ISHANK</title>
      </Head>

      <Box className="project">
        {/* Project Heading */}
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="heading">My Project</Text>
        </Heading>

        <Box
          className="content"
          fontSize={{
            xl: "25px",
            lg: "20px",
            md: "18px",
            sm: "16px",
            base: "13px",
          }}
          fontWeight="700"
          textAlign={"justify"}
        >
          {/* Something about project */}
          <Text>
            This is my project page. Here you can find my projects. You can
            click on the title to go to the cross-ponding link, and below the
            title you can read about the project!
          </Text>
        </Box>

        <Skeleton
          startColor="pink.500"
          endColor="orange.500"
          ml={"-30px"}
          mr={"-30px"}
          w={"810"}
          h={"2px"}
          mb={6}
          mt={6}
        />

        {/* Project Frontmatter data */}
        {allProjectsData.map(({ id, name, description, date, link }) => (
          <li key={id}>
            <Box mb={50} className="projects">
              {/* Project TItle */}
              <Heading
                fontSize={{ lg: "3xl", md: "2xl", sm: "24px", base: "16px" }}
                fontWeight="700"
                mb={{ lg: "10px", base: "5px" }}
                mt={"15px"}
              >
                <Text className="title" textAlign={"justify"}>
                  <Link href={link} cursor={"pointer"} isExternal _focus={{ outline: "none" }}>
                    {name}
                  </Link>
                </Text>
              </Heading>

              {/* Project Description */}
              <Text
                className="description"
                fontSize={{
                  xl: "20px",
                  md: "17px",
                  sm: "16px",
                  base: "11px",
                }}
                fontWeight="700"
                mb={{ lg: "15px", base: "10px" }}
                textAlign={"justify"}
              >
                {description}
              </Text>

              {/* Date on which blog is posted */}
              <Text
                textAlign={"justify"}
                className="date"
                fontSize={{
                  xl: "19px",
                  md: "16px",
                  sm: "15px",
                  base: "10px",
                }}
              >
                <Date dateString={date} />
              </Text>
            </Box>
          </li>
        ))}
      </Box>
    </>
  );
}

// Function to get projects data
export async function getStaticProps() {
  // Getting projects data
  const allProjectsData = getSortedProjectsData();

  // Returning projects data
  return {
    props: {
      allProjectsData,
    },
  };
}
