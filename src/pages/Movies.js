import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import {Container, Row} from "react-bootstrap"
import {axiosInstace} from '../network/axiosConfig'

export default function Movies() {
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        axiosInstace.get('/popular')
        .then((res)=>{
            setMovieList(res.data.results);
            
        })
        .catch(()=>{})
    }, [])

  return <Container>
      <Row>
        {movieList.map((movie, id)=>{
            return <Movie movie={movie} key={id}/>
        })}
      </Row>
    </Container>
      
 
}
