import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <div key={book._id}>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <Link to={`/book/${book._id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default BookList;
