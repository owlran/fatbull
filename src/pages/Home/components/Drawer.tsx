import {
  Drawer as MuiDrawer,
  DrawerProps,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useLocation } from "react-router-dom";

import Logo from "./Logo";

import HomeIcon from "../../../icons/Home";

const Drawer = (props: DrawerProps) => {
  const location = useLocation();
  console.log({ location });
  return (
    <MuiDrawer
      {...props}
      sx={{
        width: 80,
        display: "flex",
        "& > .MuiPaper-root": {
          backgroundColor: "#1B1B1B",
        },
        // flexDirection: "column",
      }}
    >
      <Logo />
      <List>
        <ListItem
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "1px solid red",
          }}
        >
          <ListItemIcon>
            <HomeIcon fill="red" />
          </ListItemIcon>
          <ListItemText
            sx={{
              "& > .MuiTypography-root": {
                color: "#ffffff",
                fontWeight: 400,
                fontSize: 12,
                lineHeight: "150%",
                letterSpacing: 0.4,
              },
            }}
          >
            Home
          </ListItemText>
        </ListItem>
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
