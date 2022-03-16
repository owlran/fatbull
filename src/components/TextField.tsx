import { TextField as MuiTextField, TextFieldProps } from "@mui/material";

const TextFieldSx = {
  borderRadius: 6,
  "& label.Mui-focused": {
    color: "#FF9B33",
  },
  "& .MuiOutlinedInput-root": {
    height: 60,

    "& fieldset": {
      border: "3px solid rgba(255, 255, 255, 0.5)",
    },
    "&:hover fieldset": {
      border: "3px solid #FF9B33",
    },
    "&.Mui-focused fieldset": {
      border: "3px solid #FF9B33",
    },
  },
  "& input": {
    padding: "20px 18px 19px",
    "&::placeholder": {
      color: "common.white",
      opacity: 0.3,
    },
    "&.MuiInputBase-input": {
      color: "common.white",
      fontWeight: "normal",
      fontSize: 14,
      lineHeight: "150%",
      display: "flex",
      alignItems: "center",
      letterSpacing: 0.25,
    },
  },
};

export default function TextField(props: TextFieldProps) {
  return <MuiTextField {...props} sx={{ ...TextFieldSx }} />;
}
