import {
  Drawer as MuiDrawer,
  DrawerProps,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
} from "@mui/material";

import { useNavigate, useMatch } from "react-router-dom";

import Logo from "./Logo";

import HomeIcon from "../../../icons/Home";

const listItemSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  cursor: "pointer",
  // backgroundColor: "grayscale.white",
  "& > .MuiListItemIcon-root": {
    color: "grayscale.600",
  },
};

const activeListItemSx = {
  "& > .MuiListItemIcon-root": {
    color: "white",
  },
};

const iconWrapperSx = {
  minWidth: "24px",
  width: "24px",
  height: "24px",
};

const itemTextSx = {
  margin: 0,
  "& > .MuiTypography-root": {
    color: "#ffffff",
    typography: "caption",
  },
};

const Drawer = (props: DrawerProps) => {
  const navigate = useNavigate();
  const match = useMatch("/*");
  // path: home -> '/', tags: /tags
  const path = match?.pathname;

  return (
    <MuiDrawer
      {...props}
      sx={{
        "& > .MuiPaper-root": {
          width: "80px",
          backgroundColor: "grayscale.light",
          border: "none",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Logo />
        <List>
          <ListItem
            sx={{
              ...listItemSx,
              ...(path === "/" ? activeListItemSx : {}),
              mt: "7px",
            }}
            onClick={() => navigate("/")}
          >
            <ListItemIcon sx={iconWrapperSx}>
              <HomeIcon />
            </ListItemIcon>
            {path === "/" && <ListItemText sx={itemTextSx}>Home</ListItemText>}
          </ListItem>
          <ListItem
            sx={{
              ...listItemSx,
              ...(path === "/tags" ? activeListItemSx : {}),
              mt: "22px",
            }}
            onClick={() => navigate("/tags")}
          >
            <ListItemIcon sx={iconWrapperSx}>
              <Badge
                variant="dot"
                overlap="rectangular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                invisible={path === "/tags"}
                sx={(theme) => ({
                  "& 	.MuiBadge-dot": {
                    position: "relative",
                    top: "-1px",
                    left: "-5px",
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.light,
                    border: `1px solid ${theme.palette.grayscale.light}`,
                  },
                })}
              >
                <HomeIcon />
              </Badge>
            </ListItemIcon>
            {path === "/tags" && (
              <ListItemText sx={itemTextSx}>Tags</ListItemText>
            )}
          </ListItem>
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
