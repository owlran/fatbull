/* eslint-disable react-hooks/exhaustive-deps */

import { Theme, SxProps, Box, Typography } from "@mui/material";

const Result = ({
  name,
  username,
  sx,
}: {
  name: string;
  username: string;
  sx: SxProps<Theme>;
}) => {
  return (
    <Box sx={sx}>
      <Box
        sx={(theme) => ({
          width: "219px",
          height: "146px",
          backgroundColor: "common.white",
          [theme.breakpoints.down("md")]: {
            width: "100%",
            height: "223px",
          },
        })}
      ></Box>
      <Box
        sx={(theme) => ({
          mt: "12px",
          [theme.breakpoints.down("md")]: {
            mt: "21px",
          },
        })}
      >
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
