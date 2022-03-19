import { memo } from "react";

import { Box, Skeleton, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import InfiniteLoader from "react-window-infinite-loader";

import UserProfile from "./UserProfile";

function ExampleWrapper({
  // Are there more items to load?
  // (This information comes from the most recent API request.)
  hasNextPage,

  // Are we currently loading a page of items?
  // (This may be an in-flight flag in your Redux store for example.)
  isNextPageLoading,

  // Array of items loaded so far.
  items,

  // Callback function responsible for loading the next page of items.
  loadNextPage,
}: {
  hasNextPage: boolean;
  isNextPageLoading: boolean;
  items: any[];
  loadNextPage: (arg: number) => void;
}) {
  // If there are more items to be loaded then add an extra row to hold a loading indicator.
  const itemCount = hasNextPage ? items.length + 1 : items.length;

  // Only load 1 page of items at a time.
  // Pass an empty callback to InfiniteLoader in case it asks us to load more than once.
  const loadMoreItems = isNextPageLoading ? () => {} : loadNextPage;
  // const loadMoreItems = loadNextPage;

  // Every row is loaded except for our loading indicator row.
  // const isItemLoaded = (index: number) => !hasNextPage || index < items.length;
  const isItemLoaded = (index: number) => !hasNextPage || !!items[index];

  // Render an item or a loading indicator.
  const Item = ({ index, style }: { index: number; style: any }) => {
    const content = items[index];

    if (!isItemLoaded(index)) {
      return (
        <Box
          style={style}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={40}
            height={40}
          />
          <Skeleton width={79} height={45} />
          <Skeleton width={60} height={29} />
        </Box>
      );
    }

    return (
      <div style={style}>
        <UserProfile {...content} />
      </div>
    );
  };

  return (
    <InfiniteLoader
      isItemLoaded={isItemLoaded}
      itemCount={itemCount}
      loadMoreItems={loadMoreItems}
    >
      {({ onItemsRendered, ref }) => (
        <FixedSizeList
          itemCount={itemCount}
          onItemsRendered={onItemsRendered}
          itemSize={60}
          height={772}
          ref={ref}
          width={343}
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}

export default memo(ExampleWrapper);
