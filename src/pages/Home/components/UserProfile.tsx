import { Theme, Typography, Box, Tabs, Tab } from "@mui/material";

import Button from "../../../components/Button";

const photoSx = (theme: Theme) => ({
  // TODO: revise to 100% when put image
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.grayscale[50]}`,
});

const UserProfile = ({
  avatar,
  id,
  isFollowing,
  name,
  username,
}: {
  avatar: string;
  id: string;
  isFollowing: boolean;
  name: string;
  username: string;
}) => {
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
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5 }}>
          @{username}
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            p: "8px 10px",
          }}
        >
          {isFollowing ? "Following" : "Follow"}
        </Button>
      </Box>
    </Box>
  );
};

export default UserProfile;
