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
  const [value, setValue] = useState(0);
  const [data, setData] = useState<FollowingProfileType[]>([]);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const handleChange = (event: SyntheticEvent, newValue: any) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data: followingData } = await getFollowing(1, 10);
  //     const { data: dd, page, pageSize, total, totalPages } = followingData;
  //     setData(dd);
  //     console.log({
  //       dd,
  //       page,
  //       pageSize,
  //       total,
  //       totalPages,
  //     });
  //   };
  //   fetchData();
  // }, []);

  const loadNextPage = async (...args: any[]): Promise<void> => {
    setIsNextPageLoading(true);
    console.log("loadNextPage", ...args);
    const { data: followingData } = await getFollowing(
      Number(args[0]) / 10 + 1,
      10
    );
    setIsNextPageLoading(false);
    const { data: dd, page, pageSize, total, totalPages } = followingData;
    setHasNextPage(page < totalPages);
    console.log({ dd });
    setData([...data, ...dd]);
    console.log({
      dd,
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
          value={value}
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
