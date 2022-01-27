import React from 'react';
import {Container, Row} from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux";
import Movie from '../components/Movie';
export default function Favourites() {
    const movieList = useSelector((state) => state.favourite);
  return <Container>
  
  <Row>
    {movieList.map((movie, id)=>{
        return <Movie movie={movie} key={id}/>
    })}
  </Row>
  
</Container>;
}
