import React, { useEffect, useState } from "react";
import { fetchBooks } from "../api/api";
import BookList from "../components/BookList";

const HomePage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      try {
        console.log("Fetching books..."); // Debug log
        const response = await fetchBooks();
        console.log("Books fetched:", response.data);
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    getBooks();
  }, []);

  console.log("Rendering HomePage", books); // Debug log

  return (
    <div>
      <h1>Books</h1>
      <BookList books={books} />
    </div>
  );
};

export default HomePage;
