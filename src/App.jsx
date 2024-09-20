import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AddBookPage from "./pages/AddBookPage";
import EditBookPage from "./pages/EditBookPage";
import BookDetailsPage from "./pages/BookDetailsPage";
import Navbar from "./components/NavBar";
import "./styles/App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Verificar si hay un token en el almacenamiento local
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Si hay token, el usuario está autenticado
  }, []);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={isAuthenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route
            path="/add-book"
            element={
              isAuthenticated ? <AddBookPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/edit-book/:id"
            element={
              isAuthenticated ? <EditBookPage /> : <Navigate to="/login" />
            }
          />
          <Route
            path="/book/:id"
            element={
              isAuthenticated ? <BookDetailsPage /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
