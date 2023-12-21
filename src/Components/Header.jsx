import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={header}>
      <h1 style={title}>Freshest Foods &copy;</h1>
      <nav>
        <ul style={nav}>
          <li>
            <Link to="/" style={link}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/Cart" style={link}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/Checkout" style={link}>
              Checkout
            </Link>
          </li>
          <li>
            <Link to="/contact" style={link}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Styles for the header and navigation

const header = {
  background: "linear-gradient(90deg, red, white)",
  color: "#000",
  textAlign: "left",
  padding: "10px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "100px",
  width: "100%", // Set width to 100% to span the whole screen
};

const title = {
  fontFamily: "Arial, sans-serif", // You can change the font family if desired
  fontSize: "36px",
  fontWeight: "bold",
  color: "#FFFFFF", // White font color
  margin: 0,
  marginLeft: "20px",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Text shadow with blur
  letterSpacing: "2px", // Adjust the letter spacing for the bubble effect
};

const nav = {
  fontSize: "20px",
  listStyle: "none",
  display: "flex",
  gap: "20px", // Adjust the spacing between links
  alignItems: "center", // Vertically aligns the links
  marginRight: "60px",
};

const link = {
  textDecoration: "none",
  fontWeight: "bold",
  color: "#000", // Black font color for links
};

export default Header;
