// Importing Stuffs
import Date from "../components/date";
import {
  Box,
  Heading,
  Text,
  Skeleton,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  useMediaQuery,
  Tag,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

export default function Projects() {
  // Variables
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const projectData = [
    {
      id: "sussy-shooter-3d",
      name: "Sussy Shooter 3D",
      description:
        "This is my first fps game. This is made on unity. Devlog is posted on youtube, to get link see repo of this project. Hope you like it",
      date: "2022-03-02",
      link: "https://github.com/BIGBEASTISHANK/Sussy-Shooter-3D",
      tags: ["Unity", "Game", "C#", "Game Dev", "Devlog"],
    },
    {
      id: "suspicious-runner-3d",
      name: "Suspicious Runner 3D",
      description:
        "I made my first (kind of) original game. I have posted a devlog on this game too. If you want to see my blog, you can get the link from my GitHub repository. This game is my first step towards becoming a game developer and a developer. I hope you like it. This game is not good at all, but surely I will improve over time.",
      date: "2022-01-15",
      link: "https://github.com/BIGBEASTISHANK/Suspicious-Runner-3D",
      tags: ["Unity", "Game", "C#", "Game Dev", "Devlog"],
    },
    {
      id: "basic-platformer-2d",
      name: "Basic Platformer 2D Game",
      description:
        "If you see my blog, you must know that to become good at something, you need to do small versions of it. So I made a basic 2D platformer game in Unity and it is available for Windows, Linux.",
      date: "2022-01-31",
      link: "https://github.com/BIGBEASTISHANK/Basic-Platformer-2D",
      tags: ["Unity", "Game", "C#", "Game Dev"],
    },

    {
      id: "python-website",
      name: "Python website using flask",
      description:
        "I was working on a project with a backend, so I created this personal website in Python but without a backend. This is based on the flask. It is basic HTML and CSS with python logic.",
      date: "2022-01-19",
      link: "https://bigbeastishank.herokuapp.com",
      tags: ["Python", "Flask"],
    },

    {
      id: "discord-bot",
      name: "My Discord Bot",
      description:
        "This is my Discord bot, 'beast bot'. You can get this on top.gg. It is a multi-purpose bot. If you want to go to its support server. Update(31/03/2022): This bot has been discontinued",
      date: "2022-01-19",
      link: "https://top.gg/bot/709984874924081174/",
      tags: ["Python", "Discord", "AI", "Bot"],
    },

    {
      id: "beast-race",
      name: "Beast Race 3D",
      description:
        "I tried making a game on Unity. This is my first original game. It has many bugs because I didn't work on it properly, but it is playable a lot. It only works on Windows.",
      date: "2022-01-19",
      link: "https://github.com/BIGBEASTISHANK/Beast-Race",
      tags: ["Unity", "Game dev"],
    },
  ];

  const [searchTerm, setSearchTerm] = React.useState("");

  // Returning Html
  return (
    <>
      <Head>
        <meta
          name="description"
          property="og:description"
          content="This is BIGBEASTISHANK's project page, you can check out his projects over here!"
        />

        <meta
          name="keywords"
          property="og:keywords"
          content="projects, react, python, javascript, html, unity, game"
        />

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

        <InputGroup m="auto" mb="40px" mt="40px">
          <InputRightElement
            pointerEvents="none"
            children={<SearchIcon className="searchIcon" boxSize="5" />}
          />
          <Input
            className="search-bar"
            type="text"
            placeholder="Search..."
            _focus={{ outline: "none" }}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </InputGroup>

        {/* Project data */}
        {projectData
          .filter((data) => {
            if (searchTerm == "") {
              return data;
            } else if (
              data.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => (
            <ul key={data.id}>
              <li>
                <Box
                  mb={50}
                  className="projects"
                  bg={"rgba( 0, 0, 0, 0.15 )"}
                  p={"10px"}
                  borderRadius={"25px"}
                  id={data.id}
                >
                  {/* Project TItle */}
                  <Heading
                    fontSize={{
                      lg: "3xl",
                      md: "2xl",
                      sm: "24px",
                      base: "16px",
                    }}
                    fontWeight="700"
                    mb={{ lg: "10px", base: "5px" }}
                    mt={"15px"}
                  >
                    <Text
                      className="title"
                      textAlign={isLargerThan480 ? "justify" : "left"}
                    >
                      <Link
                        userSelect="none"
                        href={data.link}
                        cursor={"pointer"}
                        isExternal
                        _focus={{ outline: "none" }}
                      >
                        {data.name}
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
                    {data.description}
                  </Text>

                  {/* Tags */}
                  <Text
                    mt="5"
                    p="3px"
                    pr="10px"
                    fontWeight={"800"}
                    fontSize={{
                      xl: "19px",
                      md: "16px",
                      sm: "15px",
                      base: "10px",
                    }}
                  >
                    Tags:{" "}
                  </Text>
                  {data.tags.map((tags) => (
                    <Tag
                      key={tags}
                      className="projects-tags"
                      borderRadius={"full"}
                      m="1"
                      p="3px"
                      pl="10px"
                      pr="10px"
                      fontWeight={"800"}
                      fontSize={{
                        xl: "19px",
                        md: "16px",
                        sm: "15px",
                        base: "10px",
                      }}
                    >
                      {tags}
                    </Tag>
                  ))}
                  <Box mb="5"></Box>

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
                    <Date dateString={data.date} />
                  </Text>
                </Box>
              </li>
            </ul>
          ))}
      </Box>
    </>
  );
}
