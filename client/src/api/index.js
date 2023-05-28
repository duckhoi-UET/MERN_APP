import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => {
  return axios.get(`${URL}/posts`);
};
