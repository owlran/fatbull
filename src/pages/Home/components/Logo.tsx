import { Typography } from "@mui/material";

const Logo = () => {
  return (
    <Typography
      sx={{
        height: 15,
        textTransform: "uppercase",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 13,
        lineHeight: "15px",
        letterSpacing: "-0.05em",
        background:
          "-webkit-linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Logo
    </Typography>
  );
};

export default Logo;
