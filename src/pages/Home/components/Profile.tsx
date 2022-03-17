import { SyntheticEvent, useState } from "react";

import { Theme, Box, Typography, Tabs, Tab } from "@mui/material";

const tabSx = (theme: Theme) => ({
  flex: 1,
  "&.MuiTab-root": {
    color: theme.palette.grayscale[500],
    ...theme.typography.subtitle1,
    fontWeight: "700",
    textTransform: "none",
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
});

const Profile = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "375px", marginTop: "32px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ width: "100%", flex: "1 1 auto" }}
        >
          <Tab label="Followers" sx={tabSx} />
          <Tab label="Following" sx={tabSx} />
        </Tabs>
      </Box>
      <Box
        sx={{
          pt: "35px",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <Box>Item One</Box>
        <Box>Item Two</Box>
      </Box>
    </Box>
  );
};

export default Profile;
