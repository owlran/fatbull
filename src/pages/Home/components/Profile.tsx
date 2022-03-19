import { SyntheticEvent, useState } from "react";

import { Theme, Box, Tabs, Tab } from "@mui/material";

import InfiniteScrollWrapper from "./InfiniteScrollWrapper";

import { getFollowing } from "../../../services/index";

const tabSx = (theme: Theme) => ({
  flex: 1,
  "&.MuiTab-root": {
    color: theme.palette.grayscale[500],
    ...theme.typography.subtitle1,
    fontWeight: "700",
    textTransform: "none",
  },
  "&.Mui-selected": {
    color: theme.palette.primary.main,
  },
});

type FollowingProfileType = {
  id: string;
  name: string;
  username: string;
  isFollowing: boolean;
};

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

  const [data, setData] = useState<FollowingProfileType[]>([]);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleChange = (event: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  const loadNextPage = async (startIndex: number): Promise<void> => {
    setIsNextPageLoading(true);
    const { data: responseData } = await getFollowing(
      Number(startIndex) / 10 + 1,
      10
    );
    setIsNextPageLoading(false);
    const { data: followingData, total } = responseData;

    setHasNextPage(data.length < total);
    setData([...data, ...followingData]);
  };

  return (
    <Box sx={{ width: "375px", marginTop: "32px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={tabValue}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ width: "100%", flex: "1 1 auto" }}
        >
          <Tab label="Followers" sx={tabSx} />
          <Tab label="Following" sx={tabSx} />
        </Tabs>
      </Box>
      <Box
        sx={{
          pt: "35px",
          display: "flex",
          flexDirection: "column",
          gap: "21px",
        }}
      >
        <InfiniteScrollWrapper
          hasNextPage={hasNextPage}
          isNextPageLoading={isNextPageLoading}
          items={data || []}
          loadNextPage={loadNextPage}
        />
      </Box>
    </Box>
  );
};

export default Profile;
