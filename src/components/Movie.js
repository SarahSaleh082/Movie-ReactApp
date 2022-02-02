import React,{useState} from "react";
import { Card, Button,Badge, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import { useSelector, useDispatch } from "react-redux";
import { changeFavouriteAction } from "../store/actions/favouriteAction";

export default function Movie(props) {
  // console.log(props.movie);
  const [toggleLike, setToggleHeart] = useState(false);
  const dispatch = useDispatch()
  const handelToggle = ()=>{
    dispatch(changeFavouriteAction(props.movie))
    setToggleHeart(!toggleLike);
  }
  return (
    
    <Col lg={4}>
    <Card className="my-2">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
        <Card.Text>{props.movie.overview}</Card.Text>
        <div className="d-flex justify-content-between">
          <Link to={`/details/${props.movie.id}`}><Button variant="primary">Show Details</Button></Link>
          <span className="heart" onClick={handelToggle}>{
            toggleLike? <AiFillHeart color="#db2e2e"  size={25} /> : <AiOutlineHeart color="#db2e2e"  size={25} />
          }</span >
        </div>
      </Card.Body>
    </Card>
    </Col>
  );
}
