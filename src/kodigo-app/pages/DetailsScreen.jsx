import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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

  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div>
      {movie.original_title}
      <img src={img_path + movie.poster_path} alt="" />
    </div>
  );
};
