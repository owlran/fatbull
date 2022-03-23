import { useState } from "react";
import HomeIcon from "../../../icons/Home";
import { useNavigate, useMatch } from "react-router-dom";

import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps,
  BottomNavigationAction,
} from "@mui/material";

const BottomNavigator = (props: BottomNavigationProps) => {
  const navigate = useNavigate();
  const match = useMatch("/*");
  // path: home -> '/', tags: /tags
  const path = match?.pathname;

  const [value, setValue] = useState(path === "/" ? 0 : 1);
  console.log({ value });
  return (
    <MuiBottomNavigation
      {...props}
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        if (newValue === 0) {
          navigate("/");
        } else {
          navigate("/tags");
        }
      }}
      sx={{
        background: "rgba(24, 24, 24, 0.2)",
        boxShadow: "inset 0px 0.5px 0px rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(54.3656px)",
      }}
    >
      <BottomNavigationAction icon={<HomeIcon />} />
      <BottomNavigationAction icon={<HomeIcon />} />
    </MuiBottomNavigation>
  );
};

export default BottomNavigator;
