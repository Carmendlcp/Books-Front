import React from "react";
import BookForm from "../components/BookForm";
import { addBook } from "../api/api";
import { useNavigate } from "react-router-dom";

const AddBookPage = () => {
  const navigate = useNavigate();

  const handleAddBook = async (book) => {
    try {
      await addBook(book);
      navigate("/"); // Navega de vuelta a la página de inicio después de añadir el libro
    } catch (error) {
      console.error("Error al añadir nuevo libro:", error);
    }
  };

  return (
    <div>
      <h1>Añadir nuevo libro</h1>
      <BookForm onSubmit={handleAddBook} />
    </div>
  );
};

export default AddBookPage;
