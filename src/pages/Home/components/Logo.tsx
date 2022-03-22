import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: "15px",
          letterSpacing: "0.47px",
          background: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
        }}
      >
        Logo
      </Typography>
    </Box>
  );
};

export default Logo;
