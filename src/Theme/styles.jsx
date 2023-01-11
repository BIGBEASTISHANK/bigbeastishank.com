import { mode } from "@chakra-ui/theme-tools";

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
        color: mode("black", "light")(props),
      },
    }),
  },
};

export default styles;
