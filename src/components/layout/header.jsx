import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/about">
        About
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/product">
        Products
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/team">
        Team
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="contact">
        Contact Us
      </Link>
    </header>
  );
}
const linkStyle = {
  color: "#ffffff"
};

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};
export default Header;
