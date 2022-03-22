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

import { useNavigate } from "react-router-dom";

import Logo from "./Logo";

import HomeIcon from "../../../icons/Home";

const listItemSx = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  cursor: "pointer",
};

const Drawer = (props: DrawerProps) => {
  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <MuiDrawer
      {...props}
      sx={{
        "& > .MuiPaper-root": {
          width: "80px",
          backgroundColor: "grayscale.light",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "37px",
        }}
      >
        <Logo />
        <List>
          <ListItem
            sx={{
              ...listItemSx,
              marginTop: "43px",
            }}
            onClick={() => navigate("/")}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
              }}
            >
              <HomeIcon fill="red" />
            </ListItemIcon>
            <ListItemText
              sx={{
                "& > .MuiTypography-root": {
                  color: "#ffffff",
                  typography: "caption",
                },
              }}
            >
              Home
            </ListItemText>
          </ListItem>
          <ListItem
            sx={{
              ...listItemSx,
              marginTop: "18px",
            }}
            onClick={() => navigate("/tags")}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
              }}
            >
              <Badge
                variant="dot"
                overlap="rectangular"
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
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
                <HomeIcon fill="red" />
              </Badge>
            </ListItemIcon>
            <ListItemText
              sx={{
                "& > .MuiTypography-root": {
                  color: "#ffffff",
                  typography: "caption",
                },
              }}
            >
              Tags
            </ListItemText>
          </ListItem>
        </List>
      </Box>
    </MuiDrawer>
  );
};

export default Drawer;
