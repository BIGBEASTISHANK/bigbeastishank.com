// Importing  Stuffs
import { Link, Skeleton, Text, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  // Variables
  const s_media_path = "/images/footer-link/";
  const icon_width = "30px";
  const icon_height = "30px";

  const icon = [
    {
      name: "github",
      link: "https://github.com/bigbeastishank",
    },
    {
      name: "email",
      link: "mailto:pranjal3211p@gmail.com",
    },
    {
      name: "instagram",
      link: "https://instagram.com/opishank",
    },
    {
      name: "spotify",
      link: "https://open.spotify.com/user/n37h63t5acey8z9kqu3dwjp1l",
    },
    {
      name: "discord",
      link: "https://discord.gg/WdeHDmwKFn",
    },
    {
      name: "snapchat",
      link: "https://snapchat.com/add/opishank",
    },
    {
      name: "steam",
      link: "https://steamcommunity.com/id/bigbeastishank",
    },
    {
      name: "twitter",
      link: "https://twitter.com/opishank",
    },
    {
      name: "youtube",
      link: "https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw",
    },
    {
      name: "fiverr",
      link: "https://fiverr.com/bigbeastishank",
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
      <Center alignItems={"center"} textAlign={"center"}>
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
      <Center alignItems={"center"} textAlign={"center"} className="img">
        {icon.map((item) => (
          <li key={item.name}>
            <Flex>
              {/* Github */}
              <Link
                className="links"
                _focus={{ outline: "none" }}
                href={item.link}
                isExternal
                m={"2px"}
                mt={"8px"}
              >
                <Image
                  alt={item.name}
                  src={s_media_path + item.name + ".webp"}
                  height={icon_height}
                  width={icon_width}
                ></Image>
              </Link>
            </Flex>
          </li>
        ))}
      </Center>
    </>
  );
}
