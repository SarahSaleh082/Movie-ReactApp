import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import "./Search.css";
import {axiosInstace} from '../network/axiosConfig'

export default function Search(props) {
  const [movieInputValue, setMovieInputValue] = useState("");
  const handleChange = (e) => {
    setMovieInputValue(e.target.value);
  };
  const handelSearch = ()=>{
    axiosInstace.get(`/search/movie?query=${movieInputValue}`)
    .then((res)=>{props.setMovieList(res.data.results)})
    .catch(()=>{})
  }
  return (
    <div className="input-group m-auto rounded w-50 my-3">
      <input
        type="search"
        className="form-control rounded"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
        value={movieInputValue}
        onChange={(event) => handleChange(event)}
      />
      <span className="input-group-text border-0" id="search-addon" onClick = {handelSearch}>
        <BiSearchAlt size={25} />
      </span>
    </div>
  );
}
