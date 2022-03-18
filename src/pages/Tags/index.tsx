import { Box, Typography } from "@mui/material";

import TagResult from "./components/TagResult";

import useTags from "../../hooks/useTags";

const containerSx = {
  display: "flex",
  justifyContent: "space-between",
  padding: "80px 236px 0 128px",
  width: "100%",
};

const Tags = () => {
  const { tags, loading } = useTags();
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <Box sx={containerSx}>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
          }}
        >
          <Typography variant="h4">Tags</Typography>
        </Box>
        <Box
          sx={{ mt: "24px", display: "flex", gap: "24px", flexWrap: "wrap" }}
        >
          {tags?.map((tag) => (
            <TagResult key={tag.id} name={tag.name} count={tag.count} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Tags;
