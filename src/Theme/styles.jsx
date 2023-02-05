// Importing stuffs
import { mode } from "@chakra-ui/theme-tools";

// Styling stuffs
const styles = {
  colors: {
    primary: "#2e94c5",
    secondary: "#287fca",
    dark: "#1A202C",
    light: "white",
    lightBG: "rgba(0, 0, 0, 0.05)",
  },

  fonts: {
    body: "Yusei Magic",
    heading: "Yusei Magic",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode("lightBG", "dark")(props),
        color: mode("black", "white") (props),
      },
    }),
  },
};

// Export Style
export default styles;
