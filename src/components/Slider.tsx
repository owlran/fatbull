import { Slider as MuiSlider, SliderProps } from "@mui/material";

const thumbSize = 20;
const sliderSx = {
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
    top: "42px",
    '&[data-index="0"]': {
      transform: "none",
    },
  },
};
export default function Slider(props: SliderProps) {
  const { sx, ...rest } = props;
  return <MuiSlider {...rest} sx={{ ...sliderSx, ...sx }} />;
}
