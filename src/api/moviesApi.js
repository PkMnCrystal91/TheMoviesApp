import axios from "axios";

let API_key = "&api_key=ff56685198facead6ad507c2f07f55d4";
let base_url = "https://api.themoviedb.org/3";

export const getPopularMovies = () => {
  const url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

export const getMovieById = (paramId) => {
  const url = `${base_url}/movie/${paramId}?${API_key}`;

  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};
