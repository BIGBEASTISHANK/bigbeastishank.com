// Importing  Stuffs
import { Link, Skeleton, Text, Center, Flex } from "@chakra-ui/react";
import Image from "next/image";

export default function Footer() {
  // Variables
  const s_media_path = "/images/footer-link/";
  const icon_width = "30px";
  const icon_height = "30px";

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
          <Link href="https://github.com/bigbeastishank" isExternal>
            <b>BIGBEASTISHANK</b>
          </Link>
        </Text>
      </Center>

      {/* Social Media Link */}
      <Center alignItems={"center"} textAlign={"center"} className="img">
        <Flex>
          {/* Github */}
          <Link
            className="links"
            href="https://github.com/bigbeastishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "github.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Email */}
          <Link
            className="links"
            href="mailto:pranjal3211p@gmail.com"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "email.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Instagram */}
          <Link
            className="links"
            href="https://instagram.com/opishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "instagram.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Spotify */}
          <Link
            className="links"
            href="https://open.spotify.com/user/n37h63t5acey8z9kqu3dwjp1l"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "spotify.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Discord */}
          <Link
            className="links"
            href="https://discord.gg/WdeHDmwKFn"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "discord.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* SnapChat */}
          <Link
            className="links"
            href="https://snapchat.com/add/opishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "snapchat.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Steam */}
          <Link
            className="links"
            href="https://steamcommunity.com/id/bigbeastishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "steam.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Twitter */}
          <Link
            className="links"
            href="https://twitter.com/opishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "twitter.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>
          <Link
            className="links"
            href="https://www.youtube.com/channel/UCw6lNThNWxwz1cz5rvR1Rdw"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            {/* Youtube */}
            <Image
              alt=""
              src={s_media_path + "youtube.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>

          {/* Fiverr */}
          <Link
            className="links"
            href="https://fiverr.com/bigbeastishank"
            isExternal
            m={"2px"}
            mt={"8px"}
          >
            <Image
              alt=""
              src={s_media_path + "fiverr.webp"}
              height={icon_height}
              width={icon_width}
            ></Image>
          </Link>
        </Flex>
      </Center>
    </>
  );
}
