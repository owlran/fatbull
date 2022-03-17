import { SyntheticEvent, useState } from "react";
import { Divider, Box, Typography } from "@mui/material";

import Navigator from "./components/Navigator";
import Profile from "./components/Profile";

import TextField from "../../components/TextField";
import Slider from "../../components/Slider";
import Button from "../../components/Button";

const marks = [
  { value: 3, label: "3" },
  { value: 6, label: "6" },
  { value: 9, label: "9" },
  { value: 12, label: "12" },
  { value: 15, label: "15" },
  { value: 19, label: "50" },
];

const dividerSx = {
  backgroundColor: "common.white",
  border: "1px solid",
  marginTop: "30px",
  borderColor: "common.white",
  opacity: 0.1,
};

const Home = () => {
  const [sliderIndex, setSliderIndex] = useState(4);
  const sliderInfo = marks[sliderIndex] ?? {};

  const handleSlider = (e: Event | SyntheticEvent, val: number | number[]) => {
    const index = marks.findIndex(({ value }) => value === val);
    setSliderIndex(index);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: "130px",
      }}
    >
      <Navigator />
      <Box sx={{ flex: 1, marginTop: "54px" }}>
        <Box sx={{ width: "725px" }}>
          <Typography variant="h5">Search</Typography>
          <Box sx={{ marginTop: "20px" }}>
            <TextField fullWidth />
          </Box>
          <Divider
            sx={{
              ...dividerSx,
            }}
          />
          <Box sx={{ marginTop: "30px" }}>
            <Typography variant="h5"># of results per page</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
              }}
            >
              30
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ alignSelf: "flex-end", marginBottom: "15px" }}
            >
              results
            </Typography>
          </Box>
          <Box sx={{ marginTop: "20px" }}>
            <Slider
              min={marks?.[0]?.value}
              max={marks?.[marks.length - 1]?.value}
              step={null}
              value={sliderInfo?.value}
              marks={marks}
              onChange={handleSlider}
            />
          </Box>
          <Divider
            sx={{
              ...dividerSx,
            }}
          />
          <Box sx={{ marginTop: "335px" }}>
            <Button>
              <Typography variant="button">Search</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Profile />
    </Box>
  );
};

export default Home;
