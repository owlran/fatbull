import { useEffect, SyntheticEvent, useState } from "react";

import { Theme, Box, Tabs, Tab } from "@mui/material";

import UserProfile from "./UserProfile";
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

const TOTAL_FOLLOWING = 100;

const Profile = () => {
  const [tabValue, setTabValue] = useState(0);

  const [data, setData] = useState<FollowingProfileType[]>([]);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleChange = (event: SyntheticEvent, newTabValue: number) => {
    setTabValue(newTabValue);
  };

  const loadNextPage = async (startIndex: number): Promise<void> => {
    console.log("load next page with start index ", startIndex);
    setIsNextPageLoading(true);
    console.log("query api with index ", startIndex);
    const { data: responseData } = await getFollowing(
      Number(startIndex) / 10 + 1,
      10
    );
    setIsNextPageLoading(false);
    const {
      data: followingData,
      page,
      pageSize,
      total,
      totalPages,
    } = responseData;

    setHasNextPage(data.length < total);
    setData([...data, ...followingData]);
    console.log("after update ");
    console.log("data is ");
    console.log({ data });

    console.log({
      followingData,
      page,
      pageSize,
      total,
      totalPages,
    });
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
