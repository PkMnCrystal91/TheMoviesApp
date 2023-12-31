import axios from "axios";

let API_key = "&api_key=ff56685198facead6ad507c2f07f55d4";
let base_url = "https://api.themoviedb.org/3";

export const getMoviesByType = (type) => {
  if (type === "Popular") {
    const url = `${base_url}/discover/movie?sort_by=popularity.desc${API_key}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  if (type === "Theatre") {
    const url = `${base_url}/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22${API_key}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }

  if (type === "Comedie") {
    const url = `${base_url}/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc${API_key}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  }
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
