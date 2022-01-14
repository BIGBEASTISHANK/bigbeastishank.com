import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import breakpoints from "./Global/breakPoints";
import config from "./Global/colorMode";

const theme = extendTheme(config, breakpoints, styles);

export default theme;
