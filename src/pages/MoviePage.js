import React from "react";
import { useParams } from "react-router-dom";

export default function MoviePage() {

  
  const route_parameters = useParams();
    return (
      <div>
        <h1>Testing moviePage</h1>
        {route_parameters.imdb_id}
      </div>
    )
}