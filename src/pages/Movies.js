import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import {Container, Row} from "react-bootstrap"
import {axiosInstace} from '../network/axiosConfig'
import PaginationComponent from '../components/PaginationComponent';
import Search from '../components/Search';

export default function Movies() {
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        axiosInstace.get('/movie/popular')
        .then((res)=>{
            setMovieList(res.data.results);
            
        })
        .catch(()=>{})
    }, [])

  return <Container>
      <Search setMovieList={setMovieList}/>
      <Row>
        {movieList.map((movie, id)=>{
            return <Movie movie={movie} key={id}/>
        })}
      </Row>
      <PaginationComponent setMovieList={setMovieList}/>
    </Container>
      
 
}
