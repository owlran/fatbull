import { Theme, Typography, Box } from "@mui/material";

import Button from "../../../components/Button";

const photoSx = (theme: Theme) => ({
  width: "40px",
  height: "40px",
  borderRadius: "5px",
  border: `1px solid ${theme.palette.grayscale[50]}`,
});

const UserProfile = ({
  isFollowing,
  name,
  username,
}: {
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
        padding: "0 16px",
      }}
    >
      <Box sx={photoSx}>
        {/* avater url is not work, so just leave place here */}
        {/* <img src={avater} alt={username} /> */}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <Typography variant="body1">{name}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5 }}>
          @{username}
        </Typography>
      </Box>
      <Box>
        <Button
          variant={isFollowing ? "outlined" : "contained"}
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
