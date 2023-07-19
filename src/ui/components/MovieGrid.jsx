import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";
import { getPopularMovies } from "../../api";

export const MovieGrid = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getPopularMovies().then((data) => {
      console.log(data.results);
      setMovieData(data.results);
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="wrapper d-flex flex-wrap justify-content-center">
        {movieData.map((res, pos) => {
          return <MovieItem info={res} key={pos} />;
        })}
      </div>
    </div>
  );
};
