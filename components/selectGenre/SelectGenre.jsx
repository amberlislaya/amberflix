import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../../store/index.js";


 const SelectGenre = ({ genres, type }) => {
    const dispatch = useDispatch();


return (

<Select
    className="flex"
    onChange={(e) => {
      dispatch(
        fetchDataByGenre({
          genres,
          genre: e.target.value,
          type,
        })
      );
    }}
  >
 {genres.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 4rem;
  cursor: pointer;
  font-size: 1.2rem;
  background-color: rgba(0, 0, 0, 0.95);
  color: #efb810;
`;

export default SelectGenre;
