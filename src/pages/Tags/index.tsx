import { Skeleton, Box, Typography } from "@mui/material";

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
        {loading ? (
          <Box sx={{ mt: "-12px", display: "flex", flexWrap: "wrap" }}>
            {Array.from({ length: 30 }).map((_, index) => (
              <Skeleton
                sx={{ bgcolor: "grey.900", mt: "36px", mr: "24px" }}
                key={`tag-skeleton-${index}`}
                variant="rectangular"
                width="150px"
                height="150px"
              />
            ))}
          </Box>
        ) : (
          <Box sx={{ mt: "-12px", display: "flex", flexWrap: "wrap" }}>
            {tags?.map((tag) => (
              <TagResult key={tag.id} name={tag.name} count={tag.count} />
            ))}
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Tags;
