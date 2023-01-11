import React from "react";
import {
  Box,
  Icon,
  Image,
  chakra,
  Skeleton,
  useColorMode,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Home() {
  const bg = useColorModeValue("light", "dark");

  const sBtn = useColorModeValue("dark", "light");
  const nsBtn = useColorModeValue("light", "dark");

  const { colorMode } = useColorMode();

  const [isSmallerThen397] = useMediaQuery("(max-width: 397px)");

  return (
    <>
      <Box pos={"relative"} overflow={"hidden"} bg={bg} id={"about"}>
        <Box maxW={"7xl"} mx={"auto"}>
          <Box
            bg={bg}
            zIndex={1}
            pos={"relative"}
            w={{ lg: "full" }}
            maxW={{ lg: "2xl" }}
            border={"solid 1px transparent"}
            pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          >
            <Icon
              w={48}
              top={0}
              right={0}
              bottom={0}
              color={bg}
              h={"full"}
              aria-hidden={"true"}
              fill={"currentColor"}
              position={"absolute"}
              viewBox={"0 0 100 100"}
              preserveAspectRatio={"none"}
              transform={"translateX(50%)"}
              display={{ base: "none", lg: "block" }}
            >
              <polygon points={"50,0 100,0 50,100 0,100"} />
            </Icon>
            <Box
              mx={"auto"}
              maxW={{ base: "7xl" }}
              px={{ base: 4, sm: 6, lg: 8 }}
              mt={{ base: 10, sm: 12, md: 16, lg: 20, xl: 28 }}
            >
              <Box
                w={"full"}
                alignItems={"center"}
                justifyContent={"center"}
                textAlign={{ sm: "center", lg: "left" }}
              >
                <chakra.h1
                  lineHeight={"short"}
                  letterSpacing={"tight"}
                  fontWeight={"extrabold"}
                  color={useColorModeValue("gray.900", "white")}
                  fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}
                >
                  <chakra.span
                    fontSize={isSmallerThen397 ? "30px" : "45px"}
                    display={{ base: "block", xl: "inline" }}
                  >
                    I Am{" "}
                  </chakra.span>
                  <chakra.span
                    display={{ base: "block", xl: "inline" }}
                    fontSize={isSmallerThen397 ? "30px" : "45px"}
                    color={useColorModeValue("secondary", "primary")}
                  >
                    BIG BEAST ISHANK
                  </chakra.span>
                </chakra.h1>
                <chakra.p
                  mt={{ base: 3, sm: 5, md: 5 }}
                  fontSize={{ sm: "lg", md: "lg" }}
                  maxW={{ sm: "xl" }}
                  mx={{ sm: "auto", lg: 0 }}
                  color="gray.500"
                  textAlign={"justify"}
                >
<<<<<<< HEAD
                  Hello Goiz👋, My name is Ishank. I am a 16-year-old developer
=======
                  Hello Goiz👋, My name is Ishank. I am a 17-year-old developer
>>>>>>> 1460628 (MY Stuffs changes)
                  who loves open source. I am not an expert in any language; I
                  am just good at every language(I Know). I just don`t like
                  sticking to one thing, like always doing web or AI. I always
                  change steam after one project. I go from the web to the game
                  to the AI to the app, and so on. My theory is very weak, but
                  my practical knowledge is much better than yours.
                </chakra.p>
                <Box
                  mt={{ base: 5, sm: 8 }}
                  display={{ sm: "flex" }}
                  justifyContent={{ sm: "center", lg: "start" }}
                  fontWeight="extrabold"
                  fontFamily="fantasy"
                >
                  <Box>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="md"
                      color="white"
                      bg="primary"
                      _hover={{ bg: "secondary" }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      cursor="pointer"
                      href="https://bigbeastishank.com/github"
                      target={"_blank"}
                    >
                      Github
                    </chakra.a>
                  </Box>
                  <Box ml={3}>
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      border="solid 1px transparent"
                      fontSize={{ base: "md", md: "lg" }}
                      rounded="md"
                      color={nsBtn}
                      bg={sBtn}
                      _hover={{ opacity: "0.8" }}
                      cursor="pointer"
                      href="https://bigbeastishank.com/email"
                      target={"_blank"}
                    >
                      Email
                    </chakra.a>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          position={{ lg: "absolute" }}
          top={{ lg: 0 }}
          bottom={{ lg: 0 }}
          right={{ lg: 0 }}
          w={{ lg: "50%" }}
          border="solid 1px transparent"
          d={{ lg: "flex", base: "none" }}
        >
          <Image
            h={[56, 72, 96, "full"]}
            w={"full"}
            fit={{ md: "cover", base: "" }}
            src="/img/banner.webp"
            alt=""
            loading="lazy"
          />
        </Box>
      </Box>
    </>
  );
}
