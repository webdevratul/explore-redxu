import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagsReduces from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideoReducer from "../features/relatedVideos/relatedVideosSlice";
import filterReduces from "../features/filter/filterSlice";

const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReduces,
    video: videoReducer,
    relatedVideos: relatedVideoReducer,
    filter: filterReduces,
  },
});

export default store;
