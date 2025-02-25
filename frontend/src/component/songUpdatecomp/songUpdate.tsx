
import { useState } from "react";
import { useDispatch } from "react-redux";
import{Modal,Overlay,Input,SaveButton,CancelButton} from "./styleldComponent"


export default function UpdateSongModal({ song, onClose }: { song: any; onClose: () => void }) {
  const dispatch = useDispatch();
  const [updatedSong, setUpdatedSong] = useState({ ...song });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedSong({ ...updatedSong, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "songs/modifySong", payload: { id:song._id, data: updatedSong } });
    onClose();
  };

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <h2>Edit Song</h2>
        <form onSubmit={handleSubmit}>
          <Input type="text" name="title" value={updatedSong.title}  onChange={handleChange} required />
          <Input type="text" name="artist" value={updatedSong.artist} onChange={handleChange} required />
          <Input type="text" name="album" value={updatedSong.album} onChange={handleChange} required />
          <Input type="text" name="genre" value={updatedSong.genre} onChange={handleChange} required />
          <SaveButton type="submit">Save Changes</SaveButton>
          <CancelButton type="button" onClick={onClose}>Cancel</CancelButton>
        </form>
      </Modal>
    </Overlay>
  );
}
