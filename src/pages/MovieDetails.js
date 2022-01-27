import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstace } from "../network/axiosConfig";
import {Container} from "react-bootstrap"
export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();

  console.log(params);

  useEffect(() => {
    axiosInstace
      .get(`/movie/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <Container className="text-center">
    <h1>{details.title}</h1>
    <img src={`https://image.tmdb.org/t/p/w500/${details.poster_path}`}/>
    <p>{details.overview}</p>
  </Container>;
}
