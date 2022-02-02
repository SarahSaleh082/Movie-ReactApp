import React, {useState, useEffect} from 'react';
import Movie from '../components/Movie';
import {Container, Row} from "react-bootstrap"
import {axiosInstace} from '../network/axiosConfig';
import { useDispatch, useSelector } from "react-redux";
import {changeMoviesAction} from "../store/actions/moviesAction"
import PaginationComponent from '../components/PaginationComponent';
import Search from '../components/Search';
import{ useContext } from "react";
import { LanguageContext } from "../context/languageContext";
export default function Movies() {
    const [movieList, setMovieList] = useState([]);
    const movieStore = useSelector((state) => state.movies);
    const { contextLang, setContextLang } = useContext(LanguageContext);

    useEffect(()=>{
        setMovieList(movieStore);
        // console.log(movieStore);
    }, [movieStore])
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(changeMoviesAction(contextLang));
    }, [contextLang])

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
