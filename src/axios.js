import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://corona.lmao.ninja/",
  /* other custom settings */
});

export default axiosInstance;
