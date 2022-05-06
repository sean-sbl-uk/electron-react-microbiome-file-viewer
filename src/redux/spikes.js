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

// export const setSpikes =
//   ({ data }) =>
//   async (dispatch) => {
//     try {
//       dispatch(setSpikeData({ data }));
//     } catch (error) {
//       return console.error(error.message);
//     }
//   };

// export const resetSpikes = () => async (dispatch) => {
//   dispatch(resetSpikeData());
// };
