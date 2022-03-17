import { Divider, Box, Typography } from "@mui/material";

import Button from "../../components/Button";
import VectorIcon from "../../icons/Vector";

import TagResult from "./components/TagResult";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  gap: "130px",
};

const Tags = () => {
  return (
    <Box sx={containerSx}>
      <Box sx={{ mt: "80px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography variant="h4">Tags</Typography>
        </Box>
        <Box sx={{ mt: "24px", display: "flex", gap: "24px" }}>
          <TagResult />
          <TagResult />
          <TagResult />
          <TagResult />
          <TagResult />
          <TagResult />
        </Box>
      </Box>
    </Box>
  );
};

export default Tags;
