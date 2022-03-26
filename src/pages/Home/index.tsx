import { SyntheticEvent, useState } from "react";
import {
  useTheme,
  useMediaQuery,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

// import Navigator from "./components/Navigator";
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
  marginTop: "26px",
  borderColor: "common.white",
  opacity: 0.1,
};

const Home = () => {
  const navigate = useNavigate();
  const [sliderIndex, setSliderIndex] = useState(4);
  const [keyword, setKeyword] = useState("");
  const themeObject = useTheme();
  const matchMd = useMediaQuery(themeObject.breakpoints.down("md"));

  const handleKeywordChange = (event: SyntheticEvent) => {
    const { value } = event.currentTarget as HTMLInputElement;
    setKeyword(value);
  };

  const sliderInfo = marks[sliderIndex] ?? {};

  const handleSlider = (e: Event | SyntheticEvent, val: number | number[]) => {
    const index = marks.findIndex(({ value }) => value === val);
    setSliderIndex(index);
  };

  const handleSearch = () => {
    navigate(`/results?page=1&pageSize=${sliderInfo.value}&keyword=${keyword}`);
  };

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        gap: "130px",
        height: "100%",
        ml: "210px",
        [theme.breakpoints.down("md")]: {
          width: "100%",
          ml: 0,
        },
      })}
    >
      {/* <Navigator /> */}
      <Box
        sx={(theme) => ({
          flex: 1,
          marginTop: "54px",
          [theme.breakpoints.down("md")]: {
            mt: 0,
          },
        })}
      >
        <Box
          sx={(theme) => ({
            width: "725px",
            height: "100%",
            position: "relative",
            [theme.breakpoints.down("md")]: {
              width: "100%",
              padding: "2px 20px",
            },
          })}
        >
          <Typography
            variant="h5"
            sx={{
              mt: "-4px",
            }}
          >
            Search
          </Typography>
          <Box
            sx={(theme) => ({
              mt: "21px",
              width: "725px",
              [theme.breakpoints.down("md")]: {
                mt: "16px",
                width: "100%",
              },
            })}
          >
            <TextField
              fullWidth
              placeholder="Keyword"
              value={keyword}
              onChange={handleKeywordChange}
            />
          </Box>
          <Divider
            sx={(theme) => ({
              ...dividerSx,
              [theme.breakpoints.down("md")]: {
                display: "none",
              },
            })}
          />
          <Box
            sx={(theme) => ({
              mt: "31px",
              [theme.breakpoints.down("md")]: {
                mt: "28px",
              },
            })}
          >
            <Typography variant="h5"># of results per page</Typography>
          </Box>
          <Box
            sx={(theme) => ({
              display: "flex",
              gap: "10px",
              mt: "20px",
              [theme.breakpoints.down("md")]: {
                mt: "16px",
              },
            })}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                lineHeight: "50px",
              }}
            >
              {sliderInfo.label}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ alignSelf: "flex-end", mb: "4px" }}
            >
              {matchMd ? "result" : "results"}
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              mt: "15px",
              [theme.breakpoints.down("md")]: {
                mt: "9px",
                ml: "-6px",
              },
            })}
          >
            <Slider
              min={marks?.[0]?.value}
              max={marks?.[marks.length - 1]?.value}
              step={null}
              value={sliderInfo?.value}
              marks={marks}
              onChange={handleSlider}
              sx={{
                ml: "1px",
                "& .MuiSlider-markLabelActive": {
                  [`&[data-index="${sliderIndex}"]`]: {
                    opacity: 1,
                  },
                },
              }}
            />
          </Box>
          <Divider
            sx={(theme) => ({
              ...dividerSx,
              [theme.breakpoints.down("md")]: {
                mt: "221px",
              },
            })}
          />
          <Box
            sx={(theme) => ({
              position: "relative",
              top: "338px",
              width: "343px",
              [theme.breakpoints.down("md")]: {
                width: "100%",
                position: "static",
                mt: "69px",
              },
            })}
          >
            <Button style={{ width: "100%" }} onClick={handleSearch}>
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
