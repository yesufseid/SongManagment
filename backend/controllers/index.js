
const Song = require('../models/song');


//getallSong
const getallSong=async(req,res)=>{
  try {
   const song=await Song.find()
   return   res.status(200).json(song);
  } catch (error) {
    console.log(error); 
   return  res.status(500).json({ error: error.message });
  }
  
}

//  Create a new song
const creatSong=async(req,res)=>{
  try {
    const { title, artist, album, genre } = req.body;
    const newSong =new Song({ title, artist, album, genre });
    const savedSong = await newSong.save();
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//update song
const updateSong=async(req,res)=>{
  try {
    const updatedSong = await Song.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedSong);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}



//delete song
const deletSong=async(req,res)=>{
  try {
    await Song.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Song deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//statices
const getStatices=async(req,res)=>{
  try {
    const songs = await Song.find();
    const totalSongs = songs.length;
    const totalArtists = new Set(songs.map(song => song.artist)).size;
    const totalAlbums = new Set(songs.map(song => song.album)).size;
    const totalGenres = new Set(songs.map(song => song.genre)).size;

    res.json({
      totalSongs,
      totalArtists,
      totalAlbums,
      totalGenres,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports={getallSong,
                 deletSong,
                 updateSong,
                 creatSong,
                 getStatices
}