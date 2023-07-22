import { Link } from "react-router-dom";
import { DetailsScreen } from "../../kodigo-app";
import { TruncatedText } from "./TruncatedText";

export const MovieItem = (movie) => {
  const cardStyle = {
    width: "18rem",
  };

  const maxLength = 150;

  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card mx-3 my-4" style={cardStyle}>
      <Link to={`/movie/${movie.info.id}`}>
        <img
          className="card-img-top"
          src={img_path + movie.info.poster_path}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{movie.info.title}</h5>
          <TruncatedText text={movie.info.overview} maxLength={maxLength} />
        </div>
      </Link>
    </div>
  );
};
