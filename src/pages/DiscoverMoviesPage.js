import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");
  const [movieArray, set_movieArray] = useState([]);

  const search = async event => {
    event.preventDefault();
    setSearching("searching");

    const queryParam = encodeURIComponent(searchText);
    const data = await fetch(
      `https://omdbapi.com/?apikey=fc8d6eb9&s=${queryParam}`
    ).then(r => r.json());

    setSearching("done");
    set_movieArray(data.Search);
  };

  const [searching, setSearching] = useState("");

  return (
    <div>
      <h1>Discover Movies</h1>
      Status: {searching}
      <form onSubmit={search}>
        <input
          value={searchText}
          onChange={event => set_searchText(event.target.value)}
        />
        <button>Search</button>
      </form>
      {movieArray.map((movie, i) => {
        return (
          <div key={i}>
            <h2>{movie.Title}</h2>
            <p>{movie.Year}</p>
            <img src={movie.Poster} alt="poster" />
        
          </div>
        );
      })}
    </div>
  );
}
