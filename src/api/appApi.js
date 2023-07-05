import axios from "axios";

const appApi = axios.create({
  baseURL: "https://reqres.in/api/login",
});

export default appApi;
