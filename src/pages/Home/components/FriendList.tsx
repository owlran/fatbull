import { useState } from "react";

import InfiniteScrollWrapper from "./InfiniteScrollWrapper";

import { getFriends } from "../../../services/index";

type FollowingProfileType = {
  id: string;
  name: string;
  username: string;
  isFollowing: boolean;
};

const FriendList = () => {
  const [data, setData] = useState<FollowingProfileType[]>([]);
  const [isNextPageLoading, setIsNextPageLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  const loadNextPage = async (startIndex: number): Promise<void> => {
    setIsNextPageLoading(true);
    const { data: responseData } = await getFriends(
      Number(startIndex) / 10 + 1,
      10
    );
    setIsNextPageLoading(false);
    const { data: followingData, total } = responseData;

    setHasNextPage(data.length < total);
    setData([...data, ...followingData]);
  };

  return (
    <InfiniteScrollWrapper
      hasNextPage={hasNextPage}
      isNextPageLoading={isNextPageLoading}
      items={data || []}
      loadNextPage={loadNextPage}
    />
  );
};

export default FriendList;
