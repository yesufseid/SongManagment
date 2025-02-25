
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../Redux/store";
import { setGenreFilter } from "../Redux/slices/filterSlice";
import styled from "@emotion/styled";

const FilterContainer = styled.div`
  margin-bottom: 15px;
  text-align: center;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

export default function GenreFilter() {
  const dispatch = useDispatch<AppDispatch>();
  const { songs } = useSelector((state: RootState) => state.songs);
  const genreFilter = useSelector((state: RootState) => state.filter.genre);

  const genres = ["All", ...new Set(songs.map((song) => song.genre.toLowerCase()))];

  return (
    <FilterContainer>
      <label htmlFor="genre-filter">Filter by Genre: </label>
      <Select
        id="genre-filter"
        value={genreFilter}
        onChange={(e) => dispatch(setGenreFilter(e.target.value))}
      >
        {genres.map((genre) => (
          <option key={genre} value={genre}>
            {genre}
          </option>
        ))}
      </Select>
    </FilterContainer>
  );
}
