import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Logout from "./Logout";
import Register from "./Register";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Box component={Paper}>
        <div
          style={{
            width: "100px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/">Home</Link>
        </div>
      </Box>
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
