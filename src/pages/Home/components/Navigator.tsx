import { Box, useTheme, useMediaQuery } from "@mui/material";

import Drawer from "./Drawer";
import BottomNavigator from "./BottomNavigator";

const Navigator = () => {
  const theme = useTheme();
  const showButtomNavigator = useMediaQuery(theme.breakpoints.down("md"));
  console.log({ showButtomNavigator });

  return (
    <Box>
      <Box>Navigator</Box>
      <Box>
        {showButtomNavigator ? (
          <BottomNavigator />
        ) : (
          <Drawer variant="permanent">123</Drawer>
        )}
      </Box>
    </Box>
  );
};

export default Navigator;
