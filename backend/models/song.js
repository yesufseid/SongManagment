
const mongoose = require('mongoose');


const SongSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  album: { type: String, required: true },
  genre: { type: String, required: true },
});
 
const Songs= mongoose.model("Song", SongSchema);
module.exports =Songs