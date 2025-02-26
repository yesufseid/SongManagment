import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store"
import UpdateSongModal from "../songUpdatecomp/songUpdate"
import AddSongModal from "../songAddComp/addSong";
import GenreFilter from "../GenreFilter";
import {Container,Title,SongItem,DeleteButton,Listul,SongDetails,SongTitle,AddButton,Section} from "./styledComponent"

export default function SongList() {
  const dispatch = useDispatch<AppDispatch>();
  const { songs } = useSelector((state: RootState) => state.songs);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSong, setSelectedSong] = useState<any | null>(null);
  const genreFilter = useSelector((state: RootState) => state.filter.genre);

  useEffect(() => {
    dispatch({ type: "songs/fetchSongs" });
  }, [dispatch]);
  const filteredSongs = genreFilter === "All" 
  ? songs 
  : songs.filter((song) => song.genre.toLowerCase() === genreFilter.toLowerCase());

  return (
    <Container>
      <Title>Song List</Title>
      <AddButton onClick={() => setIsAddModalOpen(true)}>➕ Add Song</AddButton>
      {isAddModalOpen && <AddSongModal onClose={() => setIsAddModalOpen(false)} />}
      {isEditModalOpen && selectedSong && (
        <UpdateSongModal song={selectedSong} onClose={() => setIsEditModalOpen(false)} />
      )}
      <Listul>
      <GenreFilter />
        {filteredSongs.map((song) => (
          <SongItem key={song.title}>
            <SongTitle>{song.title} - {song.artist}</SongTitle>
            <SongDetails>Album: {song.album} | Genre: {song.genre}</SongDetails>
            <Section>
            <DeleteButton onClick={() => { setSelectedSong(song); setIsEditModalOpen(true); }}>Edit</DeleteButton>
            <DeleteButton onClick={() => dispatch({ type: "songs/eraseSong", payload:song._id})}>
              Delete
            </DeleteButton>
            </Section>
          </SongItem>
        ))}
      </Listul>
    </Container>
  );
}
