import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/add-book">Add Book</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
