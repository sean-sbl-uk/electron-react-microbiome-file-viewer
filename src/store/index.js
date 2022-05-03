import { createStore, configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import spikes from "./spikes";

const reducer = combineReducers({
  //Add reducers here
  spikes,
});

const store = configureStore({
  reducer,
});

export default store;
