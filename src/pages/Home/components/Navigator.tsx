import { Box, useTheme, useMediaQuery } from "@mui/material";

import Drawer from "./Drawer";
import BottomNavigator from "./BottomNavigator";

const Navigator = () => {
  const theme = useTheme();
  const matchMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box>
      <Box>
        {matchMd ? (
          <BottomNavigator />
        ) : (
          <Drawer variant="permanent">123</Drawer>
        )}
      </Box>
    </Box>
  );
};

export default Navigator;
