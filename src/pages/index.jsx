// Importing Stuffs
import {
  Box,
  Heading,
  Text,
  Link,
  Input,
  InputGroup,
  InputRightElement,
  Skeleton,
  Tag,
  useMediaQuery,
  chakra,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import Head from "next/head";
import NextLink from "next/link";
import Date from "../components/date";
import Hero from "../components/Hero";
import About from "../components/About";
import Updates from "../components/Updates";
import { SearchIcon } from "@chakra-ui/icons";
import { getSortedPostsData } from "../lib/posts";

export default function Index({ allPostsData }) {
  // Variable
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const { colorMode } = useColorMode();

  // Returning Html
  return (
    <>
      <Head>
        <meta
          property="og:description"
          name="description"
          content="V3.0: This me Ishank. This is my portfolio wesite, I post blogs and you can see my projects over here."
        />

        <meta
          property="og:keywords"
          name="keywords"
          content="home, landing page, header, hero, ishank, pranjal"
        />
        <title>Home | BIG BEAST ISHANK</title>
      </Head>

      <Box>
        {/* Hero section */}
        <Hero />

        {/* About section */}
        <About />

        {/* Divider */}
        <Skeleton
          h={"2px"}
          endColor={colorMode === "dark" ? "light" : "dark"}
          startColor={colorMode === "dark" ? "light" : "dark"}
          mb={"1%"}
          mt={"1%"}
        />

        {/* Updates section */}
        <Updates />

        {/* Blog */}
        <Box className="blog">
          {/* Divider */}
          <Skeleton
            h={"2px"}
            endColor={colorMode === "dark" ? "light" : "dark"}
            startColor={colorMode === "dark" ? "light" : "dark"}
            mb={"1%"}
            mt={"1%"}
          />
          {/* Blog Heading */}
          <Heading
            fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
            fontWeight="700"
            textAlign={"center"}
            mb={{ lg: "20px", md: "15px" }}
          >
            <Text className="heading" color={"primary"}>
              My Blog
            </Text>
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
            {/* Something about blog */}
            <Text>
              Welcome to my technology blog! This is where I share my knowledge
              and expertise on the ever-evolving world of coding and the IT
              industry. Whether you&apos;re a seasoned programmer or just
              starting to explore the field, you&apos;ll find something of
              interest here. I delve into the latest technologies, programming
              languages, and software development trends, offering insights and
              tips for anyone looking to improve their skills and advance their
              career in the tech sector. So grab a cup of coffee and join me on
              this journey through the fascinating world of coding and
              technology!
            </Text>
          </Box>

          <InputGroup m="auto" mb="40px" mt="40px">
            <InputRightElement
              pointerEvents="none"
              children={<SearchIcon className="searchIcon" boxSize="5" />}
            />
            <Input
              className="search-bar"
              type="text"
              placeholder="Search with title or tags..."
              _placeholder={{ color: colorMode === "dark" ? "light" : "dark" }}
              _focus={{ outline: "none" }}
              userSelect={"none"}
              border={"2px solid"}
              borderColor={colorMode === "dark" ? "light" : "dark"}
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </InputGroup>

          {/* Blog Frontmatter data */}
          {allPostsData
            .filter((item) => {
              if (searchTerm == "") {
                return item;
              } else if (
                item.htags.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <ul key={item.id}>
                <chakra.li listStyleType={"none"}>
                  <Box
                    mb={50}
                    className="posts"
                    bg={"rgba( 0, 0, 0, 0.085 )"}
                    p={"10px"}
                    borderRadius={"25px"}
                    id={item.id}
                  >
                    {/* Blog TItle */}
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
                        color={"primary"}
                      >
                        <Link href={`/blog/${item.id}`} userSelect="none">
                          <NextLink
                            href={`/blog/${item.id}`}
                            cursor={"pointer"}
                          >
                            {item.title}
                          </NextLink>
                        </Link>
                      </Text>
                    </Heading>

                    {/* Blog Description */}
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
                      {item.description}
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
                    {item.tags.map((tags) => (
                      <Tag
                        key={tags}
                        className="blog-tags"
                        overflow={"hidden"}
                        userSelect={"none"}
                        borderRadius={"full"}
                        color={"light"}
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
                        bg={"secondary"}
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
                      <Date dateString={item.date} />
                    </Text>
                  </Box>
                </chakra.li>
              </ul>
            ))}
        </Box>
      </Box>
    </>
  );
}

// Function to get posts data
export async function getStaticProps() {
  // Getting posts data
  const allPostsData = getSortedPostsData();

  // Returning posts data
  return {
    props: {
      allPostsData,
    },
  };
}
