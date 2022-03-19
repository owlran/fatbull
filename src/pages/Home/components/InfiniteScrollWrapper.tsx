import { memo } from "react";

import { Typography } from "@mui/material";
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
    if (!isItemLoaded(index)) {
      return (
        <Typography
          variant="h5"
          sx={{
            color: "red",
          }}
        >
          Loading...
        </Typography>
      );
    }

    const content = items[index];
    return (
      <div style={style}>
        <p>{index}</p>
        <UserProfile style={style} {...content} />
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
          itemSize={100}
          height={772}
          ref={ref}
          width={300}
          overscanCount={1}
        >
          {Item}
        </FixedSizeList>
      )}
    </InfiniteLoader>
  );
}

export default memo(ExampleWrapper);
