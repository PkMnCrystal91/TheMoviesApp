import { useState } from "react";
import { Navbar } from "../../ui/components";
import { MovieGrid } from "../../ui/components/MovieGrid";

export const Home = () => {
  const [movieType, setMovieType] = useState(["Popular"]);

  const onChangeCategory = (newCategory) => {
    setMovieType([newCategory]);
  };

  return (
    <>
      <Navbar onChangeCategory={(value) => onChangeCategory(value)} />

      {movieType.map((category) => (
        <MovieGrid key={category} category={category} />
      ))}
    </>
  );
};
