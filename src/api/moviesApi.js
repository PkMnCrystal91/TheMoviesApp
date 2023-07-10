import axios from "axios";

let API_key = "&api_key=ff56685198facead6ad507c2f07f55d4";

const moviesApi = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc" +
    API_key,
});

export default moviesApi;
