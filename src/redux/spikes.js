import { createSlice } from "@reduxjs/toolkit";

//Slice
export const spikeDataSlice = createSlice({
  name: "spikeData",
  initialState: {
    data: {},
  },
  reducers: {
    setSpikeData: (state, action) => {
      state.data = action.payload;
    },
    resetSpikeData: (state) => {
      state.data = {};
    },
  },
});

//Actions
export const { setSpikeData, resetSpikeData } = spikeDataSlice.actions;

export default spikeDataSlice.reducer;

