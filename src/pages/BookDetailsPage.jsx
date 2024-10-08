import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookDetails } from "../api/api.js";

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
      <div className="book-header">
        <img src={book.coverImage} alt={book.title} className="book-cover" />
        <div className="book-info">
          <h1>{book.title}</h1>
          <h2>{book.author}</h2>
          <p>Category: {book.category}</p>
          <p>Borrowed By: {book.borrowedBy}</p>
          <p>Is Borrowed: {book.isBorrowed ? "Yes" : "No"}</p>
          <p>
            Publication Date:{" "}
            {new Date(book.publicationDate).toLocaleDateString()}
          </p>
          <p>Page Count: {book.pageCount}</p>
        </div>
      </div>
      <div className="book-synopsis">
        <h3>Synopsis</h3>
        <p>{book.synopsis}</p>
      </div>
      <div className="book-review">
        <h3>Review</h3>
        <p>{book.review}</p>
      </div>
      <div className="book-actions">
        <button>Add to Favorites</button>
        <button>Share</button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
