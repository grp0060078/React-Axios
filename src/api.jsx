// src/api.js
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getAllUsers = () => {
  return axios.get(BASE_URL);
};

export const createUser = (user) => {
  return axios.post(BASE_URL, user);
};

export const updateUser = (user) => {
  return axios.put(`${BASE_URL}/${user.id}`, user);
};

export const deleteUser = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
