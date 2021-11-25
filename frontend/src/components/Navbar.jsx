import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "10px 0px 20px",
      }}
    >
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/board">Board</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
