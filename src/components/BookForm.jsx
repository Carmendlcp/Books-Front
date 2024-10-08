import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBook } from "../api/api";

const BookForm = () => {
  // Definimos el estado local para cada campo del formulario
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [borrowedBy, setBorrowedBy] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [review, setReview] = useState("");

  const navigate = useNavigate(); //Hook para redirigir al usuario

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Llamamos a la función onSubmit y pasamos los datos del formulario
    const newBook = {
      title,
      author,
      category,
      synopsis,
      publicationDate,
      pageCount: parseInt(pageCount, 10),
      isBorrowed,
      borrowedBy,
      currentPage: parseInt(currentPage, 10), // Convertimos a número
      review,
    };

    try {
      await addBook(newBook); // Llamada a la API
      alert("Libro añadido con éxito"); // Mensaje de confirmación
      navigate("/"); // Redirigir a la página principal para ver la lista actualizada
    } catch (error) {
      console.error("Error añadiendo el libro:", error);
      alert("Hubo un error al añadir el libro");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="author">Autor:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>

      <div>
        <label htmlFor="category">Categoría:</label>
        <input
          type="text"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="synopsis">Sinopsis:</label>
        <textarea
          id="synopsis"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        ></textarea>
      </div>

      <div>
        <label htmlFor="publicationDate">Fecha de publicación:</label>
        <input
          type="date"
          id="publicationDate"
          value={publicationDate}
          onChange={(e) => setPublicationDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="pageCount">Número de páginas:</label>
        <input
          type="number"
          id="pageCount"
          value={pageCount}
          onChange={(e) => setPageCount(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="isBorrowed">Es prestado:</label>
        <input
          type="checkbox"
          id="isBorrowed"
          checked={isBorrowed}
          onChange={(e) => setIsBorrowed(e.target.checked)}
        />
      </div>

      {isBorrowed && (
        <div>
          <label htmlFor="borrowedBy">Prestado a:</label>
          <input
            type="text"
            id="borrowedBy"
            value={borrowedBy}
            onChange={(e) => setBorrowedBy(e.target.value)}
          />
        </div>
      )}

      <div>
        <label htmlFor="currentPage">Marca página:</label>
        <input
          type="number"
          id="currentPage"
          value={currentPage}
          onChange={(e) => setCurrentPage(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="review">Reseña:</label>
        <textarea
          id="review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>

      <button type="submit">Añadir libro</button>
    </form>
  );
};

export default BookForm;
