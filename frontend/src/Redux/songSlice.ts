import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: { songs: [] },
  reducers: {
    setSongs: (state, action) => {
      state.songs = action.payload;
    },
    addSong: (state, action) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action) => {
      const index = state.songs.findIndex((song) => song._id === action.payload._id);
      if (index !== -1) state.songs[index] = action.payload;
    },
    removeSong: (state, action) => {
      state.songs = state.songs.filter((song) => song._id !== action.payload);
    },
  },
});

export const { setSongs, addSong, updateSong, removeSong } = songSlice.actions;
export default songSlice.reducer;
