// Importing themes
import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import breakpoints from "./Global/breakPoints";
import config from "./Global/colorMode";

// Variable to store theme
const theme = extendTheme(config, breakpoints, styles);

// Exporting theme
export default theme;
