import { ReactNode } from "react";
import { Box } from "@mui/material";
import { useMatch } from "react-router-dom";

import Navigator from "../pages/Home/components/Navigator";
import Logo from "../pages/Home/components/Logo";

const Layout = ({ children }: { children: ReactNode }) => {
  const matchedHome = useMatch("/");

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        maxHeight: "100vh",
        [theme.breakpoints.down("md")]: {
          flexDirection: "column",
          gap: 0,
        },
      })}
    >
      {matchedHome && (
        <Box
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "block",
              pl: "21px",
              pt: "28px",
              pb: "27px",
            },
          })}
        >
          <Logo />
        </Box>
      )}
      <Box
        sx={(theme) => ({
          [theme.breakpoints.down("md")]: {
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          },
        })}
      >
        <Navigator />
      </Box>
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
