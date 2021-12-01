import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        height: "85px",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "10px 0px 20px",
      }}
    >
      <div
        style={{
          width: "80px",
        }}
      ></div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/board">Board</Link>
      </div>
      <div>
        <Link to="/about">About</Link>
      </div>
      <div>
        <Register />
        <Login />
        <Logout />
      </div>
    </nav>
  );
};

export default Navbar;
