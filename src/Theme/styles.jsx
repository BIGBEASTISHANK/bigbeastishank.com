import { mode } from "@chakra-ui/theme-tools";

const styles = {
  colors: {
    primary: "#2e94c5",
    secondary: "#287fca",
    dark: "#1A202C",
    light: "white",
    lightMBg: "rgba(0, 0, 0, 0.13)",
  },

  fonts: {
    body: "Yusei Magic",
    heading: "Yusei Magic",
  },

  styles: {
    global: (props) => ({
      body: {
        bg: mode("lightMBg", "dark")(props),
      },
    }),
  },
};

export default styles;
