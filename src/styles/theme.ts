import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 450,
      sm: 600,
      md: 1024,
      lg: 1280,
      xl: 1440,
    },
  },
  palette: {
    text: {
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.5)",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#ffffff",
      light: "##00D1FF",
    },
    background: {
      default: "#121212",
    },
    grayscale: {
      // 50%
      white50: "rgba(255, 255, 255, 0.5)",
      /* Greyscale/white */
      white: "#fff",
      /* Greyscale/BG - light */
      light: "#1B1B1B",
      50: "#F8F8F8",
      400: "#B2B2B2",
    },
    tutor: {
      main: "#FF9B33",
      light: "#FFD05D",
    },
  },
  typography: {
    h3: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontSize: 48,
      lineHeight: "150%",
    },
    /* Headline 5/Regular */
    h5: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 24,
      lineHeight: "150%",
      display: "flex",
      alignItems: "center",
      textTransform: "capitalize",
    },
    caption: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 12,
      lineHeight: "150%",
      letterSpacing: 0.4,
    },
    subtitle1: {
      /* Subtitle/Regular */
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "150%",
      letterSpacing: 0.15,
    },
    button: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: 14,
      lineHeight: "100%",
      textAlign: "center",
    },
    body1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: "150%",
      letterSpacing: 0.15,
    },
    body2: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "150%",
      display: "flex",
      alignItems: "center",
      letterSpacing: 0.25,
    },
  },
});

export default theme;
