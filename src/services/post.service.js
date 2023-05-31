import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/posts";


export const PostService = {
  async getAll() {
    const response = await axios.get(URL);
    return response.data;
  },

  async getById(id) {
    const response = await axios.get(`${URL}/${id}`);
    return response.data;
  },
  async getCommentById(id) {
    const response = await axios.get(`${URL}/${id}/comments`);
    return response.data;
  },
};
