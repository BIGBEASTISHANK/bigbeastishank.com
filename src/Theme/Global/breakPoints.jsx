import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "280px", // 280px and upwards
  md: "600px", // 600px and upwards
  lg: "768px", // 768px and upwards
  xl: "960px", // 960px and upwards
});

export default { breakpoints };
