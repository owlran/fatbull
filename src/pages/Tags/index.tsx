import { Skeleton, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TagResult from "./components/TagResult";

import useTags from "../../hooks/useTags";
import VectorIcon from "../../icons/Vector";

const Tags = () => {
  const navigate = useNavigate();
  const { tags, loading } = useTags();

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        justifyContent: "space-between",
        padding: "80px 236px 0 128px",
        width: "100%",
        [theme.breakpoints.down("md")]: {
          padding: "17px 25px 100px 25px",
        },
      })}
    >
      <Box>
        <Box
          onClick={() => navigate("/")}
          sx={(theme) => ({
            display: "none",
            [theme.breakpoints.down("md")]: {
              display: "flex",
              gap: "20px",
              pl: "6px",
              pb: "17px",
              cursor: "pointer",
            },
          })}
        >
          <VectorIcon />
          <Typography variant="h5">Home Page</Typography>
        </Box>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            gap: "24px",
            [theme.breakpoints.down("md")]: {
              mt: "20px",
            },
          })}
        >
          <Typography
            variant="h4"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                fontSize: "24px",
                fontWeight: 400,
                lineHeight: "150%",
                letterSpacing: 0,
              },
            })}
          >
            Tags
          </Typography>
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
          <Box
            sx={(theme) => ({
              mt: "-12px",
              display: "flex",
              flexWrap: "wrap",
              [theme.breakpoints.down("md")]: {
                mt: 0,
                justifyContent: "center",
                alignItems: "center",
              },
            })}
          >
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
