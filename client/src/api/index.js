import axios from "axios";

const URL = "http://localhost:5000";

export const fetchPosts = () => {
  return axios.get(`${URL}/posts`);
};

export const createPost = (payload) => {
  return axios.post(`${URL}/posts/create`, payload);
};

export const updatePost = (payload) => {
  return axios.post(`${URL}/posts/${payload._id}`, payload);
};
