import axios from "axios";

const api = axios.create({
  baseURL: "https://portfoliodb-tabatacsouto.b4a.run/",
});

export default api;