import axios from "axios";

const appApi = axios.create({
  baseURL: "https://reqres.in/api",
});

export default appApi;
