// Importing  Stuffs
import { Link, Skeleton, Text, Center, Wrap, WrapItem } from "@chakra-ui/react";
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
        startColor="pink.500"
        endColor="orange.500"
        ml={"-30px"}
        mr={"-30px"}
        w={"810"}
        h={"2px"}
        mb={4}
        mt={4}
      />

      {/* Made By text */}
      <Center
        alignItems={"center"}
        textAlign={"center"}
        mb={"2"}
        d={"block"}
        className="credits"
      >
        {/* My name */}
        <Text mb="3px">
          Made with 💖 by{" "}
          <Link
            href="https://github.com/bigbeastishank"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b>BIGBEASTISHANK</b>
          </Link>
        </Text>

        {/* Helper */}
        <Text>
          Helped by{" "}
          <Link
            href="https://tanmaysinha.host/"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b>Tanmay Sinha</b>
          </Link>{" "}
          &{" "}
          <Link
            href="https://github.com/brucemacgary"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b>BruceMacGary</b>
          </Link>
        </Text>
        <br />
        {/* Hosting */}
        <Text>
          Made with
          <Link
            href="https://nextjs.org"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b> Next-JS</b>
          </Link>
          , Hosted on
          <Link
            href="https://vercel.com/"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b> Vercel</b>
          </Link>
          , Designed with
          <Link
            href="https://chakra-ui.com/"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b> Chakra-UI</b>
          </Link>
          , Code is
          <Link href="/sourcecode" isExternal _focus={{ outline: "none" }}>
            <b> Open Source</b>
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
    </>
  );
}
