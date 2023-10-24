import InfiniteScroll from "react-infinite-scroll-component";

import Spinner from "../../ui/Spinner";
import SpinnerFullScreen from "../../ui/SpinnerFullScreen";
import { useVideosInfinite } from "./useVideos";
import Video from "./Video";
import styles from "./Videos.module.css";
import LoaderHorizontal from "../../ui/LoaderHorizontal";

function Videos() {
  const { videos, fetchNextPage, status, hasNextPage } = useVideosInfinite();

  const isInternet = navigator.onLine;

  if (!isInternet)
    return (
      <div className={styles.fetchedVideo}>
        Please Connect Your Device On Internet
      </div>
    );

  if (status === "loading")
    return (
      <SpinnerFullScreen>
        <Spinner />
      </SpinnerFullScreen>
    );

  return (
    <div>
      <InfiniteScroll
        dataLength={videos ? videos.length : 0}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<LoaderHorizontal />}
      >
        <div className={styles.videos}>
          {videos?.map((video) => (
            <Video key={video.youtubeID} video={video} />
          ))}
        </div>

        {!hasNextPage && (
          <div className={styles.fetchedVideo}>All Video Showed</div>
        )}
      </InfiniteScroll>
    </div>
  );
}

export default Videos;
