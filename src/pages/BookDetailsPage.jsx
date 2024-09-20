import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../api/api"; // Asegúrate de tener esta función en api.js

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBookDetails = async () => {
      try {
        const response = await fetchBookDetails(id);
        setBook(response.data);
      } catch (err) {
        setError("Error fetching book details");
      }
    };

    getBookDetails();
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!book) return <p>Loading...</p>;

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.author}</h2>
      <p>Category: {book.category}</p>
      <p>Rating: {book.rating} ★</p>
      <h3>Synopsis</h3>
      <p>{book.synopsis}</p>
      {/* Aquí podrías agregar más información, como reseñas, etc. */}
    </div>
  );
};

export default BookDetailsPage;
