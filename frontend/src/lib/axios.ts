import Axios from "axios";

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:5000/api",
});
