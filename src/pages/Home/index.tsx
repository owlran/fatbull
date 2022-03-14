import { Box } from "@mui/material";

import Navigator from "./components/Navigator";

const Home = () => {
  return (
    <Box sx={{ color: "#fff", border: "1px solid red" }}>
      <Box>Logo</Box>
      <Box>Search</Box>
      <Box>Search Field</Box>
      <Box># Of Results Per Page</Box>
      <Box>30 result</Box>
      <Box>Slider</Box>
      <Box>Search Button</Box>
      <Navigator />
    </Box>
  );
};

export default Home;
