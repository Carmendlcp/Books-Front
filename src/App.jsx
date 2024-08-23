import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import Navbar from "./components/NavBar";
import "./styles/App.css";
import LoginPage from "./pages/LoginPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/add-book" element={<AddBookPage />} />
          <Route path="/edit-book/:id" element={<EditBookPage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
