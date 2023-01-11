// Importing  Stuffs
import {
  Link,
  Skeleton,
  Text,
  Center,
  Wrap,
  WrapItem,
  Box,
  chakra,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  faDiscord,
  faGithub,
  faInstagram,
  faSnapchat,
  faSpotify,
  faSteam,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  // Variables
  const iconSize = { lg: "30px", sm: "25px", base: "20px" };

  const { colorMode } = useColorMode();

  const icon = [
    {
      name: "github",
      icon: faGithub,
    },
    {
      name: "email",
      icon: faMailBulk,
    },
    {
      name: "instagram",
      icon: faInstagram,
    },
    {
      name: "spotify",
      icon: faSpotify,
    },
    {
      name: "discord",
      icon: faDiscord,
    },
    {
      name: "snapchat",
      icon: faSnapchat,
    },
    {
      name: "steam",
      icon: faSteam,
    },
    {
      name: "twitter",
      icon: faTwitter,
    },
    {
      name: "youtube",
      icon: faYoutube,
    },
  ];

  // Return Html
  return (
    <>
      {/* Footer Divider Line */}
      <Skeleton
        h={"2px"}
        endColor={colorMode === "dark" ? "light" : "dark"}
        startColor={colorMode === "dark" ? "light" : "dark"}
      />

      <Box bg={useColorModeValue("lightBG", "dark")} mx={"auto"} pt={"20px"} userSelect="none">
        {/* Made By text */}
        <Center
          alignItems={"center"}
          textAlign={"center"}
          mb={"2"}
          d={"block"}
          className="footer"
        >
          {/* My name */}
          <Text mb="3px">
            Made with 💖 by{" "}
            <Link
              href="https://github.com/bigbeastishank"
              isExternal
              _focus={{ outline: "none" }}
              fontWeight={"bold"}
              color="primary"
            >
              BIGBEASTISHANK
            </Link>
          </Text>

          <br />
          {/* Hosting */}
          <Text>
            Made with{" "}
            <Link
              href="https://nextjs.org"
              isExternal
              _focus={{ outline: "none" }}
              fontWeight={"bold"}
              color="primary"
            >
              Next-JS
            </Link>
            , Hosted on{" "}
            <Link
              href="https://vercel.com/"
              isExternal
              _focus={{ outline: "none" }}
              fontWeight={"bold"}
              color="primary"
            >
              Vercel
            </Link>
            , Designed with{" "}
            <Link
              href="https://chakra-ui.com/"
              isExternal
              _focus={{ outline: "none" }}
              fontWeight={"bold"}
              color="primary"
            >
              Chakra-UI
            </Link>
            , Code is{" "}
            <Link
              href="/sourcecode"
              isExternal
              _focus={{ outline: "none" }}
              fontWeight={"bold"}
              color="primary"
            >
              Open Source
            </Link>
          </Text>
        </Center>

        {/* Social Media Link */}
        <Wrap className="links" fontSize={iconSize} justify={"center"}>
          {icon.map((item) => (
            <WrapItem key={item.name}>
              <Link
                href={`/${item.name}`}
                isExternal
                _focus={{ outline: "none" }}
                fontWeight={"bold"}
                color="primary"
              >
                <FontAwesomeIcon
                  icon={item.icon}
                  className="icon"
                  aria-label={item.name}
                />
              </Link>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
