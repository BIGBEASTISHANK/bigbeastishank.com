import {
  Box,
  Flex,
  Text,
  Spacer,
  Skeleton,
  IconButton,
  useColorMode,
  useColorModeValue,
  Link as ChakraLink,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export default function Navbar() {
  // Variable
  const { colorMode, toggleColorMode } = useColorMode();

  const icon_bg = useColorModeValue("dark", "light");
  const icon_color = useColorModeValue("light", "dark");

  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skills",
    },
    {
      name: "Projects",
      link: "/#projects",
    },
    {
      name: "V1.0",
      link: "https://v1.bigbeastishank.com",
    },
    {
      name: "V3.0",
      link: "https://bigbeastishank.com",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];

  return (
    <>
      <Flex maxW={"95%"} m={"auto"}>
        {/* Brand Name */}
        <Box
          className={"navbar"}
          m={{ xl: "15px", lg: "13px" }}
          d={{ lg: "flex", base: "none" }}
        >
          <Text
            fontSize={{
              xl: "30px",
              lg: "25px",
            }}
            fontWeight={"1000"}
            userSelect={"none"}
            fontFamily={"Andika New Basic"}
          >
            <NextLink href={"/"}>~BIGBEASTISHANK~</NextLink>
          </Text>
        </Box>

        {/* Spacer */}
        <Spacer d={{ lg: "flex", base: "none" }} />

        {/* Navitems */}
        <Flex
          overflowX={"auto"}
          className={"navitem"}
          m={{ lg: "auto", base: "10px" }}
          ml={{ lg: "0px", base: "auto" }}
          mr={{ lg: "15px", base: "auto" }}
        >
          {navItems.map((item) => (
            <Text
              key={item.name}
              p={"10px"}
              fontSize={{
                xl: "20px",
                lg: "18px",
              }}
              fontWeight={"700"}
              userSelect={"none"}
            >
              <ChakraLink>
                <NextLink href={item.link}>{item.name}</NextLink>
              </ChakraLink>
            </Text>
          ))}
        </Flex>
        {/* Dark Mode Switch */}
        {/* For Pc and Tabs */}
        <IconButton
          m={"16px"}
          bg={icon_bg}
          border={"none"}
          isRound={"true"}
          outline={"none"}
          color={icon_color}
          onClick={toggleColorMode}
          _focus={{ outline: "none" }}
          d={{ md: "flex", base: "none" }}
          aria-label={"color mode toggle button"}
          _hover={{ bg: icon_color, color: icon_bg }}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />

        {/* For Mobiles */}
        <IconButton
          m={"16px"}
          size={"sm"}
          bg={icon_bg}
          border={"none"}
          isRound={"true"}
          outline={"none"}
          color={icon_color}
          onClick={toggleColorMode}
          _focus={{ outline: "none" }}
          aria-label="color mode toggle button"
          _hover={{ bg: icon_color, color: icon_bg }}
          d={{ md: "none", sm: "flex", base: "none" }}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />

        {/* For small mobiles */}
        <IconButton
          m={"16px"}
          size={"xs"}
          bg={icon_bg}
          border={"none"}
          outline={"none"}
          isRound={"true"}
          color={icon_color}
          onClick={toggleColorMode}
          _focus={{ outline: "none" }}
          d={{ sm: "none", base: "flex" }}
          aria-label="color mode toggle button"
          _hover={{ bg: icon_color, color: icon_bg }}
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        />
      </Flex>

      {/* Divides Navbar */}
      <Skeleton
        h={"2px"}
        endColor={colorMode === "dark" ? "light" : "dark"}
        startColor={colorMode === "dark" ? "light" : "dark"}
      />
    </>
  );
}
