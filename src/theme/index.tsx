import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
import "@fontsource/saira/500.css";
import "@fontsource/saira/300.css";

const fonts = {
  main: 'Saira, sans-serif',
};

const colors = {
  purple: {
    0: "#4361EE",
  },
  blue: {
    0: "#46EEF8",
    100: "#71F7FF",
    200: "#060B22",
    300:'#070c26',
  },
  white: {
    0: "#ffffff",
  },
};

const theme = extendTheme({
    styles: {
        global: (props:any) => {
          return {
            body: {
              bgColor: mode('purple.0', 'purple.0')(props),
            },
        }}},
  colors,
  fonts,
});
export default theme;