import React, {useState, useEffect} from 'react';
import {axiosInstace} from '../network/axiosConfig'

export default function Movies() {
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>{
        axiosInstace.get('/')
        .then((res)=>{
            setMovieList(res.data.results);
        })
        .catch(()=>{})
    }, [])
  return <div></div>;
}
