import React from "react";

export const MovieItem = (movie) => {
  const cardStyle = {
    width: "18rem",
  };

  let img_path = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="card mx-3 my-4" style={cardStyle}>
      <img
        className="card-img-top"
        src={img_path + movie.info.poster_path}
        alt="Card image cap"
      ></img>
      <div className="card-body">
        <h5 className="card-title">{movie.info.title}</h5>
        <p className="card-text overflow-hidden text-truncate ">
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </p>
      </div>
    </div>
  );
};
