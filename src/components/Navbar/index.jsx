// Importing Stufs
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  Spacer,
  Text,
  useColorMode,
  useColorModeValue,
  IconButton,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Contact from "./Contact";
export default function Navbar() {
  // Variable
  const { colorMode, toggleColorMode } = useColorMode();
  const icon_color = useColorModeValue("dark", "light");
  const icon_bg = useColorModeValue("light", "dark");

  const navItem = [
    { name: "Home", link: "/" },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "V2",
      link: "/v2",
    },
  ];

  // Returning Html
  return (
    <>
      <Box className="navbar">
        <Flex alignItems={"center"} textAlign={"center"}>
          {/* Brand Name */}
          <Text
            p={{ xl: "20px", md: "15px" }}
            color={"light"}
            as="b"
            fontSize={{ xl: "25px", md: "20px" }}
            d={{ md: "flex", base: "none" }}
            w={{ xl: "310px", lg: "214px", md: "318px" }}
          >
            <NextLink href="/">BIG BEAST ISHANK</NextLink>
          </Text>

          <Spacer d={{ md: "flex", base: "none" }} />

          {/* Navbar Items */}
          <Flex
            className="nav-item"
            mt={{ xl: "25px", md: "20px", sm: "15px" }}
            mb={{ xl: "25px", md: "20px", sm: "15px" }}
          >
            {/* Home */}
            {navItem.map((item) => (
              <ul key={item.name}>
                <li>
                  <Flex cursor={"pointer"}>
                    <NextLink href={item.link}>
                      <Text
                        id={"nav-item"}
                        aria-label={item.name}
                        fontSize={{ xl: "18px", md: "15px" }}
                        color={"light"}
                        ml={{ md: "2.5px", base: "0px" }}
                        mr={"2.5px"}
                        pl={"10px"}
                        pr={"10px"}
                        _hover={{ bg: "#D51B90", borderRadius: "25px" }}
                      >
                        <NextLink href={item.link}>{item.name}</NextLink>
                      </Text>
                    </NextLink>
                  </Flex>
                </li>
              </ul>
            ))}

            {/* Contact funciton and template import */}
            <Contact />
          </Flex>

          <Spacer d={{ md: "none", base: "flex" }} />

          {/* Dark Mode Switch */}
          {/* For Pc and Tabs */}
          <IconButton
            d={{ md: "flex", base: "none" }}
            m={"16px"}
            outline={"none"}
            icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            bg={icon_bg}
            color={icon_color}
            border={"none"}
            isRound={"true"}
            _hover={{ bg: icon_color, color: icon_bg }}
            onClick={toggleColorMode}
            aria-label="color mode toggle button"
          />

          {/* For Mobiles */}
          <IconButton
            size={"sm"}
            d={{ md: "none", sm: "flex", base: "none" }}
            m={"16px"}
            outline={"none"}
            icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            bg={icon_bg}
            color={icon_color}
            border={"none"}
            isRound={"true"}
            _hover={{ bg: icon_color, color: icon_bg }}
            onClick={toggleColorMode}
            aria-label="color mode toggle button"
          />

          {/* For small mobiles */}
          <IconButton
            size={"xs"}
            d={{ sm: "none", base: "flex" }}
            m={"16px"}
            outline={"none"}
            icon={colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
            bg={icon_bg}
            color={icon_color}
            border={"none"}
            isRound={"true"}
            _hover={{ bg: icon_color, color: icon_bg }}
            onClick={toggleColorMode}
            aria-label="color mode toggle button"
          />
        </Flex>
      </Box>
    </>
  );
}
