import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    colors: {
      white: string;
      C4: string;
      C7: string;
      D9: string;
      A1: string;
      A2: string;
      A3: string;
      peach: string;
      red: string;
    };
  }
  interface PaletteOptions {
    colors: {
      white: string;
      C4: string;
      C7: string;
      D9: string;
      A1: string;
      A2: string;
      A3: string;
      peach: string;
      red: string;
    };
  }

  interface Breakpoints {
    breakpoints: {
      sm: string;
      md: string;
    };
  }
}

export const theme = createTheme({
  palette: {
    colors: {
      white: "#FFFFFF",
      C4: "#C4C4C4",
      C7: "#C7C7C7",
      D9: "#D9D9D9",
      A1: "#A1A1A1",
      A2: "#A2A2A2",
      A3: "#A3A3A3",
      peach: "#F2614E",
      red: "#EF331B",
    },
  },

  breakpoints: {
    values: {
      xs: 0,
      sm: 500,
      md: 768,
      lg: 1200,
      xl: 1536,
    },
  },
});
