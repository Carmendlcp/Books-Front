import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchBooks = () => api.get("/books");
export const addBook = (book) => api.post("/books", book);
export const updateBook = (id, book) => api.put(`/books/${id}`, book);
export const deleteBook = (id) => api.delete(`/books/${id}`);

export const registerUser = (userData) => api.post("/users/register", userData);
export const loginUser = (userData) => api.post("/users/login", userData);
export const fetchUser = () => api.get("/users");

export default api;
