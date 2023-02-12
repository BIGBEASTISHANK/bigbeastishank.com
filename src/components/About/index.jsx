import {
  Box,
  Wrap,
  Text,
  Heading,
  Divider,
  WrapItem,
  useColorMode,
  useMediaQuery,
  Skeleton,
} from "@chakra-ui/react";
import {
  faCss3,
  faDiscord,
  faHtml5,
  faJs,
  faLinux,
  faOpera,
  faPython,
  faSass,
  faSpotify,
  faUnity,
  faWindows,
  faAndroid,
} from "@fortawesome/free-brands-svg-icons";
import { faC, faCode, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function About() {
  // Variables
  const [isSmallerThen590] = useMediaQuery("(max-width: 590px)");
  const { colorMode } = useColorMode();

  const Tools = [
    {
      name: "Html",
      icon: faHtml5,
    },
    {
      name: "CSS",
      icon: faCss3,
    },
    {
      name: "JavaScript",
      icon: faJs,
    },
    {
      name: "Python",
      icon: faPython,
    },
    {
      name: "SASS",
      icon: faSass,
    },
    {
      name: "C#",
      icon: faC,
    },
    {
      name: "VSCodium",
      icon: faCode,
    },
    {
      name: "Spotify",
      icon: faSpotify,
    },
    {
      name: "Brave",
      icon: faGlobe,
    },
    {
      name: "Unity",
      icon: faUnity,
    },
    {
      name: "Discord",
      icon: faDiscord,
    },
    {
      name: "Linux",
      icon: faLinux,
    },
    {
      name: "Android",
      icon: faAndroid,
    },
  ];

  return (
    <>
      <Box>
        <Heading
          fontSize={{ lg: "6xl", md: "5xl", sm: "39px", base: "25px" }}
          fontWeight="700"
          textAlign={"center"}
          mb={{ lg: "20px", md: "15px" }}
        >
          <Text className="heading" color={"primary"}>
            My Tools
          </Text>
        </Heading>
        <Wrap spacing="20px" justify="center">
          {Tools.map((item) => (
            <WrapItem key={item.name}>
              <Box bg={"rgba( 0, 0, 0, 0.085 )"} p={"10px"} borderRadius="5px">
                <FontAwesomeIcon
                  icon={item.icon}
                  fontSize={isSmallerThen590 ? "50px" : "75px"}
                />
                <Skeleton
                  h={"2px"}
                  endColor={colorMode === "dark" ? "light" : "dark"}
                  startColor={colorMode === "dark" ? "light" : "dark"}
                  mb={"15px"}
                  mt={"15px"}
                />
                <Text
                  textAlign="center"
                  fontSize={isSmallerThen590 ? "11px" : ""}
                  userSelect={"none"}
                >
                  {item.name}
                </Text>
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Box>
    </>
  );
}
