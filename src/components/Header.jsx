import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav className="nav-container">
        <div className="nav-links">
          <Link to={"/"} className="nav-link">
            Task1
          </Link>
          <Link to={"/task2"} className="nav-link">
            Task2
          </Link>
          <Link to={"/task3"} className="nav-link">
            Task3
          </Link>
          <Link to={"/task4"} className="nav-link">
            Task4
          </Link>
        </div>
      </nav>
    </>
  );
};
export default Header;
