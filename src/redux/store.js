import { configureStore } from "@reduxjs/toolkit";
import spikesReducer from "./spikes";
import filesReducer from "./files";

const store = configureStore({
  reducer: {
    spikeData: spikesReducer,
    files: filesReducer,
  },
});

export default store;
