import { createSlice } from "@reduxjs/toolkit";

const statsSlice = createSlice({
  name: "stats",
  initialState: {
    totalSongs: 0,
    totalArtists: 0,
    totalAlbums: 0,
    totalGenres: 0,
  },
  reducers: {
    setStats: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setStats } = statsSlice.actions;
export default statsSlice.reducer;
