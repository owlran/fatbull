import { Box, Typography } from "@mui/material";

const Result = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "219px",
          height: "146px",
          backgroundColor: "common.white",
        }}
      ></Box>
      <Box sx={{ mt: "12px" }}>
        <Typography
          sx={{
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: 14.9,
            lineHeight: "150%",
            letterSpacing: "0.139688px",
            color: "grayscale.white",
          }}
        >
          Cool
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Ubuntu",
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "11.175px",
            lineHeight: "150%",
            letterSpacing: "0.3725px",
            color: "grayscale.400",
          }}
        >
          350 results
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
