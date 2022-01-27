import React,{useState} from 'react';
import {Pagination} from "react-bootstrap";
import {axiosInstace} from '../network/axiosConfig'

export default function PaginationComponent(props) {
  const [active, setActive] = useState(1);
  let items = [];
  const handelPagination = (number)=>{
    setActive(number);
    axiosInstace.get(`/movie/popular?page=${number}`)
    .then((res)=>{props.setMovieList(res.data.results)})
  }
  for (let number = 1; number <= 10; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={()=>handelPagination(number)}>
        {number}
      </Pagination.Item>,
    );
  }
   

  return <Pagination>
    {items}
  {/* <Pagination.First />
  <Pagination.Prev />
  <Pagination.Item>{1}</Pagination.Item>
  <Pagination.Ellipsis />

  <Pagination.Item>{10}</Pagination.Item>
  <Pagination.Item>{11}</Pagination.Item>
  <Pagination.Item active>{12}</Pagination.Item>
  <Pagination.Item>{13}</Pagination.Item>
  <Pagination.Item disabled>{14}</Pagination.Item>

  <Pagination.Ellipsis />
  <Pagination.Item>{20}</Pagination.Item>
  <Pagination.Next />
  <Pagination.Last /> */}
</Pagination>;
}
