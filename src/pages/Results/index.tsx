import { Divider, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Profile from "../Home/components/Profile";

import Button from "../../components/Button";
import VectorIcon from "../../icons/Vector";
import Result from "./components/Result";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  gap: "130px",
};

const Results = () => {
  const navigate = useNavigate();

  return (
    <Box sx={containerSx}>
      <Box sx={{ mt: "92px" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            ml: "-37.5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <VectorIcon />
          <Typography variant="h4">{`Results`}</Typography>
        </Box>
        <Box sx={{ mt: "24px", display: "flex", gap: "34px" }}>
          <Result />
          <Result />
          <Result />
          <Result />
          <Result />
        </Box>
        <Box sx={{ mt: "39px" }}>
          <Button>
            <Typography variant="button">More</Typography>
          </Button>
        </Box>
      </Box>
      <Box>
        <Profile />
      </Box>
    </Box>
  );
};

export default Results;
