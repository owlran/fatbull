/* eslint-disable react-hooks/exhaustive-deps */

import { Box, Typography } from "@mui/material";

const Result = ({ name, username }: { name: string; username: string }) => {
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
          {name}
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
          {username}
        </Typography>
      </Box>
    </Box>
  );
};

export default Result;
