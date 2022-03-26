import { SyntheticEvent, useState } from "react";

import { useTheme, useMediaQuery, Theme, Box, Tabs, Tab } from "@mui/material";

import FriendList from "./FriendList";
import FollowingList from "./FollowingList";

const tabSx = (theme: Theme) => ({
  width: "187px",
  height: "33px",
  minHeight: "33px",
  padding: "0 0 5px 0",
  pb: "4px",
  flex: 1,
  "&.MuiTab-root": {
    color: theme.palette.grayscale[500],
    ...theme.typography.subtitle1,
    fontWeight: 700,
    textTransform: "none",
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
});

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xl"));
  if (matches) {
    return null;
  }

  const handleChange = (event: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  return (
    <Box sx={{ width: "375px", marginTop: "32px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ width: "100%", flex: "1 1 auto", minHeight: "33px" }}
        >
          <Tab label="Followers" sx={tabSx} />
          <Tab label="Following" sx={tabSx} />
        </Tabs>
      </Box>
      <Box
        sx={{
          pt: "32px",
        }}
      >
        {tabValue === 1 ? <FollowingList /> : <FriendList />}
      </Box>
    </Box>
  );
};

export default Profile;
