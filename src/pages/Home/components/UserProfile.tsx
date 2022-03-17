import { Theme, Typography, Box, Tabs, Tab } from "@mui/material";

import Button from "../../../components/Button";

const photoSx = (theme: Theme) => ({
  // TODO: revise to 100% when put image
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.grayscale[50]}`,
});

const UserProfile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "15px",
      }}
    >
      <Box sx={photoSx}>P</Box>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="body1">Fullname</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5 }}>
          @Fullname
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            p: "8px 10px",
          }}
        >
          Follow
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
