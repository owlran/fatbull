import { Slider as MuiSlider, SliderProps } from "@mui/material";

const thumbSize = 25;

export default function Slider(props: SliderProps) {
  return (
    <MuiSlider
      {...props}
      sx={(theme) => ({
        "& .MuiSlider-marked": {
          height: 8,
        },
        "& .MuiSlider-rail": {
          backgroundColor: "common.white",
          opacity: 0.3,
          boxSizing: "border-box",
        },
        "& .MuiSlider-thumb": {
          width: thumbSize,
          height: thumbSize,
          left: `calc(50% - ${thumbSize / 2}px)`,
          top: `calc(50% - ${thumbSize / 2}px)`,
          backgroundColor: "#1B1B1B",
          border: "6px solid #FFD05D",
          transform: `matrix(-1, 0, 0, 1, ${-thumbSize / 2}, 0)`,
        },
        "& .MuiSlider-track": {
          height: "8px",
          background: `linear-gradient(to right, #FF5C01, #FFD25F)`,
          border: "none",
        },
        "& .MuiSlider-mark": {
          opacity: 0,
        },
        "& .MuiSlider-markLabel": {
          opacity: 0.5,
          color: "common.white",
          fontWeight: "500",
          fontSize: 16,
          lineHeight: "150%",
          letterSpacing: 0.15,
          top: "33px",
          '&[data-index="0"]': {
            transform: "none",
            ml: "-0.5px",
          },
          '&[data-index="1"]': {
            ml: "1px",
          },
          '&[data-index="3"]': {
            ml: "3px",
          },
          '&[data-index="4"]': {
            ml: "0.5px",
          },
          '&[data-index="5"]': {
            ml: "-5.5px",
          },
          [theme.breakpoints.down("md")]: {
            '&[data-index="0"]': {
              transform: "none",
              ml: "4px",
              mt: "5px",
            },
            '&[data-index="1"]': {
              ml: "2px",
              mt: "5px",
            },
            '&[data-index="2"]': {
              ml: "-4px",
              mt: "5px",
            },
            '&[data-index="3"]': {
              ml: "-7px",
              mt: "5px",
            },
            '&[data-index="4"]': {
              ml: "-14px",
              mt: "5px",
            },
            '&[data-index="5"]': {
              ml: "-8px",
              mt: "5px",
            },
          },
        },
      })}
    />
  );
}
