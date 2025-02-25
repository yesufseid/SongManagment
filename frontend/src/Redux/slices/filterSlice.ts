import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    genre: "All",
  },
  reducers: {
    setGenreFilter: (state, action) => {
      state.genre = action.payload;
    },
  },
});

export const { setGenreFilter } = filterSlice.actions;
export default filterSlice.reducer;
