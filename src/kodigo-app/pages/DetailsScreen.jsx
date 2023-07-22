import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../../styles/DetailsScreen.css";

export const DetailsScreen = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      let API_key = "&api_key=ff56685198facead6ad507c2f07f55d4";
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?${API_key}`
      );
      const data = await result.json();
      console.log(data);
      setMovie(data);
    };

    getMovie();
  }, []);

  let img_path = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="conainer-fluid">
      <div id="flex-box" className="d-flex gap-3 m-4">
        <img src={img_path + movie.poster_path} alt="" />

        <div id="second-child" className="">
          <h2>{movie.title}</h2>
          <p>Release date: {movie.release_date}</p>
          <p className="w-75">Overview: {movie.overview}</p>
          <p></p>
        </div>
      </div>
    </div>
  );
};
