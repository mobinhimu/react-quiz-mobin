import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { getVideosInfinite } from "../../services/apiVideos";

export function useVideosInfinite() {
  // const queryClient = new useQueryClient();

  const { data, fetchNextPage, status, hasNextPage } = useInfiniteQuery({
    queryKey: ["videos"],
    queryFn: getVideosInfinite,
    getNextPageParam: (lastPage) => {
      if (
        lastPage.prevOffset > Math.ceil(lastPage.count / lastPage.prevOffset)
      ) {
        return false;
      }

      return lastPage.prevOffset + 1;
    },
  });

  const videos = data?.pages.reduce((acc, curr) => [...acc, ...curr.data], []);

  return {
    videos,
    fetchNextPage,
    status,
    hasNextPage,
  };
}
