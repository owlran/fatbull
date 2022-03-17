import { Box, Typography } from "@mui/material";

const TagResult = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          backgroundColor: "rgba(255, 255, 255, 0.06)",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <Box
          sx={{
            border: "4px solid",
            borderColor: "common.white",
            borderRadius: "8px",
            p: "7px 14px",
            display: "inline-flex",
            position: "absolute",
            left: "10px",
            bottom: "14px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              display: "inline-flex",
              fontWeight: 700,
            }}
          >
            Cool
          </Typography>
        </Box>
      </Box>
      <Box sx={{ mt: "10px" }}>
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

export default TagResult;
