
import { useState } from "react";
import { useDispatch } from "react-redux";
import {Overlay,Input,Button,CancelButton,AddButton,Modal} from "./styledComponent"



export default function AddSongModal({ onClose }: { onClose: () => void }) {
  const dispatch = useDispatch();
  const [song, setSong] = useState({ title: "", artist: "", album: "", genre: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSong({ ...song, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!song.title || !song.artist || !song.album || !song.genre) return;
    dispatch({ type: "songs/createSong", payload: song });
    onClose(); 
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>Add New Song</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="title" placeholder="Title" onChange={handleChange} required />
          <Input type="text" name="artist" placeholder="Artist" onChange={handleChange} required />
          <Input type="text" name="album" placeholder="Album" onChange={handleChange} required />
          <Input type="text" name="genre" placeholder="Genre" onChange={handleChange} required />
          <AddButton type="submit">Add Song</AddButton>
          <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
        </form>
      </Modal>
    </Overlay>
  );
}
