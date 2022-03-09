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
    primary: {
      main: "#ffffff",
    },
    background: {
      default: "#121212",
    },
  },
});

export default theme;
