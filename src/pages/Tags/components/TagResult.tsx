import { Box, Typography } from "@mui/material";

const TagResult = ({ name, count }: { name: string; count: number }) => {
  return (
    <Box
      sx={{
        width: "150px",
        mt: "36px",
        mr: "24px",
      }}
    >
      <Box
        sx={{
          width: "100%",
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
            maxWidth: "calc(100% - 20px)",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              width: "100%",
              display: "block",
            }}
          >
            {name}
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
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {name}
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
          {`${count} results`}
        </Typography>
      </Box>
    </Box>
  );
};

export default TagResult;
