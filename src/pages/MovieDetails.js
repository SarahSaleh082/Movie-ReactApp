import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstace } from "../network/axiosConfig";

export default function MovieDetails() {
  const [details, setDetails] = useState({});
  const params = useParams();

  console.log(params);

  useEffect(() => {
    axiosInstace
      .get(`/${params.id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.log(err));
  }, []);
  return <div></div>;
}
