import "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface Palette {
    grayscale: {
      white50: string;
      white: string;
      light: string;
      50: string;
      400: string;
    };
    tutor: {
      main: string;
      light: string;
    };
  }
  interface PaletteOptions {
    grayscale?: {
      white50: string;
      white: string;
      light: string;
      50: string;
      400: string;
    };
    tutor?: {
      main: string;
      light: string;
    };
  }
}
