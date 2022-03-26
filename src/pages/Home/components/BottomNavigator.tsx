import { useState } from "react";
import HomeIcon from "../../../icons/Home";
import { useNavigate, useMatch } from "react-router-dom";

import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationProps,
  BottomNavigationAction,
} from "@mui/material";

const getTabValueByPath = (path: string | undefined) => {
  if (path === "/") {
    return 0;
  } else if (path === "/tags") {
    return 1;
  }
  return -1;
};

const BottomNavigator = (props: BottomNavigationProps) => {
  const navigate = useNavigate();
  const match = useMatch("/*");
  // path: home -> '/', tags: /tags
  const path = match?.pathname;

  const [value, setValue] = useState(getTabValueByPath(path));
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
      <BottomNavigationAction
        icon={<HomeIcon />}
        sx={{
          alignItems: "flex-end",
          paddingRight: "27px",
          marginTop: "-16px",
        }}
      />
      <BottomNavigationAction
        icon={<HomeIcon />}
        sx={{
          alignItems: "flex-start",
          paddingLeft: "26px",
          marginTop: "-15px",
        }}
      />
    </MuiBottomNavigation>
  );
};

export default BottomNavigator;
