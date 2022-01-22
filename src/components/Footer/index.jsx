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
      name: "my github link",
      icon: faGithub,
      link: "https://github.com/bigbeastishank",
    },
    {
      name: "my mail link",
      icon: faMailBulk,
      link: "mailto:pranjal3211p@gmail.com",
    },
    {
      name: "my instagram link",
      icon: faInstagram,
      link: "https://instagram.com/opishank",
    },
    {
      name: "my spotify link",
      icon: faSpotify,
      link: "https://open.spotify.com/user/n37h63t5acey8z9kqu3dwjp1l",
    },
    {
      name: "my discord link",
      icon: faDiscord,
      link: "https://discord.gg/WdeHDmwKFn",
    },
    {
      name: "my snapchat link",
      icon: faSnapchat,
      link: "https://snapchat.com/add/opishank",
    },
    {
      name: "my steam link",
      icon: faSteam,
      link: "https://steamcommunity.com/id/bigbeastishank",
    },
    {
      name: "my twitter link",
      icon: faTwitter,
      link: "https://twitter.com/opishank",
    },
    {
      name: "my youtube link",
      icon: faYoutube,
      link: "https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw",
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
      <Center alignItems={"center"} textAlign={"center"} mb={"2"}>
        <Text>
          Made with 💖 by{" "}
          <Link
            href="https://github.com/bigbeastishank"
            isExternal
            _focus={{ outline: "none" }}
          >
            <b>BIGBEASTISHANK</b>
          </Link>
        </Text>
      </Center>

      {/* Social Media Link */}
      <Wrap className="links" fontSize={iconSize} justify={"center"}>
        {icon.map((item) => (
          <WrapItem key={item.name}>
            <Link href={item.link} isExternal _focus={{ outline: "none" }}>
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
