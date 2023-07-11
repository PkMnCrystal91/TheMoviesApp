import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";

let API_key = "&api_key=ff56685198facead6ad507c2f07f55d4";
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key;

export const MovieGrid = () => {
  const cardStyle = {
    width: "18rem",
  };

  const [movieData, setMovies] = useState([]);
  const [url_set, setUrl] = useState(url);

  useEffect(() => {
    fetch(url_set)
      .then((res) => res.json())
      .then((data) => {
        console.log(data.results);
        setMovies(data.results);
      });
  }, [url_set]);

  return (
    <div className="card mx-3 my-4" style={cardStyle}>
      {movieData.map((resp, pos) => (
        <MovieItem key={pos} movie={resp} />
      ))}
      {/* <img className="card-img-top" src="..." alt="Card image cap"></img>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div> */}
    </div>
  );
};
