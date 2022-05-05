import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import spikesReducer from "./spikes";
import filesReducer from "./files";

// const reducer = combineReducers({
//   //Add reducers here
//   spikes: spikesReducer
// });

const store = configureStore({
  reducer: {
    spikeData: spikesReducer,
    files: filesReducer,
  },
});

export default store;
