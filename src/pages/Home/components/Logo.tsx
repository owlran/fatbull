import { Box, Typography } from "@mui/material";

const Logo = () => {
  return (
    <Box
      sx={(theme) => ({
        width: "80px",
        height: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("md")]: {
          width: "auto",
          height: "auto",
          justifyContent: "flex-start",
        },
      })}
    >
      <Typography
        sx={{
          fontFamily: "Ubuntu",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "13px",
          lineHeight: "15px",
          letterSpacing: "-0.05em",
          background: "linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
          backgroundClip: "text",
          textFillColor: "transparent",
          textTransform: "Uppercase",
        }}
      >
        Logo
      </Typography>
    </Box>
  );
};

export default Logo;
