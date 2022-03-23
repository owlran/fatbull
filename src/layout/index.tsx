import { ReactNode } from "react";
import { Box } from "@mui/material";

import Navigator from "../pages/Home/components/Navigator";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "130px",
        maxHeight: "100vh",
      }}
    >
      <Navigator />
      <Box sx={{ flex: 1 }}>{children}</Box>
    </Box>
  );
};

export default Layout;
