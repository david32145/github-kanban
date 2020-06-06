import axios from "axios";
import LoginService from "./LoginService";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

api.interceptors.request.use((request) => {
  if (LoginService.isLogged()) {
    const user = LoginService.getUser();
    request.headers.authorization = user.id;
  }
  return request;
});

export default api;
