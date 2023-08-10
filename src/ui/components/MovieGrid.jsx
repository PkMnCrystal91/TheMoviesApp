import { useState, useEffect } from "react";
import { MovieItem } from "./MovieItem";
import { getMoviesByType } from "../../api";

export const MovieGrid = ({ category }) => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    getMoviesByType(category).then((data) => {
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
