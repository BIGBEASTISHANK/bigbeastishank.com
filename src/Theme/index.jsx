import styles from "./styles";
import config from "./Globals/colorMode";
import breakPoints from "./Globals/breakPoints";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(styles, config, breakPoints);

export default theme;
