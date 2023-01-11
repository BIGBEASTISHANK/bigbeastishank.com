import { createBreakpoints } from "@chakra-ui/theme-tools";

// Creating custome breakpoint
const breakpoints = createBreakpoints({
  sm: "208px", // 208px and upwards
  md: "600px", // 600px and upwards
  lg: "775px", // 775px and upwards
  xl: "960px", // 960px and upwards
});

// Exporting custome breakpoint
export default { breakpoints };