import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Obtener el token del almacenamiento local
const getToken = () => localStorage.getItem("token");

export const fetchBooks = () => api.get("/books");

export const addBook = (book) => {
  const token = getToken();
  return api.post("/books", book, {
    headers: {
      "x-auth-token": token, // Incluye el token en los encabezados
    },
  });
};

export const updateBook = (id, book) => {
  const token = getToken();
  return api.put(`/books/${id}`, book, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const deleteBook = (id) => {
  const token = getToken();
  return api.delete(`/books/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

export const registerUser = (userData) => api.post("/users/register", userData);
export const loginUser = (userData) => api.post("/users/login", userData);
export const fetchUser = () => api.get("/users");

export const fetchBookDetails = (id) => api.get(`/books/${id}`);

export default api;

// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// export const fetchBooks = () => api.get("/books");
// export const addBook = (book) => api.post("/books", book);
// export const updateBook = (id, book) => api.put(`/books/${id}`, book);
// export const deleteBook = (id) => api.delete(`/books/${id}`);

// export const registerUser = (userData) => api.post("/users/register", userData);
// export const loginUser = (userData) => api.post("/users/login", userData);
// export const fetchUser = () => api.get("/users");

// export default api;
