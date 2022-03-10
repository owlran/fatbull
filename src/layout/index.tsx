import { ReactNode } from "react";
import { Box } from "@mui/material";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

export default Layout;
