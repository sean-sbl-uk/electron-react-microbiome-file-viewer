import { createSlice } from "@reduxjs/toolkit";

const initialState = { spikeData: {} };

//Slice
const slice = createSlice({
  name: "spikeData",
  initialState,
  reducers: {
    setSpikeData: (state, action) => {
      state.spikeData = action.payload;
    },
    resetSpikeData: (state, action) => {
      state.spikeData = {};
    },
  },
});

export default slice.reducer;

//Actions
const { setSpikeData, resetSpikeData } = slice.actions;

export const setSpikes =
  ({ data }) =>
  async (dispatch) => {
    try {
      dispatch(setSpikeData({ data }));
    } catch (error) {
      return console.error(error.message);
    }
  };

export const resetSpikes = () => async (dispatch) => {
  dispatch(resetSpikeData());
};
