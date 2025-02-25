
import { useEffect } from "react";
import {Container,StatItem,StatList,Title} from "./styledComponent"
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../Redux/store";;


export default function Stats() {
  const dispatch = useDispatch<AppDispatch>();
  const stats = useSelector((state: RootState) => state.stats);

  useEffect(() => {
    dispatch({ type: "stats/fetchStats" });
  }, [dispatch]);

  return (
    <Container>
      <Title>📊 Song Statistics</Title>
      {stats.totalSongs > 0 ? (
        <StatList>
          <StatItem>🎵 Total Songs: {stats.totalSongs}</StatItem>
          <StatItem>🎤 Total Artists: {stats.totalArtists}</StatItem>
          <StatItem>📀 Total Albums: {stats.totalAlbums}</StatItem>
          <StatItem>🎸 Total Genres: {stats.totalGenres}</StatItem>
        </StatList>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
}
