import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Obtener el token del almacenamiento local
const getToken = () => localStorage.getItem("token");

//Obtener todos los libros
export const fetchBooks = () => api.get("/books");

//Añadir nuevo libro (Con token)
export const addBook = (book) => {
  const token = getToken();
  return api.post("/books", book, {
    headers: {
      "x-auth-token": token, // Incluye el token en los encabezados
    },
  });
};

//editar libro (con token)
export const updateBook = (id, book) => {
  const token = getToken();
  return api.put(`/books/${id}`, book, {
    headers: {
      "x-auth-token": token,
    },
  });
};

//eliminar libro (token)
export const deleteBook = (id) => {
  const token = getToken();
  return api.delete(`/books/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};

//Registrar nuevo
export const registerUser = (userData) => api.post("/users/register", userData);

//iniciar sesión
export const loginUser = (userData) => api.post("/users/login", userData);

//Obtner info del usuario autenticado
export const fetchUser = () => {
  const token = getToken();
  return api.get("/users", {
    headers: {
      "x-auth-token": token,
    },
  });
};

//Obtener detalles de un libro por ID
export const fetchBookDetails = (id) => {
  const token = getToken();
  return api.get(`/books/${id}`, {
    headers: {
      "x-auth-token": token,
    },
  });
};
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
