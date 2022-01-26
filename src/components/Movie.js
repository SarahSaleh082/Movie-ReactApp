import React from "react";
import { Card, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Movie(props) {
  console.log(props.movie);
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
        <Link to={`/details/${props.movie.id}`}><Button variant="primary">Show Details</Button></Link>
      </Card.Body>
    </Card>
    </Col>
  );
}
