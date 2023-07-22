import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../../api";

import "../../styles/DetailsScreen.css";

export const DetailsScreen = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  useEffect(() => {
    const getMovie = async () => {
      const data = await getMovieById(params.id);
      console.log(data);
      setMovie(data);
    };

    getMovie();
  }, [params.id]);

  let img_path = "https://image.tmdb.org/t/p/w300";

  return (
    <div className="conainer-fluid">
      <div id="flex-box" className="d-flex gap-3 m-4">
        <img src={img_path + movie.poster_path} alt="" />

        <div id="second-child" className="fs-4">
          <h1>{movie.title}</h1>
          <p>Release date: {movie.release_date}</p>
          <p className="w-75">Overview: {movie.overview}</p>
          <p>{movie.vote_average}</p>
        </div>
      </div>
    </div>
  );
};
