import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: "files",
  initialState: {
    data: null,
  },
  reducers: {
    setFiles: (state, action) => {
      state.data = action.payload;
    },
    resetFiles: (state) => {
      state.data = null;
    },
  },
});

export const { setFiles, resetFiles } = filesSlice.actions;

export default filesSlice.reducer;
